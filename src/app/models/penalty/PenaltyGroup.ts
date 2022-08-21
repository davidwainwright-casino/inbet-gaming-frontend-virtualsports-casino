import { computed, observable, IObservableArray } from 'mobx';
import { OddGroup } from '../';
import PenaltyItem from './PenaltyItem'; 
import {IPenaltyGroup} from './IPenaltyGroup';
import { PenaltyOdd } from '.';

export class PenaltyGroup extends OddGroup implements IPenaltyGroup {
  @observable public items: IObservableArray<PenaltyItem> = observable.array([]);

  @computed get title() {
    return this.code;
  }

  public addItem(): PenaltyItem {
    const item = new PenaltyItem(this);
    this.items.push(item);
    return item;
  }

  public add(odd: PenaltyOdd): PenaltyItem {
    const item = new PenaltyItem(this, odd);
    this.items.push(item);
    return item;
  }
}
