import { IObservableArray } from 'mobx';
import { IGameStateBase, IOddGroup } from './../';
import { FortunaItem } from './';

export interface IFortunaGroup extends IOddGroup {
  code: string;
  groupId: number;
  items: IObservableArray<FortunaItem>;
  game: IGameStateBase;
  readonly title: string;
  addItem: () => FortunaItem;
}
