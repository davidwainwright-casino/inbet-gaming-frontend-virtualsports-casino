
import { Bet1024 } from '../../proto/bets.proto';
import i18n from '../../locales/i18n';
import { ODDS, PenaltyOdd } from '.';
import {BaseBet} from '../';
import { computed } from 'mobx';

export class PenaltyBet extends BaseBet {
  @computed public get betData(): Bet1024 {
    return (this.remoteData as any)['bet' + this.gameState.source];
  }

  @computed public get factor() {
    const { ball, alias, type } = this.betData;

    const res = ODDS.find((odd: PenaltyOdd) =>
      type === Bet1024.Type.BALL ? odd.ball === ball : odd.alias === alias
    );

    return res ? Number(res.resultValue) : 0;
  }

  @computed public get group() {
    if (this.betData.ball > 0) {
      return i18n.t('penalty_bets_by_sector');
    }
    return i18n.t('penalty_bets_common');
  }
  
  @computed public get title() {
    let t = '';
    const { ball, alias } = this.betData;
    if (ball > 0) {
      t = i18n.t('penalty_history_sector_number', { number: ball });
    } else if (ball === -1) {
      t = i18n.t('penalty_bets_crossbar');
    } else if (ball === -2) {
      t = i18n.t('penalty_bets_miss_save');
    } else if (typeof alias !== 'undefined') {
      const { Alias } = Bet1024;
      switch (alias) {
        case Alias.color1:
          t = i18n.t('penalty_bets_color1');
          break;
        case Alias.color2:
          t = i18n.t('penalty_bets_color2');
          break;
        case Alias.bottom:
          t = i18n.t('penalty_bets_bottom');
          break;
        case Alias.center:
          t = i18n.t('penalty_bets_center');
          break;
        case Alias.top:
          t = i18n.t('penalty_bets_top');
          break;
      }
    }
    return t;
  }
}
