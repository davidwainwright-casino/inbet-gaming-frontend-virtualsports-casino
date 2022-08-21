import { OddItem } from './../';
import { computed } from 'mobx';
import {IPenaltyItem} from './IPenaltyItem';
import { Bet1024 } from '../../proto/bets.proto';
import i18n from '../../locales/i18n';
import {PenaltyGroup} from './PenaltyGroup';

export default class PenaltyItem extends OddItem implements IPenaltyItem {
  public ball?: (number | null);
  public alias?: (Bet1024.Alias | null);
  public type?: Bet1024.Type;
  public resultValue?: string;

  constructor(group: PenaltyGroup, ...fields: Array<Partial<PenaltyItem>>) {
    super(group);
    Object.assign(this, ...fields);
  }

  @computed get key() {
    return this.group.code + '_' + this.ball + '_' + this.alias;
  }

  @computed get title() {
    let t = '';
    if (this.ball) {
      if (this.ball === -1) {
        t = i18n.t('penalty_bets_crossbar');
      } else if (this.ball === -2) {
        t = i18n.t('penalty_bets_miss_save');
      } else {
        t = this.ball.toString();
      }
    } else if (typeof this.alias !== 'undefined') {
      const { Alias } = Bet1024;
      switch (this.alias) {
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

  public getGameBet(): Bet1024 {
    const odd = Bet1024.create({
      alias: this.alias,
      ball: this.ball,
      round: this.game.round,
      type: this.type,
    });
    return odd;
  }

}
