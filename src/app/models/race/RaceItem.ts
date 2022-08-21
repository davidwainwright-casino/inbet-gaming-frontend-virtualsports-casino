import { OddItem } from './../';
import { computed } from 'mobx';
import { IRaceItem } from './';
import i18n from '../../locales/i18n';
import { GameState7XX, Bet7XX } from '../../proto/bets.proto';

export const TITLES: { [name: string] : (value: string) => string } = {
  '2106': (value: string) => i18n.t('dog_number', { value }),
  '2116': (value: string) => i18n.t('horse_number', { value }),
  '2120': (value: string) => i18n.t('dog3d_number', { value }),
  '2121': (value: string) => i18n.t('motortron_number', { value }),
  '2122': (value: string) => i18n.t('bike_number', { value }),
  '2123': (value: string) => i18n.t('motorbike_number', { value })
};

/**
 * Доступная ставка в скачках
 *
 * @export
 * @class RaceItem
 * @extends {OddItem}
 * @implements {IRaceItem}
 */
export class RaceItem extends OddItem implements IRaceItem {
  public serverData?: GameState7XX.Odd.IResult;

  /**
   * Получение заголовка игры
   *
   * @readonly
   * @memberof RaceItem
   */
  @computed get title() {
    return TITLES[this.game.source](this.resultName!);
  }

  /**
   * Получение новой ставки для данной доступной
   *
   * @returns {Bet7XX}
   * @memberof RaceItem
   */
  public getGameBet(): Bet7XX {
    const odd = Bet7XX.create({
      gameName: this.group.code,
      resultName: this.resultName,
      resultValue: this.resultValue,
      round: this.game.round,
    });
    return odd;
  }

}
