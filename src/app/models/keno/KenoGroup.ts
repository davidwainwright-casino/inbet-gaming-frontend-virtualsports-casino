import { computed, observable, IObservableArray } from 'mobx';
import { OddGroup } from '../';
import KenoItem from './KenoItem';
import IKenoGroup from './IKenoGroup';
import { KenoOdd } from '.';

export default class KenoGroup extends OddGroup implements IKenoGroup {
  @observable public items: IObservableArray<KenoItem> = observable.array([]);

  public addItem(): KenoItem {
    const item = new KenoItem(this);
    this.items.push(item);
    return item;
  }

  public add(odd: KenoOdd): KenoItem {
    const item = new KenoItem(this, odd);
    this.items.push(item);
    return item;
  }
}
