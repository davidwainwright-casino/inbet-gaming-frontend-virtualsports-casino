import { IObservableArray } from 'mobx';
import { IGameStateBase, IOddGroup} from './../'; 
import PenaltyItem from './PenaltyItem';

export interface IPenaltyGroup extends IOddGroup {
  code: string;
  items: IObservableArray<PenaltyItem>;
  game: IGameStateBase;
  readonly title: string;
  addItem: () => PenaltyItem;
}
