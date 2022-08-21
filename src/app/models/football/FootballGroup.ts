import { computed, observable, IObservableArray } from 'mobx';
import {OddGroup} from '../';
import {FootballItem, IFootballGroup} from './'; 

// import { action, observable } from 'mobx';

/**
 * Группа ставок в футболе
 *
 * @export
 * @class FootballGroup
 * @extends {OddGroup}
 * @implements {IFootballGroup}
 */
export class FootballGroup  extends OddGroup implements IFootballGroup  {
  @observable public items: IObservableArray<FootballItem> = observable.array([]);
  
  /**
   * Получить название группы
   *
   * @readonly
   * @memberof FootballGroup
   */
  @computed get title() {
    return this.code;
  }

  /**
   * Создать новую ставку в группе и вернуть её.
   *
   * @returns {FootballItem}
   * @memberof FootballGroup
   */
  public addItem(): FootballItem {
    const item = new FootballItem(this);
    this.items.push(item);
    return item;
  }
}
