import { computed } from 'mobx';
import { OddItem } from '..';
import { IRouletteGroup, IRouletteItem } from '.';
import i18n from '../../locales/i18n';
import { RouletteBet, Bet1XXX } from '../../proto/bets.proto';

export class RouletteItem extends OddItem implements IRouletteItem {
  public sector?: number | null;
  public alias?: RouletteBet.Alias | null;
  public type?: RouletteBet.Type;
  public resultValue?: string;

  constructor(group: IRouletteGroup, ...fields: Array<Partial<IRouletteItem>>) {
    super(group);
    Object.assign(this, ...fields);
  }

  @computed get key() {
    return this.group.code + '_' + this.sector + '_' + this.alias;
  }

  @computed get title() {
    let t = '';
    if (typeof this.sector === 'number' && this.type === RouletteBet.Type.SECTOR_LIST) {
      t = this.sector.toString();
    } else {
      const { Alias } = RouletteBet;
      switch (this.alias) {
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

  public getGameBet(): Bet1XXX {
    const odd = Bet1XXX.create({
      round: this.game.round,
      body: {
        type: this.type,
        alias: this.alias,
        sectorList: typeof this.sector === 'number' ? [this.sector] : null,
      },
    });
    return odd;
  }
}

export default RouletteItem;
