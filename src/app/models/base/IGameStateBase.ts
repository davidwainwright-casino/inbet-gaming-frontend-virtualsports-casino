import { IObservableArray } from 'mobx';
import Long from 'long';
import { GameStore } from './../../stores';
import { IOddGroup, GameStatus, IOddItem, BaseBet } from './../';
import { IBet, IGameStateCommonFields, IRouletteMaxBets } from '../../proto/bets.proto';

export interface IGameStateBase {
  root: GameStore;
  source: number;
  period?: number;
  round?: number;
  lastRound?: number;
  timerBegin?: number | Long;
  timerCurrent?: number | Long;
  updateTimeLeft?: number;
  readonly timeToStatusStarted: number;
  timeToStatusClosed: number;
  timerEnd?: number | Long;
  video?: string;
  videoDuration: number;
  isLoaded: boolean;
  favoritesCollapsed: boolean;
  startDelayDelta: number;
  odds: IObservableArray<IOddGroup>;
  readonly popular: IOddItem[];
  popularNumbers: IObservableArray<number>;
  status: GameStatus;
  readonly title: string;
  readonly timeLeft?: number;
  readonly timeRight?: number;
  readonly timeTotal: number;
  readonly activeBets: BaseBet[];
  readonly betsAmount: number;
  favorites: IObservableArray<string>;

  createBet: (bet: IBet) => BaseBet;
  setVideoDuration: (duration: number) => void;
  favoritesCollapseToggle: () => void;
  addGroup: (code: string) => IOddGroup;
  // setVideoDuration: (duration: number) => void;
  genPopular: () => void;
  runLocalProgressTimer: (timeLeft: number, newPeriod?: boolean) => void;
  gameStateCommonFields?: (IGameStateCommonFields | null);
  maxbets?: (IRouletteMaxBets | null);

  maxBet: number;
  maxBetsAllRound: number;
}
