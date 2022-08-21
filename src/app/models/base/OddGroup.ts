import { observable, computed, IObservableArray } from 'mobx';
import { TITLES } from '../../consts/titles';
import {OddItem, IOddGroup, IGameStateBase} from './'; 

/**
 * Группа доступных ставок
 *
 * @export
 * @class OddGroup
 * @implements {IOddGroup}
 */
export class OddGroup implements IOddGroup {
  @observable public code: string;
  @observable public columns?: number;
  @observable public items: IObservableArray<OddItem> = observable.array([]);
  @observable public game: IGameStateBase;

  constructor(game: IGameStateBase, code: string) {
    this.game = game;
    this.code = code;
  }

  /**
   * Получить название группы
   *
   * @readonly
   * @memberof OddGroup
   */
  @computed get title() {
    return TITLES[this.code];
  }

  /**
   * Создать новую ставку в группе и вернуть её.
   *
   * @returns {OddItem}
   * @memberof OddGroup
   */
  public addItem(): OddItem {
    return new OddItem(this);
  }
}
