import { observable, IObservableArray, computed } from 'mobx';
import { OddGroup } from '../';
import { FortunaItem, IFortunaGroup } from './';

// import { action, observable } from 'mobx';

/**
 * Группа доступных ставок в скачках
 *
 * @export
 * @class FortunaGroup
 * @extends {OddGroup}
 * @implements {IFortunaGroup}
 */
export class FortunaGroup extends OddGroup implements IFortunaGroup {
  @observable public items: IObservableArray<FortunaItem> = observable.array([]);
  @observable public groupId: number = 0;
  @computed get title() {
    return this.code;
  }

  /**
   * Создать новую ставку в группе и вернуть её.
   *
   * @returns {FortunaItem}
   * @memberof FortunaGroup
   */
  public addItem(): FortunaItem {
    const item = new FortunaItem(this);
    this.items.push(item);
    return item;
  }
}
