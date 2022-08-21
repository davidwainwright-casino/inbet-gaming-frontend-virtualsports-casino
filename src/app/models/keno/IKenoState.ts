import { IObservableArray } from 'mobx';
import { IGameStateBase } from './../';
import IKenoGroup from './IKenoGroup';
import { GameState999XX } from '../../proto/bets.proto';

export interface IKenoState extends IGameStateBase {
  readonly usedNumbers: number[];
  readonly winNumbers: number[];
  outedIndexes: IObservableArray<number>;
  readonly outedNumbers: number[];
  selected: number[];
  history: GameState999XX.IHistoryItem[];
  betAmount: number;
  odds: IObservableArray<IKenoGroup>;
  makeBet: () => void;
  toggle: (num: number) => void;
  addGroup: (code: string) => IKenoGroup;
}
