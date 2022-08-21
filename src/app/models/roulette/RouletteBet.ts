import { RouletteBet as RB, IBet1XXX } from '../../proto/bets.proto';
import i18n from '../../locales/i18n';
import { ROULETTE_ODDS, RouletteOdd } from '..';
import { BaseBet } from '../';
import { computed } from 'mobx';

export class RouletteBet extends BaseBet {
  @computed public get betData(): IBet1XXX {
    const bet = (this.remoteData as any)['bet' + this.gameState.source];
    if (!bet) {
      throw new Error('Server not return IBet1XXX');
    }
    return bet;
  }

  @computed public get factor() {
    if (!this.betData.body) {
      return 0;
    }
    const body = this.betData.body;
    const res = ROULETTE_ODDS.find((odd: RouletteOdd) =>
      body.type === RB.Type.ALIAS
        ? odd.alias === body.alias
        : body.sectorList instanceof Array && body.sectorList.includes(odd.sector || 0),
    );

    return res ? Number(res.resultValue) : 0;
  }

  @computed public get group() {
    if (this.betData.body && this.betData.body.type === RB.Type.ALIAS) {
      return i18n.t('roulette_bets_by_zones');
    }
    return i18n.t('roulette_bets_by_sector');
  }

  @computed public get title() {
    let t = '';
    if (!this.betData.body) {
      return t;
    }
    if (this.betData.body.sectorList instanceof Array && this.betData.body.sectorList.length) {
      t = this.betData.body.sectorList.join(', ');
    } else {
      const { Alias } = RB;
      switch (this.betData.body.alias) {
        case Alias.red:
          t = i18n.t('roulette_bets_red');
          break;
        case Alias.black:
          t = i18n.t('roulette_bets_black');
          break;
        case Alias.big:
          t = i18n.t('roulette_bets_big');
          break;
        case Alias.small:
          t = i18n.t('roulette_bets_small');
          break;
        case Alias.odd:
          t = i18n.t('roulette_bets_odd');
          break;
        case Alias.even:
          t = i18n.t('roulette_bets_even');
          break;
        case Alias.col1:
          t = i18n.t('roulette_bets_col1');
          break;
        case Alias.col2:
          t = i18n.t('roulette_bets_col2');
          break;
        case Alias.col3:
          t = i18n.t('roulette_bets_col3');
          break;
        case Alias.row1:
          t = i18n.t('roulette_bets_row1');
          break;
        case Alias.row2:
          t = i18n.t('roulette_bets_row2');
          break;
        case Alias.row3:
          t = i18n.t('roulette_bets_row3');
          break;
      }
    }
    return t;
  }
}
