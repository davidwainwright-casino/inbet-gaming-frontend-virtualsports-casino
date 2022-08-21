import { IObservableArray } from 'mobx';
import { IGameStateBase } from './../';
import { IFortunaGroup } from './';

export interface IFortunaHistory {
  round: number;
  ball: number;
}

export interface IFortunaState extends IGameStateBase {
  ball?: number;
  odds: IObservableArray<IFortunaGroup>;
  // readonly bets: FortunaBet[];
  history?: IFortunaHistory[];
  ofterNumbers: number[];
  addGroup: (code: string) => IFortunaGroup;
}
