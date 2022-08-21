import { observable, IObservableArray } from 'mobx';
import { OddGroup } from '../';
import { RaceItem, IRaceGroup } from './';

// import { action, observable } from 'mobx';

/**
 * Группа доступных ставок в скачках
 *
 * @export
 * @class RaceGroup
 * @extends {OddGroup}
 * @implements {IRaceGroup}
 */
export class RaceGroup extends OddGroup implements IRaceGroup {
  @observable public items: IObservableArray<RaceItem> = observable.array([]);

  /**
   * Создать новую ставку в группе и вернуть её.
   *
   * @returns {RaceItem}
   * @memberof RaceGroup
   */
  public addItem(): RaceItem {
    const item = new RaceItem(this);
    this.items.push(item);
    return item;
  }
}
