import { observable, observe, action, computed, IObservableArray, trace } from 'mobx';
import { OddGroup, BaseBet } from './';
// import Long from 'long';
import { GameStore } from './../../stores';
import { IGameStateBase, OddItem, GameStatus } from './../';

import { IBet, BetStatus, IGameStateCommonFields, IRouletteMaxBets } from '../../proto/bets.proto';
import { randomArray } from './../../utils';
import { GAMES } from './../../consts/games';
import minNotZero from '../../utils/minNotZero';

/**
 * Общее состояние игры
 *
 * @export
 * @class GameStateBase
 * @implements {IGameStateBase}
 */
export class GameStateBase implements IGameStateBase {
  @observable public startDelayDelta: number = 0;

  @computed public get timeToStatusStarted() {
    if (!this.timeTotal || !this.videoDuration) {
      return 15;
    }

    return this.timeTotal - this.videoDuration;
  }

  /**
   * Общее время раунда
   *
   * @readonly
   * @memberof GameStateBase
   */
  @computed public get timeTotal() {
    if (!this.timerEnd || !this.timerBegin) {
      return 0;
    }

    return Math.floor((this.timerEnd - this.timerBegin) / 1000);
  }

  /**
   * Формирует набор популярных ставок
   *
   * @readonly
   * @memberof GameStateBase
   */
  @computed public get popular() {
    const items: OddItem[] = [];
    this.odds.forEach((group) => group.items.forEach((item) => items.push(item)));

    return this.popularNumbers.map((i) => items[i]).filter((i) => !!i);
  }

  @computed public get timeRight() {
    if (!this.timerCurrent || !this.timerEnd || !this.timerBegin || !this.timeTotal) {
      return 0;
    }

    // const timeRight = Math.floor((this.timerEnd - this.timerCurrent) / 1000) + this.updateTimeLeft;

    // return this.videoDuration ? this.videoDuration - timeRight : timeRight;// timeRight > this.timeTotal ? this.timeTotal : timeRight;

    // was
    //const timeRight = Math.floor((this.timerCurrent - this.timerBegin) / 1000) + this.updateTimeLeft;

    // timeRight -= Number(this.startDelayDelta);

    const timeRight = this.timeTotal - this.timeLeft;

    return timeRight > this.timeTotal ? this.timeTotal : timeRight;
  }

  @computed public get serverTimeLeft() {
    if (this.timerEnd === undefined || this.timerCurrent === undefined) {
      return 0;
    }
    return this.timerEnd - this.timerCurrent;
  }

  prevTimeLeft: number = 0;

  @computed public get timeLeft() {
    return this.localTimeLeft;
    /*
    if (this.timerEnd === undefined || this.timerCurrent === undefined) {
      return 0;
    }

    let timeLeft = Math.floor((this.timerEnd - this.timerCurrent) / 1000) - this.updateTimeLeft;
    timeLeft = timeLeft > 0 ? timeLeft : 0;
    
    if (this.prevTimeLeft !== 0 && timeLeft > 0 && timeLeft > this.prevTimeLeft && (timeLeft - this.prevTimeLeft) <= 3) {
      timeLeft = this.prevTimeLeft;
    } else {
      this.prevTimeLeft = timeLeft;
    }

    return timeLeft;
    */
  }

  /**
   * Статус текущего раунда игры
   *
   * @readonly
   * @memberof GameStateBase
   */
  @computed public get status() {
    const playing = !!this.period;
    let timeLeft = this.timeLeft;

    if (!timeLeft) {
      timeLeft = 0; // return GameStatus.NONE;
    }

    // console.log('status', {
    //   period: this.period,
    //   resultBad: playing && timeLeft <= this.timeToStatusStarted,
    //   timeLeft,
    //   timeRight: this.timeRight,
    //   timeToStatusStarted: this.timeToStatusStarted,
    //   timerEnd: this.timerEnd,
    //   timerCurrent: this.timerCurrent,
    //   updateTimeLeft: this.updateTimeLeft,
    //   startDelayDelta: this.startDelayDelta,
    // });

    // if (playing && timeLeft <= this.timeToStatusStarted) {
    //   trace(true);
    // }

    if (playing) {
      return timeLeft <= this.timeToStatusStarted ? GameStatus.FINISHED : GameStatus.STARTED;
    } else {
      return timeLeft <= this.timeToStatusClosed ? GameStatus.CLOSED : GameStatus.OPEN;
    }
  }

  /**
   * Все ставки для данной игры
   *
   * @readonly
   * @memberof GameStateBase
   */
  @computed public get activeBets(): BaseBet[] {
    return this.root.activeBets.filter((bet) => bet.gameState === this && bet.round === this.round);
  }

  /**
   * Вычисляет сумму ставок в текущей игре на текущий раунд
   *
   * @readonly
   * @memberof GameStateBase
   */
  @computed public get betsAmount(): number {
    return this.activeBets
      .filter((bet) => bet.betAmount > 0 && bet.status !== BetStatus.BS_denied)
      .reduce((a, b) => a + b.betAmount, 0);
  }

  @computed public get title(): string {
    return this.root.getTitle(this.source);
  }

  public source = 0;

  @observable public isLoaded = false;
  @observable public favoritesCollapsed = true;
  @observable public period?: number;
  @observable public round?: number;
  @observable public lastRound?: number;
  @observable public timerBegin?: number;
  @observable public timerCurrent?: number;
  @observable public timerEnd?: number;
  @observable public video: string = 'about:blank';

  @observable public videoDuration: number = 0;
  @observable public updateTimeLeft: number = 0;
  @observable public localTimeLeft: number = 0;
  @observable public timeToStatusClosed: number = 7;
  // @observable public timeToStatusStarted: number = 15;

  @observable public favorites: IObservableArray<string> = observable.array([]);
  @observable public odds: IObservableArray<OddGroup> = observable.array([]);
  @observable public popularNumbers: IObservableArray<number> = observable.array([]);

  @observable public gameStateCommonFields?: IGameStateCommonFields | null = null;
  @observable public maxbets?: IRouletteMaxBets | null = null;

  @computed public get maxBet(): number {
    return this.gameStateCommonFields && this.gameStateCommonFields.maxBet
      ? parseFloat(this.gameStateCommonFields.maxBet.toString() || '')
      : this.root.maxBet;
  }

  @computed public get maxBetsAllRound(): number {
    const slider =
      this.gameStateCommonFields && this.gameStateCommonFields.slider
        ? this.gameStateCommonFields.slider.map((s) => parseFloat(s.toString() || ''))
        : [];
    const minInSlider = minNotZero(slider);
    const maxAllRound = this.maxbets && this.maxbets.allRound ? this.maxbets.allRound : 0;

    const maxBetBySlider = maxAllRound ? maxAllRound * minInSlider : 0;

    const maxBetForRound = minNotZero([this.maxBet, maxBetBySlider]);

    return maxBetForRound;
  }

  public root: GameStore;
  private progressTimer?: NodeJS.Timer;

  constructor(root: GameStore) {
    this.root = root;
    this.updateTimeLeft = 0;
    this.runProgressTimer();

    // observe(this, (change) => {
    //   if (this.source !== 99920) {
    //     return;
    //   }

    //   // console.log({ timeRight: this.timeRight });

    //   console.warn(
    //     this.source,
    //     JSON.stringify(
    //       {
    //         period: this.period,
    //         status: this.status,
    //         videoDuration: this.videoDuration,
    //         timeLeft: this.timeLeft,
    //         timeRight: this.timeRight,
    //         timeToStatusClosed: this.timeToStatusClosed,
    //         timeToStatusStarted: this.timeToStatusStarted,
    //       },
    //       null,
    //       4,
    //     ),
    //   );
    // });
  }

  public setVideoDuration(duration: number) {
    // console.log(this.source, { duration, timeTotal: this.timeTotal, timeLeft: this.timeLeft, d: (this.timeTotal - this.timeLeft!) });

    this.videoDuration = Math.ceil(duration);
  }

  /**
   * Создает группу доступных ставок и возвращает её
   *
   * @param {string} code
   * @returns {OddGroup}
   * @memberof GameStateBase
   */
  public addGroup(code: string): OddGroup {
    return new OddGroup(this, code);
  }

  /**
   * Генерация популярных игр
   *
   * @memberof GameStateBase
   */
  public genPopular(): void {
    const items: OddItem[] = [];
    this.odds.forEach((group) => group.items.forEach((item) => items.push(item)));
    this.popularNumbers = randomArray(5, items.length).filter(
      (v, i, a) => a.indexOf(v) === i,
    ) as IObservableArray<number>;
  }

  /**
   * Смена видимости избранных игр - циклично
   *
   * @memberof GameStateBase
   */
  @action.bound
  public favoritesCollapseToggle() {
    this.favoritesCollapsed = !this.favoritesCollapsed;
  }

  public createBet(remoteBet: IBet): BaseBet {
    return new BaseBet(this, remoteBet);
  }

  /**
   * Запуск таймера для синхронизации времени, между ответами сервера
   *
   * @private
   * @memberof GameStateBase
   */
  @action.bound
  private runProgressTimer() {
    if (this.progressTimer) {
      clearInterval(this.progressTimer);
    }
    this.progressTimer = setInterval(() => {
      try {
        // console.log('UPDATE PROGRESS');
        if (this.timeLeft && this.timeLeft > 0) {
          this.updateTimeLeft++;
        }
      } catch (e) {
        console.error(e);
      }
    }, 1000);
  }

  private localProgressTimer?: NodeJS.Timer;

  /**
   * Запуск локального таймера
   *
   * @private
   * @memberof GameStateBase
   */
  @action
  runLocalProgressTimer = (timeLeft: number, newPeriod?: boolean) => {
    if ((timeLeft <= 0 || this.localTimeLeft > 0) && !newPeriod) {
      return;
    }

    if (this.localTimeLeft <= 0 || newPeriod) {
      this.localTimeLeft = timeLeft;
      this.decreaseLocalTimeLeft();
    }
  };

  @action
  decreaseLocalTimeLeft = () => {
    const localTime = this.localTimeLeft;
    if (this.localTimeLeft > 0) {
      this.localTimeLeft--;
    }

    if (this.localProgressTimer) {
      clearInterval(this.localProgressTimer);
    }

    if (!this.localTimeLeft || this.localTimeLeft <= 0) {
      return;
    }

    let delay = 0;
    if (localTime * 1000 > this.serverTimeLeft) {
      delay = 1000 - Math.floor((localTime * 1000 - this.serverTimeLeft) / localTime);
    } else {
      delay = 1000 + Math.floor((this.serverTimeLeft - localTime * 1000) / localTime);
    }

    if (delay > 2000) {
      delay = 1000;
    }

    this.localProgressTimer = setTimeout(
      () => {
        try {
          this.decreaseLocalTimeLeft();
        } catch (e) {
          console.error(e);
        }
      },
      delay && isFinite(delay) && !isNaN(delay) ? delay : 1000,
    );
  };
}
