import { IObservableArray, observable, computed, action } from 'mobx';
import { GameStateBase } from './../base/GameStateBase';
import { GameStore } from '../../stores';
import i18n from '../../locales/i18n';
import { IRouletteState, RouletteBet, RouletteGroup, RouletteOdd, ROULETTE_ODDS } from '.';
import { GameState1XXX, IBet, RouletteBet as RouletteBetProto } from '../../proto/bets.proto';
import { GameStatus } from '..';

export class RouletteState extends GameStateBase implements IRouletteState {
  @observable public odds: IObservableArray<RouletteGroup> = observable.array([]);
  @observable public history: GameState1XXX.IHistoryItem[] = [];
  @observable public stats?: number[] | null = [];

  constructor(root: GameStore) {
    super(root);

    // this.videoDuration = 25;

    this.fillData();
  }

  public fillData() {
    const sectorGroup = this.addGroup(i18n.t('roulette_bets_by_sector'));
    sectorGroup.columns = 4;
    const commonGroup = this.addGroup(i18n.t('roulette_bets_by_zones'));
    commonGroup.columns = 4;
    ROULETTE_ODDS.forEach((odd: RouletteOdd) => {
      if (odd.type === RouletteBetProto.Type.SECTOR_LIST) {
        sectorGroup.add(odd);
      } else {
        commonGroup.add(odd);
      }
    });
  }

  public setVideoDuration(duration: number) {
    this.videoDuration = Math.ceil(duration);
  }

  @computed public get serverTimeLeft() {
    if (this.timerEnd === undefined || this.timerCurrent === undefined) {
      return 0;
    }
    return this.timerEnd - this.timerCurrent +
      (this.period === GameState1XXX.Period.spin ? 30000 : 0);
  }

  @computed public get timeLeft() {
    return this.localTimeLeft;
    /*
    if (this.timerEnd === undefined || this.timerCurrent === undefined) {
      return 0;
    }

    let timeLeft =
      Math.floor((this.timerEnd - this.timerCurrent) / 1000) -
      this.updateTimeLeft +
      (this.period === GameState1XXX.Period.spin ? 30 : 0);

    timeLeft = timeLeft > 0 ? timeLeft : 0;

    if (this.prevTimeLeft !== 0 && timeLeft > 0 && timeLeft > this.prevTimeLeft && (timeLeft - this.prevTimeLeft) <= 3) {
      timeLeft = this.prevTimeLeft;
    } else {
      this.prevTimeLeft = timeLeft;
    }

    return timeLeft;
    */
  }

  @computed public get videoDurationDepended() {
    return (
      this.videoDuration +
      (this.videoDuration ? (this.period === GameState1XXX.Period.spin ? 0 : -30) : 0)
    );
  }

  @computed public get timeToStatusStarted() {
    if (!this.timeTotal || !this.videoDuration) {
      return 15;
    }

    return this.timeTotal - this.videoDuration; // + (this.period === GameState1XXX.Period.spin ? 30 : 0);
  }

  @computed public get timeTotal() {
    if (!this.timerEnd || !this.timerBegin) {
      return 0;
    }

    return (
      Math.floor((this.timerEnd - this.timerBegin) / 1000) +
      (this.period === GameState1XXX.Period.spin ? 30 : 0)
    );
  }

  /**
   * Статус текущего раунда игры
   *
   * @readonly
   * @memberof GameStateBase
   */
  @computed public get status() {
    let timeLeft = this.timeLeft;
    if (!timeLeft) {
      timeLeft = 0;
    }

    if (this.period === GameState1XXX.Period.win) {
      return GameStatus.FINISHED;
    } else if (this.period === GameState1XXX.Period.spin) {
      return timeLeft <= this.timeToStatusStarted ? GameStatus.FINISHED : GameStatus.STARTED;
    } else {
      return timeLeft <= this.timeToStatusClosed ? GameStatus.CLOSED : GameStatus.OPEN;
    }
  }

  public addGroup(code: string): RouletteGroup {
    const item = new RouletteGroup(this, code);
    this.odds.push(item);
    return item;
  }

  public createBet(remoteBet: IBet): RouletteBet {
    return new RouletteBet(this, remoteBet);
  }


  @action
  runLocalProgressTimer = (timeLeft: number, newPeriod?: boolean) => {
    const left = timeLeft + (this.period === GameState1XXX.Period.spin ? 30000 : 0);
    if ((left <= 0 || this.localTimeLeft > 0) && !newPeriod) {
      return;
    }

    if (this.localTimeLeft <= 0 || newPeriod) {
      this.localTimeLeft = left;
      this.decreaseLocalTimeLeft();
    }
  };
}
