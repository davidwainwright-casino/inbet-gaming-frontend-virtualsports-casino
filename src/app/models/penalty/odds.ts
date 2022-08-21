import { Bet1024 } from '../../proto/bets.proto';
import {PenaltyOdd} from './PenaltyOdd';

const { Alias, Type } = Bet1024;

export const ODDS: PenaltyOdd[] = [
  { type: Type.ALIAS, alias: Alias.top, resultValue: '3' },
  { type: Type.ALIAS, alias: Alias.center, resultValue: '3' },
  { type: Type.ALIAS, alias: Alias.bottom, resultValue: '3' },
  { type: Type.BALL, ball: -1, resultValue: '24' },
  { type: Type.ALIAS, alias: Alias.color1, resultValue: '2' },
  { type: Type.ALIAS, alias: Alias.color2, resultValue: '2' },
  { type: Type.BALL, ball: -2, resultValue: '24' },
];

for (let ball = 1; ball <= 24; ball++) {
  const odd = new PenaltyOdd();
  odd.resultValue = '24';
  odd.ball = ball;
  odd.type = Type.BALL;

  ODDS.push(odd);
}

export default ODDS;
