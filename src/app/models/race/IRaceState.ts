import { IObservableArray } from 'mobx';
import { IGameStateBase } from './../'
import  { IRaceGroup } from './';
import { GameState7XX as GameState7XXProto } from '../../proto/bets.proto';

export interface IRaceState extends IGameStateBase {
  odds: IObservableArray<IRaceGroup>;
  history?: GameState7XXProto.IHistoryItem[];
  addGroup: (code: string) => IRaceGroup;
}
