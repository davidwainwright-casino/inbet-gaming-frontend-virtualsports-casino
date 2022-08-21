import { IObservableArray } from 'mobx';
import {IGameStateBase, IOddGroup} from './../base'; 
import RouletteItem from './RouletteItem';

export interface IRouletteGroup extends IOddGroup {
  code: string;
  items: IObservableArray<RouletteItem>;
  game: IGameStateBase;
  readonly title: string;
  addItem: () => RouletteItem;
}
