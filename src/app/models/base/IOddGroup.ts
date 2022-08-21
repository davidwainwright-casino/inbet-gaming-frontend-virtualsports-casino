import { IObservableArray } from 'mobx';
import {OddItem, IOddItem, IGameStateBase} from '../'; 

export interface IOddGroup {
  code: string;
  columns?: number;
  items: IObservableArray<OddItem>;
  game: IGameStateBase;
  readonly title: string;
  addItem: () => IOddItem;
}
