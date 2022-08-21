import { IObservableArray } from 'mobx';
import { IGameStateBase} from './../'
import {IPenaltyGroup} from './IPenaltyGroup';
import { GameState1024 } from '../../proto/bets.proto';

export interface IPenaltyState extends IGameStateBase {
  odds: IObservableArray<IPenaltyGroup>;
  history: GameState1024.IHistoryItem[];
  statistic?: (GameState1024.IStatisticItem | null);
  addGroup: (code: string) => IPenaltyGroup;
}
