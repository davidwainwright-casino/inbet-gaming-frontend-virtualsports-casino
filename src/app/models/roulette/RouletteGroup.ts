import { computed, observable, IObservableArray } from 'mobx';
import { OddGroup, RouletteOdd } from '..';
import { IRouletteGroup, RouletteItem } from '.';

export class RouletteGroup extends OddGroup implements IRouletteGroup {
  @observable public items: IObservableArray<RouletteItem> = observable.array([]);

  /**
   *
   *
   * @readonly
   * @memberof PenaltyGroup
   */
  @computed get title() {
    return this.code;
  }

  public addItem(): RouletteItem {
    const item = new RouletteItem(this);
    this.items.push(item);
    return item;
  }

  public add(odd: RouletteOdd): RouletteItem {
    const item = new RouletteItem(this, odd);
    this.items.push(item);
    return item;
  }
}

export default RouletteGroup;
