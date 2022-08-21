import { IObservableArray } from 'mobx';
import {IGameStateBase, IOddGroup} from './../'; 
import {FootballItem} from './';

export interface IFootballGroup extends IOddGroup {
  code: string;
  items: IObservableArray<FootballItem>;
  game: IGameStateBase;
  readonly title: string;
  addItem: () => FootballItem;
}
