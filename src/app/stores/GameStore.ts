import { action, observable, IObservableArray, computed, runInAction, transaction } from 'mobx';
import { fetchState } from '../api';
import { UNKNOWN_ERROR } from '../api/errorHandler';
import { foolballMetas } from '../models/football/foolballMetas';
import { DEFAULT_GAME, GAMES, sourcesMap } from '../consts/games';
import countBy from 'lodash/countBy';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import reverse from 'lodash/reverse';
import keys from 'lodash/keys';

import {
  FootballState,
  IFootballState,
  RaceState,
  IRaceState,
  IGameStateBase,
  oddsData,
  oddsDataGroups,
  GameModel,
  NotificationModel,
  NotificationType,
  Dynamics,
  FortunaState,
  IFortunaState,
  IKenoState,
} from '../models';
import config from '../api/configLoader';

import {
  Response,
  IGameState7XX as IGameState7XXProto,
  IGameState4001 as IGameState4001Proto,
  IGameState1024 as IGameState1024Proto,
  IGameState1013 as IGameState1013Proto,
  IGameState999XX as IGameState999XXProto,
  IBet,
  BetStatus,
  ITimers,
  IGameState1XXX,
  GameState999XX,
  Bet,
  IGameStateCommonFields,
  IRouletteMaxBets,
} from '../proto/bets.proto';
import { timeout, currencyFormat } from '../utils';
// import { RaceBet } from '../models/race/RaceBet';
// import { FootballBet } from '../models/football/FootballBet';
import i18n from '../locales/i18n';
import { IFortunaHistory } from '../models/fortuna';
import PenaltyState from '../models/penalty/PenaltyState';
import { IPenaltyState } from '../models/penalty/IPenaltyState';
// import { PenaltyBet } from '../models/penalty';
import KenoState from '../models/keno/KenoState';
// import { KenoBet } from '../models/keno';
import { RouletteState, IRouletteState } from '../models';
import { Bingo37State } from '../models/bingo37';
import { BaseBet } from '../models/base/BaseBet';

/**
 * Хранение всех основных состояний, а такще моделей состояний игр
 * Основное хранилище
 *
 * @export
 * @class GameStore
 */
export class GameStore {
  /**
   * Вычисляет сумму выплат для активных ставок, успользуется при отображении балланса в момент игры
   *
   * @readonly
   * @memberof GameStore
   */
  @computed public get payAmountOfActiveBets() {
    const games = this.getGamesMap();

    const sum = this.bets
      .filter(
        (bet) =>
          games[bet.gameState.source].round === bet.round &&
          bet.payAmount > 0 &&
          bet.status === BetStatus.BS_calculated,
      )
      .reduce((a, b) => a + b.payAmount, 0);
    return sum;
  }

  /**
   * Возвращает набор активных ставок
   *
   * @readonly
   * @memberof GameStore
   */
  @computed public get activeBets() {
    return this.bets.filter(
      (bet) => bet.gameState.round === bet.round && bet.status !== BetStatus.BS_user_canceled,
    );
  }

  /**
   * Возвращает набор прошлых ставок
   *
   * @readonly
   * @memberof GameStore
   */
  @computed get notActiveBets() {
    return this.bets.filter(
      (bet) => bet.gameState.round !== bet.round || bet.status === BetStatus.BS_user_canceled,
    );
  }

  /**
   * Вычисляет сумму ставок в текущей игре на текущий раунд
   *
   * @readonly
   * @memberof GameStore
   */
  @computed public get betsAmount() {
    return this.current.betsAmount;
  }

  /**
   * Возвращает набор ставок для отображения в истории ставок
   *
   * @readonly
   * @memberof GameStore
   */
  @computed get historyBets() {
    return this.notActiveBets.slice(0, 20);
  }

  public sources: number[] = GAMES.map((game: GameModel) => game.source);
  @observable public list: GameModel[] = GAMES;

  @observable public loading: boolean = false;
  @observable public loaded: boolean = false;
  @observable public betToCancel?: BaseBet;
  @observable public balance: number = 0;

  @computed public get balanceAvailable(): number {
    return this.balance - this.payAmountOfActiveBets;
  }

  @observable public currency: string = 'FUN';

  /**
   * Получение настроек игры
   *
   * @readonly
   * @memberof GameStore
   */
  @computed get gameConfig() {
    const sources = config.sources as any;
    if (sources && sources[this.name] && sources[this.name][this.currency]) {
      return sources[this.name][this.currency];
    } else {
      return null;
    }
  }

  @observable public maxBet: number = 500000;

  /**
   * Минимальный размер ставки
   *
   * @readonly
   * @type {number}
   * @memberof GameStore
   */
  @computed get minBet(): number {
    if (this.gameConfig && this.gameConfig.minBet) {
      return this.gameConfig.minBet;
    } else {
      return 100;
    }
  }

  /**
   * Максимальный размер ставки за раунд
   *
   * @readonly
   * @type {number}
   * @memberof GameStore
   */
  @computed get maxBetPerRound(): number {
    if (this.gameConfig && this.gameConfig.maxBetPerRound) {
      return this.gameConfig.maxBetPerRound;
    } else {
      return 0;
    }
  }

  /**
   * Размеры ставок для быстрых кнопок
   *
   * @readonly
   * @type {number[]}
   * @memberof GameStore
   */
  @computed get betButtons(): number[] {
    if (this.gameConfig && this.gameConfig.betButtons) {
      return this.gameConfig.betButtons;
    } else if (config.defaultBetButtons) {
      return config.defaultBetButtons;
    } else {
      return [100, 300, 500, 1000, 5000, 10000];
    }
  }

  /**
   * Сумма ув/ум размера ставки
   *
   * @readonly
   * @type {number}
   * @memberof GameStore
   */
  @computed get betStep(): number {
    if (this.gameConfig && this.gameConfig.betStep) {
      return this.gameConfig.betStep;
    } else {
      return 100;
    }
  }

  @observable public historyVisible: boolean = false;

  @observable public name: string;
  @observable public title: string;
  @observable public source: number;
  @observable public hideBalance: boolean = false;

  @observable public timeLeft: number = 0;
  @observable public timeRight: number = 0;
  @observable public timeTotal: number = 0;
  @observable public timeToStatusClosed: number = 7;
  @observable public timeToStatusStarted: number = 15;
  @observable public updateTimeLeft: number = 0;

  @observable public bets: IObservableArray<BaseBet> = observable.array([]);

  @observable public dogs6: RaceState = new RaceState(this);
  @observable public dogs3d: RaceState = new RaceState(this);
  @observable public horses6: RaceState = new RaceState(this);
  @observable public trone: RaceState = new RaceState(this);
  @observable public bike: RaceState = new RaceState(this);
  @observable public moto: RaceState = new RaceState(this);
  @observable public football: FootballState = new FootballState(this);
  @observable public fortuna: FortunaState = new FortunaState(this);
  @observable public penalty: PenaltyState = new PenaltyState(this);
  @observable public keno99920: KenoState = new KenoState(this);
  @observable public roulette: RouletteState = new RouletteState(this);
  @observable public bingo37: Bingo37State = new Bingo37State(this);

  @observable public notificationsEnabled: boolean = true;
  public notificationExpireTime: number = 15;
  @observable public notifications: NotificationModel[] = [];
  private notificationsCloseTimer?: NodeJS.Timeout;

  constructor() {
    this.name = DEFAULT_GAME.name;
    this.title = DEFAULT_GAME.title;
    this.source = DEFAULT_GAME.source;

    if (config.sources) {
      this.list = GAMES.filter((game: GameModel) => config.sources[game.name]);
      this.sources = this.list.map((game: GameModel) => game.source);
    }

    if (config.hideBalance) {
      this.hideBalance = true;
    }

    this.polling();

    this.startNotificationCycler();
    // let i = 1;
    // setInterval(() => this.addNotification(new NotificationModel(NotificationType.ERROR, 'd'+(i++))), 1000)
  }

  /**
   * Запуск цикличного переключения уведомлений
   *
   * @memberof GameStore
   */
  public startNotificationCycler() {
    if (this.notificationsCloseTimer) {
      clearInterval(this.notificationsCloseTimer);
    }
    this.notificationsCloseTimer = setInterval(() => this.closeOldNotifications(), 1000);
  }

  /**
   * Закрывает старые уведомления
   *
   * @memberof GameStore
   */
  public closeOldNotifications() {
    const now = new Date().getTime();

    this.notifications.forEach((notification) => {
      const secondDiff = Math.round((now - notification.createDate.getTime()) / 1000);
      if (secondDiff > this.notificationExpireTime) {
        this.closeNotification(notification);
      }
    });
  }

  /**
   * Закрывает уведомление
   *
   * @param {NotificationModel} notification
   * @memberof GameStore
   */
  @action.bound
  public closeNotification(notification: NotificationModel) {
    this.notifications = this.notifications.filter((n) => n.id !== notification.id);
  }

  /**
   * Добавление нового уведомления
   *
   * @param {NotificationModel} newNotification
   * @memberof GameStore
   */
  @action.bound
  public addNotification(newNotification: NotificationModel) {
    if (!this.notificationsEnabled && newNotification.type !== NotificationType.ERROR) {
      return;
    }

    const old = this.notifications.find((n) => n.id === newNotification.id);
    if (old) {
      this.closeNotification(old);
    }

    this.notifications.unshift(newNotification);
  }

  /**
   * Переключение включения уведомлений - циклично
   *
   * @memberof GameStore
   */
  @action.bound
  public toggleNotifications() {
    this.notificationsEnabled = !this.notificationsEnabled;

    if (!this.notificationsEnabled) {
      this.notifications = [];
    }
  }

  /**
   * Получение заголовка для страницы
   *
   * @param {number} source
   * @returns {string}
   * @memberof GameStore
   */
  public getTitle(source: number): string {
    const game = GAMES.find((g) => g.source === source);
    if (game) {
      return game.title;
    } else {
      return this.title;
    }
  }

  /**
   * Переключение видимости окна с историей - циклично
   *
   * @memberof GameStore
   */
  @action.bound
  public toggleHistoryVisibility() {
    this.historyVisible = !this.historyVisible;
  }

  /**
   * Получение данных с сервера и загрузка их в стор
   *
   * @memberof GameStore
   */
  public async polling() {
    try {
      const { response, error } = await fetchState(this.sources);

      if (response) {
        this.updateStore(response);
      } else if (error) {
        if (error !== UNKNOWN_ERROR) {
          console.error(error);
          this.addNotification(new NotificationModel(NotificationType.ERROR, error));
        }
        await timeout(1000);
      }

      this.polling();
    } catch (e) {
      console.error(e);
      await timeout(1000);
      this.polling();
    }
  }

  /**
   * Заполнение общих данных для всех типов игр
   *
   * @param {IGameStateBase} internal
   * @param {({ timers?: (ITimers|null), period?: (number|null),round?: (number|Long|null), video?: (string|null)})} ext
   * @memberof GameStore
   */
  @action
  public fillGameStateCommon(
    internal: IGameStateBase,
    ext: {
      timers?: ITimers | null;
      period?: number | null;
      round?: number | Long | null;
      video?: string | null;
      gameStateCommonFields?: (IGameStateCommonFields | null);
      maxbets?: (IRouletteMaxBets | null);
    },
  ) {
    const newPeriod = internal.period !== ext.period;
    internal.period = ext.period ? ext.period : 0;

    if (ext.round) {
      internal.round = ext.round as number;
    }

    internal.video = ext.video ? ext.video.replace('quality', 'low') : undefined;

    if (ext.timers) {

      if (ext.timers.end) {
        internal.timerEnd = ext.timers.end;
      }
      if (ext.timers.begin) {
        internal.timerBegin = ext.timers.begin;
      }
      if (ext.timers.current) {
        internal.timerCurrent = ext.timers.current;
        internal.updateTimeLeft = 0;
      }

      if (ext.timers.current && ext.timers.end) {
        const timeLeft = Math.floor(((ext.timers.end as number) - (ext.timers.current as number)) / 1000);
        internal.runLocalProgressTimer(timeLeft, newPeriod);
      }
    }

    if (ext.gameStateCommonFields) {
      internal.gameStateCommonFields = ext.gameStateCommonFields;
    }

    if (ext.maxbets) {
      internal.maxbets = ext.maxbets;
    }
  }

  /**
   * Заполнение специфичных данных для кено
   *
   * @param {number} source
   * @param {IKenoState} internal
   * @param {IGameState999XXProto} ext
   * @memberof GameStore
   */
  @action
  public fillGameState999XX(source: number, internal: IKenoState, ext: IGameState999XXProto) {
    internal.source = source;

    if (internal.round !== ext.round) {
      internal.outedIndexes.clear();
    }

    if (ext.period != internal.period) {
      internal.startDelayDelta = 0;

      if (ext.period === GameState999XX.Period.playing) {
        // Fix to solve problems with animation jitter and slow connection
        const startDelayDelta = (Number(ext.timers!.current) - Number(ext.timers!.begin)) / 1000;
        if (startDelayDelta < 10) {
          internal.startDelayDelta = startDelayDelta;
        }
      }
    }

    // console.log({
    //   exPeriod: ext.period,
    //   round: ext.round,
    //   historyRound: ext.history![ext.history!.length - 1].round,
    //   curPeriod: internal.period,
    //   updateTimeLeft: internal.updateTimeLeft,
    //   extENDCurrDelta: (Number(ext.timers!.end) - Number(ext.timers!.current)) / 1000,
    //   extBeginDelta: (Number(ext.timers!.current) - Number(ext.timers!.begin)) / 1000,
    //   extBegin: ext.timers!.begin,
    // });

    this.fillGameStateCommon(internal, ext);

    if (ext.history) {
      internal.history = ext.history; // .filter(h => h.round !== internal.round);
    }

    internal.isLoaded = true;
  }

  /**
   * Заполнение специфичных данных для скачек
   *
   * @param {number} source
   * @param {IRaceState} internal
   * @param {IGameState7XXProto} ext
   * @memberof GameStore
   */
  @action
  public fillGameState7XX(source: number, internal: IRaceState, ext: IGameState7XXProto) {
    internal.source = source;

    this.fillGameStateCommon(internal, ext);

    if (ext.history) {
      internal.history = ext.history
        .filter((h) => h.round !== internal.round)
        .sort((a, b) => Number(b.round) - Number(a.round));
    }

    if (ext.odds) {
      ext.odds.forEach((stateOdd) => {
        if (!stateOdd || !stateOdd.gameName) {
          return;
        }
        let group = internal.odds.find((odd) => odd.code === stateOdd.gameName);
        if (!group) {
          group = internal.addGroup(stateOdd.gameName);
        }

        if (group && stateOdd.results) {
          group.items.clear();

          const results = stateOdd.results.sort((a, b) =>
            (a.resultName || '') > (b.resultName || '') ? 1 : -1,
          );

          results.forEach((result) => {
            if (!group || !result.resultValue || parseFloat(result.resultValue) <= 1) {
              return;
            }

            const item = group.addItem();
            item.serverData = result;

            if (result.resultValue) {
              item.resultValue = result.resultValue;
            }
            if (result.resultName) {
              item.resultName = result.resultName;
            }
            if (result.dynamics) {
              switch (result.dynamics) {
                case 0:
                  item.dynamics = Dynamics.EQUAL;
                  break;
                case 1:
                  item.dynamics = Dynamics.UP;
                  break;
                case 2:
                  item.dynamics = Dynamics.DOWN;
                  break;
              }
            }
          });
        }
      });
      if (!internal.isLoaded) {
        internal.genPopular();
      }
    }

    internal.isLoaded = true;
  }

  /**
   * Заполнение специфичных данных для фортуны
   *
   * @param {number} source
   * @param {IFortunaState} internal
   * @param {IGameState1013Proto} ext
   * @memberof GameStore
   */
  @action
  public fillGameState1013(internal: IFortunaState, ext: IGameState1013Proto) {
    internal.source = 1013;

    this.fillGameStateCommon(internal, ext);

    if (ext.fullHistory) {
      internal.ofterNumbers = orderBy(
        map(countBy(ext.fullHistory, 'ball'), (v, k) => ({ ball: k, count: v })),
        ['count'],
        ['desc'],
      )
        .slice(0, 9)
        .map((o) => Number(o.ball));

      internal.history = reverse(
        ext.fullHistory.filter((h) => h.round).map((h) => ({ ...h })),
      ) as IFortunaHistory[];
    }

    if (typeof ext.ball === 'number' && ext.period) {
      internal.ball = ext.ball;
    }

    oddsDataGroups.forEach((oddsDataGroup) => {
      let group = internal.odds.find((odd) => odd.title === oddsDataGroup.title);
      if (!group) {
        group = internal.addGroup(oddsDataGroup.title);
        group.groupId = oddsDataGroup.id;
      }

      const odds = oddsData.filter((odd) => odd.groupId === oddsDataGroup.id);

      group.items.clear();

      odds.forEach((odd) => {
        if (!group) {
          return;
        }
        const item = group.addItem();
        item.oddData = odd;
      });
    });

    if (!internal.isLoaded) {
      internal.genPopular();
    }

    internal.isLoaded = true;
  }

  /**
   * Заполнение специфичных данных для футбола
   *
   * @param {IFootballState} internal
   * @param {IGameState4001Proto} ext
   * @memberof GameStore
   */
  @action
  public fillGameState4001(internal: IFootballState, ext: IGameState4001Proto) {
    internal.source = 4001;
    this.fillGameStateCommon(internal, ext);

    internal.remoteData = ext;

    if (ext.roundTeamsHistory) {
      internal.roundTeamsHistory = ext.roundTeamsHistory;
    }
    if (ext.team_AName) {
      internal.teamAName = ext.team_AName;
    }
    if (ext.team_BName) {
      internal.teamBName = ext.team_BName;
    }

    if (ext.odds) {
      foolballMetas.forEach((foolballMeta) => {
        let group = internal.odds.find((odd) => odd.code === foolballMeta.title);
        if (!group) {
          group = internal.addGroup(foolballMeta.title);
        }

        if (ext.odds && group) {
          const odds = ext.odds
            .filter((odd) => foolballMeta.checkKind(Number(odd.kind) || 0))
            .sort((a: any, b: any) => a.kind - b.kind);

          group.items.clear();

          odds.forEach((odd) => {
            if (!group || !odd.odd || odd.odd <= 100) {
              return;
            }
            const item = group.addItem();
            item.serverData = odd;
            item.meta = foolballMeta;
          });
        }
      });

      if (!internal.isLoaded) {
        internal.genPopular();
      }
    }

    internal.isLoaded = true;
  }

  /**
   * Заполнение специфичных данных для пеналти
   *
   * @param {IPenaltyState} internal
   * @param {IGameState1024Proto} ext
   * @memberof GameStore
   */
  @action
  public fillGameState1024(internal: IPenaltyState, ext: IGameState1024Proto) {
    internal.source = 1024;
    this.fillGameStateCommon(internal, ext);

    internal.video = ext.video ? ext.video.replace('inbet', 'no_logo') : undefined;

    if (ext.history) {
      internal.history = ext.history.sort((a, b) => Number(b.round) - Number(a.round));
    }
    if (ext.statistic) {
      internal.statistic = ext.statistic;
    }

    if (!internal.isLoaded) {
      internal.genPopular();
    }
    internal.isLoaded = true;
  }

  /**
   * Заполнение специфичных данных для Bingo37
   *
   * @param {IRouletteState} internal
   * @param {IGameState1XXX} ext
   * @memberof GameStore
   */
  @action
  public fillGameState1009(internal: IRouletteState, ext: IGameState1XXX) {
    internal.source = 1009;

    this.fillGameStateCommon(internal, ext);
    internal.video = ext.link ? ext.link : undefined;

    if (ext.history) {
      internal.history = ext.history
        .filter((e) => e.round !== internal.round)
        .sort((a, b) => Number(b.round) - Number(a.round));
    }
    if (ext.stats) {
      internal.stats = ext.stats;
    }

    if (!internal.isLoaded) {
      internal.genPopular();
    }
    internal.isLoaded = true;
  }

  /**
   * Заполнение специфичных данных для рулетки
   *
   * @param {IRouletteState} internal
   * @param {IGameState1XXX} ext
   * @memberof GameStore
   */
  @action
  public fillGameState1204(internal: IRouletteState, ext: IGameState1XXX) {
    internal.source = 1204;
    this.fillGameStateCommon(internal, ext);
    internal.video = ext.link
      ? ext.link.replace('video_roulette/', 'video_roulette/nologo/')
      : undefined;

    if (ext.history) {
      internal.history = ext.history
        .filter((e) => e.round !== internal.round)
        .sort((a, b) => Number(b.round) - Number(a.round));
    }
    if (ext.stats) {
      internal.stats = ext.stats;
    }

    if (!internal.isLoaded) {
      internal.genPopular();
    }
    internal.isLoaded = true;
  }

  /**
   * Обновление состояния по данных, которые пришли с сервера
   *
   * @param {Response} store
   * @memberof GameStore
   */
  public updateStore(store: Response) {
    if (store.gamestate2106) {
      this.fillGameState7XX(2106, this.dogs6, store.gamestate2106);
    }
    if (store.gamestate2116) {
      this.fillGameState7XX(2116, this.horses6, store.gamestate2116);
    }
    if (store.gamestate2120) {
      this.fillGameState7XX(2120, this.dogs3d, store.gamestate2120);
    }
    if (store.gamestate2121) {
      this.fillGameState7XX(2121, this.trone, store.gamestate2121);
    }
    if (store.gamestate2122) {
      this.fillGameState7XX(2122, this.bike, store.gamestate2122);
    }
    if (store.gamestate2123) {
      this.fillGameState7XX(2123, this.moto, store.gamestate2123);
    }
    if (store.gamestate4001) {
      this.fillGameState4001(this.football, store.gamestate4001);
    }

    if (store.gamestate1013) {
      this.fillGameState1013(this.fortuna, store.gamestate1013);
    }
    if (store.gamestate1024) {
      this.fillGameState1024(this.penalty, store.gamestate1024);
    }
    if (store.gamestate99920) {
      this.fillGameState999XX(99920, this.keno99920, store.gamestate99920);
    }
    if (store.gamestate1204) {
      this.fillGameState1204(this.roulette, store.gamestate1204);
    }
    if (store.gamestate1009) {
      this.fillGameState1009(this.bingo37, store.gamestate1009);
    }

    if (store.bets && store.bets.length > 0) {
      this.bets.clear();

      store.bets
        .sort((a: IBet, b: IBet) => Number(a.createdAt) - Number(b.createdAt))
        .forEach((remoteBet) => this.addBetFromServer(remoteBet, store));

      this.checkBets();
    }

    if (store.device) {
      const { balance, currency } = store.device;
      if (balance) {
        this.balance = Number(balance);
      } else {
        this.balance = 0;
      }
      if (currency) {
        this.currency = currency;
      }
    }
    this.maxBet = store.maxBet as number;
    this.loaded = true;
  }

  /**
   * Добавление ставки с сервера в стор
   *
   * @param {IBet} remoteBet
   * @returns
   * @memberof GameStore
   */
  public addBetFromServer(remoteBet: IBet, store?: Response) {
    if (!remoteBet.gameId) {
      return;
    }

    remoteBet.gameId = sourcesMap[remoteBet.gameId] || remoteBet.gameId; // TODO: refactor it / not overwrite newSources

    const gameState = this.getGameByGameID(Number(remoteBet.gameId));

    const bet = gameState.createBet(remoteBet);

    this.bets.unshift(bet);
  }

  /**
   * Проверка всех ставок в момент их добавления для обработки отображения уведомлений
   *
   * @returns
   * @memberof GameStore
   */
  public checkBets() {
    if (!this.notificationsEnabled) {
      return;
    }

    const games = this.getGamesMap();

    keys(games)
      .map((k) => games[Number(k)])
      .forEach((game) => {
        if (game.lastRound === game.round) {
          return;
        }

        const notifications: NotificationModel[] = [];

        this.bets.map((bet) => {
          if (
            game.source === bet.gameState.source &&
            game.lastRound === bet.round &&
            bet.status === BetStatus.BS_calculated
          ) {
            const gameTitle = this.getTitle(bet.gameState.source);

            if (bet.payAmount) {
              notifications.push(
                new NotificationModel(
                  NotificationType.WIN,
                  i18n.t('notification_win', {
                    game: gameTitle,
                    amount: currencyFormat(bet.winAmount, this.currency),
                  }),
                  bet.key,
                ),
              );
            } else {
              notifications.push(
                new NotificationModel(
                  NotificationType.LOSE,
                  i18n.t('notification_lose', {
                    game: gameTitle,
                    amount: currencyFormat(bet.betAmount, this.currency),
                  }),
                  bet.key,
                ),
              );
            }
          }
        });

        notifications
          .sort((a, b) => (a.type > b.type ? -1 : 1))
          .forEach((n) => this.addNotification(n));

        game.lastRound = game.round;
      });
  }

  /**
   * Смена активной игры
   *
   * @param {string} name
   * @memberof GameStore
   */
  @action
  public async selectGame(name: string) {
    const nextGame = this.list.find((game: GameModel) => game.name === name);
    if (nextGame) {
      this.name = nextGame.name;
      this.title = nextGame.title;
      this.source = nextGame.source;
    }
  }

  /**
   * Получение карты с ключом - код игры и значение - её конфигурация
   *
   * @private
   * @memberof GameStore
   */
  private getGamesMap: () => { [source: number]: IGameStateBase } = () =>
    GAMES.reduce((acc, { source, pickStore }) => ({ ...acc, [source]: pickStore(this) }), {});

  /**
   * Карта игр
   *
   * @readonly
   * @type { [source: number]: IGameStateBase }
   * @memberof GameStore
   */
  @computed get gamesMap(): { [source: number]: IGameStateBase } {
    return this.getGamesMap();
  }

  /**
   * Текущая игра
   *
   * @readonly
   * @type {IGameStateBase}
   * @memberof GameStore
   */
  @computed get current(): IGameStateBase {
    return this.gamesMap[this.source];
  }

  /**
   * Получение настройки игры по её коду
   *
   * @private
   * @param {number} gameId
   * @returns {IGameStateBase}
   * @memberof GameStore
   */
  private getGameByGameID(gameId: number): IGameStateBase {
    return this.getGamesMap()[gameId];
  }
}

export default GameStore;
