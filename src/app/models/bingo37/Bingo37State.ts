import i18n from '../../locales/i18n';
import { BINGO37_ODDS } from '.';
import { RouletteBet } from '../../proto/bets.proto';
import { RouletteState, RouletteOdd } from '..';

export class Bingo37State extends RouletteState {
  public fillData() {
    const sectorGroup = this.addGroup(i18n.t('roulette_bets_by_sector'));
    sectorGroup.columns = 4;
    const commonGroup = this.addGroup(i18n.t('roulette_bets_by_zones'));
    commonGroup.columns = 4;
    BINGO37_ODDS.forEach((odd: RouletteOdd) => {
      if (odd.type === RouletteBet.Type.SECTOR_LIST) {
        sectorGroup.add(odd);
      } else {
        commonGroup.add(odd);
      }
    });
  }
}

export default RouletteState;
