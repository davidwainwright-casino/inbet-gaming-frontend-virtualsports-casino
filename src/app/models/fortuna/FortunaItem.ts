import { OddItem, BaseBet } from './../';
import { computed } from 'mobx';
import { IFortunaItem, IFortunaOdd } from './';
import { Bet1013 } from '../../proto/bets.proto';

/**
 * Доступная ставка
 *
 * @export
 * @class FortunaItem
 * @extends {OddItem}
 * @implements {IRaceItem}
 */
export class FortunaItem extends OddItem implements IFortunaItem {
  public oddData?: IFortunaOdd;

  @computed get activeBets() {
    const data: BaseBet[] = [];
    this.game.activeBets.forEach((bet) => {
      if (this.oddData && bet.betData.body === this.oddData.body) {
        data.push(bet);
      }
    });

    return data;
  }

  /**
   * Получение заголовка игры
   *
   * @readonly
   * @memberof FortunaItem
   */
  @computed get title() {
    if (!this.oddData) {
      return '';
    }
    return this.oddData.title;
  }

  @computed get key() {
    return this.group.code + '_' + this.title;
  }

  @computed get num() {
    return this.oddData ? this.oddData.winningRate : 0;
  }

  /**
   * Получение новой ставки для данной доступной
   *
   * @returns {Bet1013}
   * @memberof RaceItem
   */
  public getGameBet(): Bet1013 {
    const odd = Bet1013.create({
      body: this.oddData ? this.oddData.body : 0,
      // gameName: this.group.code,
      // resultName: this.resultName,
      // resultValue: this.resultValue,
      round: this.game.round,
    });
    return odd;
  }
}
