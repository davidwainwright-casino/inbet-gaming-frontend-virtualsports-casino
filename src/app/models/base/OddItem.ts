import { IOddGroup, IOddItem, BaseBet, Dynamics, GameStatus } from './../';
import { putBet } from '../../api';
import { BetStatus, Bet } from '../../proto/bets.proto';
import { computed, observable, action } from 'mobx';
import uuidv1 from 'uuid/v1';
import sumBy from 'lodash/sumBy';
/**
 * Доступная ставка
 *
 * @export
 * @class OddItem
 * @implements {IOddItem}
 */
export class OddItem implements IOddItem {
  public serverData?: any;

  public dynamics?: Dynamics;
  public resultName?: string;
  public resultValue?: string;

  @observable public group: IOddGroup;

  constructor(group: IOddGroup) {
    this.group = group;
  }

  @computed get bets(): BaseBet[] {
    return [];
  }

  @computed get betsAmount() {
    return sumBy(this.bets, (bet) => bet.betAmount);
  }

  /**
   * Уникальных ключ
   *
   * @readonly
   * @memberof OddItem
   */
  @computed get key() {
    return this.group.code + '_' + this.resultName;
  }

  /**
   * Игра
   *
   * @readonly
   * @memberof OddItem
   */
  @computed get game() {
    return this.group.game;
  }

  /**
   * Заголовок доступно ставки
   *
   * @readonly
   * @memberof OddItem
   */
  @computed get title() {
    return this.resultName || '';
  }

  /**
   * Размер выигрыша
   *
   * @readonly
   * @memberof OddItem
   */
  @computed get num() {
    return parseFloat(this.resultValue!);
  }

  /**
   * Находится в избранном
   *
   * @readonly
   * @memberof OddItem
   */
  @computed get favorite() {
    const fav = this.game.favorites;

    return fav.includes(this.key);
  }

  /**
   * Получение серверных данных
   *
   * @returns
   * @memberof OddItem
   */
  public getGameBet() {
    return this.serverData;
  }

  /**
   * Создание новой ставки и запрос на сервер
   *
   * @param {number} betAmount
   * @memberof OddItem
   */
  public async makeBet(betAmount: number) {
    const { game } = this;

    if (game && game.round && game.status === GameStatus.OPEN && betAmount > 0) {
      const bet = Bet.create({
        betAmount,
        payAmount: 0,
        betId: uuidv1(),
        gameId: game.source,
        status: BetStatus.BS_undefined,
      });

      (bet as any)['bet' + bet.gameId] = this.getGameBet();

      game.root.addBetFromServer(bet);
      await putBet([game.source], [bet]);
    }
  }

  /**
   * Добавление/удаление доступной ставки в/из избранного
   *
   * @memberof OddItem
   */
  @action.bound
  public toogleFavorite() {
    const fav = this.game.favorites;
    const key = this.key;

    if (fav.includes(key)) {
      fav.remove(key);
    } else {
      fav.push(key);
      this.game.favoritesCollapsed = false;
    }
  }
}
