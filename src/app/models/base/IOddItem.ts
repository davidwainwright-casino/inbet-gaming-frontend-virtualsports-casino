
import { IOddGroup, BaseBet, Dynamics } from './../';
import { IGameStateBase } from './';

export interface IOddItem {
  dynamics?: Dynamics;
  resultName?: string;
  resultValue?: string;
  group: IOddGroup;
  readonly favorite: boolean;
  readonly game: IGameStateBase;
  readonly key: string;
  readonly title: string;
  readonly num: number;
  readonly bets: BaseBet[];
  readonly betsAmount: number;
  makeBet: (value: number) => void;
  toogleFavorite: () => void;

  getGameBet(): any;
}
