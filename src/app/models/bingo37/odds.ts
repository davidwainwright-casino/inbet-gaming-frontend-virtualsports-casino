import { RouletteBet } from '../../proto/bets.proto';
import { RouletteOdd, RED_SECTORS } from '..';

const { Alias, Type } = RouletteBet;

const aliasOdd = { type: Type.ALIAS, isRed: false, resultValue: '3' };

export const BINGO37_ODDS: RouletteOdd[] = [
  { ...aliasOdd, alias: Alias.small, resultValue: '2' },
  { ...aliasOdd, alias: Alias.big, resultValue: '2' },
  { ...aliasOdd, alias: Alias.black, resultValue: '2' },
  { ...aliasOdd, alias: Alias.red, resultValue: '2' },
  { ...aliasOdd, alias: Alias.even, resultValue: '2' },
  { ...aliasOdd, alias: Alias.odd, resultValue: '2' },
  { ...aliasOdd, alias: Alias.col1, resultValue: '3' },
  { ...aliasOdd, alias: Alias.col2, resultValue: '3' },
  { ...aliasOdd, alias: Alias.col3, resultValue: '3' },
  { ...aliasOdd, alias: Alias.row1, resultValue: '3' },
  { ...aliasOdd, alias: Alias.row2, resultValue: '3' },
  { ...aliasOdd, alias: Alias.row3, resultValue: '3' },
];

for (let sector = 1; sector <= 36; sector++) {
  const odd = new RouletteOdd();
  odd.resultValue = '36';
  odd.type = Type.SECTOR_LIST;
  odd.sector = sector;
  odd.isRed = sector in RED_SECTORS;

  BINGO37_ODDS.push(odd);
}
BINGO37_ODDS.push({ sector: 37, type: Type.SECTOR_LIST, isRed: false, resultValue: '36' });

export default BINGO37_ODDS;
