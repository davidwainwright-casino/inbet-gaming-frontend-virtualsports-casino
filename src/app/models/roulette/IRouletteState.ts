import { IObservableArray } from 'mobx';
import { IGameStateBase } from './../base/';
import { IRouletteGroup } from './IRouletteGroup';
import { GameState1XXX } from '../../proto/bets.proto';

export interface IRouletteState extends IGameStateBase {
  odds: IObservableArray<IRouletteGroup>;
  history: GameState1XXX.IHistoryItem[];
  stats?: number[] | null;
  fillData: () => void;
  addGroup: (code: string) => IRouletteGroup;
}
