import { IObservableArray } from 'mobx';
import { IGameStateBase, IOddGroup } from './../'; 
import { RaceItem } from './';

export interface IRaceGroup extends IOddGroup {
  code: string;
  items: IObservableArray<RaceItem>;
  game: IGameStateBase;
  readonly title: string;
  addItem: () => RaceItem;
}
