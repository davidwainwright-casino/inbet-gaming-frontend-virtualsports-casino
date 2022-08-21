// import i18n from '../../locales/i18n';
import { IBet1013 } from '../../proto/bets.proto';
import { oddsData, oddsDataGroups } from './oddsData';
import { BaseBet } from '../';
import { computed } from 'mobx';

/**
 * Сделанная ставка
 *
 * @export
 * @class RaceBet
 * @extends {Bet1013}
 * @implements {IBet}
 */
export class FortunaBet extends BaseBet {
  @computed public get betData(): IBet1013 {
    const bet1013 = this.remoteData.bet1013;
    if (!bet1013) {
      throw new Error('Server not return bet1013');
    }
    return bet1013;
  }

  @computed public get oddData() {
    return oddsData.find((o) => o.body === this.betData.body);
  }

  @computed public get factor() {
    return this.oddData ? this.oddData.winningRate : undefined;
  }

  @computed public get group() {
    const odd = this.oddData;
    if (!odd) {
      return '-';
    }
    const group = oddsDataGroups.find((o) => o.id === odd.groupId);
    return group ? group.title : '-';
  }

  @computed public get title() {
    return this.oddData ? this.oddData.title : '-';
  }
}
