import { RouletteBet } from '../../proto/bets.proto';
import RouletteOdd from './RouletteOdd';

const { Alias, Type } = RouletteBet;

export const RED_SECTORS: number[] = [
  1,
  3,
  5,
  7,
  9,
  12,
  14,
  16,
  18,
  19,
  21,
  23,
  25,
  27,
  30,
  32,
  34,
  36,
];

const aliasOdd = { type: Type.ALIAS, isRed: false, resultValue: '3' };

export const ROULETTE_ODDS: RouletteOdd[] = [
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

  ROULETTE_ODDS.push(odd);
}
ROULETTE_ODDS.push({ sector: 0, type: Type.SECTOR_LIST, isRed: false, resultValue: '36' });

export default ROULETTE_ODDS;
