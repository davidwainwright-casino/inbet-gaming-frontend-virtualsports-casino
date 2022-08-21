import React from 'react';
import { IPenaltyItem } from '../../models/penalty';
import { Bet1024 } from '../../proto/bets.proto';
import { IOddItem } from '../../models';
import PenaltyItem from '../../models/penalty/PenaltyItem';

export const penaltyMakeBetTitleRenderer = (odd: IOddItem | IPenaltyItem) => 
  odd instanceof PenaltyItem && odd.type === Bet1024.Type.ALIAS && (odd.alias === Bet1024.Alias.color1 || odd.alias === Bet1024.Alias.color2)
    ? <span className={odd.alias === Bet1024.Alias.color1 ? 'penalty__bet-title--color1' : 'penalty__bet-title--color2'}>{odd.title}</span>
    : odd.title;
