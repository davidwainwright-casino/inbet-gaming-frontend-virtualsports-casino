
import i18n from '../../locales/i18n';
import { Bet7XX } from '../../proto/bets.proto';
import { TITLES } from './RaceItem';
import { BaseBet } from '../';
import { computed } from 'mobx';

export const BET_TITLES: { [name: string] : string } = {
  'fp': i18n.t('first_place'),
  'fsp': i18n.t('first_or_second_place'),
  'fspo': i18n.t('first_and_second_place_order'),
  'fstp': i18n.t('first_or_second_or_third_place'),
};

/**
 * Сделанная ставка в скачках
 *
 * @export
 * @class RaceBet
 * @extends {Bet7XX}
 * @implements {IBet}
 */
export class RaceBet extends BaseBet {
  @computed public get betData(): Bet7XX {
    return (this.remoteData as any)['bet' + this.gameState.source];
  }

  @computed public get factor() {
    return Number(this.betData.resultValue);
  }

  @computed public get group() {
    return BET_TITLES[this.betData.gameName];
  }
  
  @computed public get title() {
    return TITLES[this.gameState.source](this.betData.resultName);
  }
}
