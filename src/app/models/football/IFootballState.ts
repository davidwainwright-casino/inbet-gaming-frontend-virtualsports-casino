import { IObservableArray } from 'mobx';
import { IGameStateBase } from './../'
import { IFootballGroup } from './';
import { GameState4001 as GameState4001Proto, IGameState4001 } from '../../proto/bets.proto';

export interface IFootballState extends IGameStateBase {
  teamAName?: string;
  teamBName?: string;
  readonly teamALogoUrl: string;
  readonly teamBLogoUrl: string;
  remoteData?: IGameState4001;
  odds: IObservableArray<IFootballGroup>;
  roundTeamsHistory?: GameState4001Proto.IRoundTeamsHistory[];
  addGroup: (code: string) => IFootballGroup;
}
