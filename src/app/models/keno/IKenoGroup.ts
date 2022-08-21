import { IObservableArray } from 'mobx';
import { IGameStateBase, IOddGroup } from './../';
import KenoItem from './KenoItem';

interface IKenoGroup extends IOddGroup {
  code: string;
  items: IObservableArray<KenoItem>;
  game: IGameStateBase;
  readonly title: string;
  addItem: () => KenoItem;
}

export default IKenoGroup;
