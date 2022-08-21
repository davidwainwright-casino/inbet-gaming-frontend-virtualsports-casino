import { Bet1013 } from '../../proto/bets.proto';
import i18n from '../../locales/i18n';

export const oddsDataGroups = [
  {
    title: i18n.t('fortuna_bet_by_numbers'),
    id: 1,
  },
  {
    title: i18n.t('fortuna_bet_by_zones'),
    id: 2,
  },
];

export interface IFortunaOdd {
  groupId: number;
  title: string;
  winningRate: number;
  body: Bet1013.Body;
}

export const oddsData: IFortunaOdd[] = [
  {
    groupId: 1,
    title: '0',
    winningRate: 18,
    body: Bet1013.Body.N0,
  },
  {
    groupId: 1,
    title: '1',
    winningRate: 18,
    body: Bet1013.Body.N1,
  },
  {
    groupId: 1,
    title: '2',
    winningRate: 18,
    body: Bet1013.Body.N2,
  },
  {
    groupId: 1,
    title: '3',
    winningRate: 18,
    body: Bet1013.Body.N3,
  },
  {
    groupId: 1,
    title: '4',
    winningRate: 18,
    body: Bet1013.Body.N4,
  },
  {
    groupId: 1,
    title: '5',
    winningRate: 18,
    body: Bet1013.Body.N5,
  },
  {
    groupId: 1,
    title: '6',
    winningRate: 18,
    body: Bet1013.Body.N6,
  },
  {
    groupId: 1,
    title: '7',
    winningRate: 18,
    body: Bet1013.Body.N7,
  },
  {
    groupId: 1,
    title: '8',
    winningRate: 18,
    body: Bet1013.Body.N8,
  },
  {
    groupId: 1,
    title: '9',
    winningRate: 18,
    body: Bet1013.Body.N9,
  },
  {
    groupId: 1,
    title: '10',
    winningRate: 18,
    body: Bet1013.Body.N10,
  },
  {
    groupId: 1,
    title: '11',
    winningRate: 18,
    body: Bet1013.Body.N11,
  },
  {
    groupId: 1,
    title: '12',
    winningRate: 18,
    body: Bet1013.Body.N12,
  },
  {
    groupId: 1,
    title: '13',
    winningRate: 18,
    body: Bet1013.Body.N13,
  },
  {
    groupId: 1,
    title: '14',
    winningRate: 18,
    body: Bet1013.Body.N14,
  },
  {
    groupId: 1,
    title: '15',
    winningRate: 18,
    body: Bet1013.Body.N15,
  },
  {
    groupId: 1,
    title: '16',
    winningRate: 18,
    body: Bet1013.Body.N16,
  },
  {
    groupId: 1,
    title: '17',
    winningRate: 18,
    body: Bet1013.Body.N17,
  },
  {
    groupId: 1,
    title: '18',
    winningRate: 18,
    body: Bet1013.Body.N18,
  },

  {
    groupId: 2,
    title: '1-9',
    winningRate: 2,
    body: Bet1013.Body.half1,
  },
  {
    groupId: 2,
    title: '10-18',
    winningRate: 2,
    body: Bet1013.Body.half2,
  },
  {
    groupId: 2,
    title: '1-6',
    winningRate: 3,
    body: Bet1013.Body.third1,
  },
  {
    groupId: 2,
    title: '7-12',
    winningRate: 3,
    body: Bet1013.Body.third2,
  },
  {
    groupId: 2,
    title: '13-18',
    winningRate: 3,
    body: Bet1013.Body.third3,
  },
  {
    groupId: 2,
    title: i18n.t('fortuna_bet_even'),
    winningRate: 2,
    body: Bet1013.Body.even,
  },
  {
    groupId: 2,
    title: i18n.t('fortuna_bet_odd'),
    winningRate: 2,
    body: Bet1013.Body.odd,
  },

  {
    groupId: 2,
    title: i18n.t('fortuna_bet_red'),
    winningRate: 3,
    body: Bet1013.Body.red,
  },
  {
    groupId: 2,
    title: i18n.t('fortuna_bet_red_even'),
    winningRate: 6,
    body: Bet1013.Body.red_even,
  },
  {
    groupId: 2,
    title: i18n.t('fortuna_bet_red_odd'),
    winningRate: 6,
    body: Bet1013.Body.red_odd,
  },

  {
    groupId: 2,
    title: i18n.t('fortuna_bet_violet'),
    winningRate: 3,
    body: Bet1013.Body.purple,
  },
  {
    groupId: 2,
    title: i18n.t('fortuna_bet_violet_even'),
    winningRate: 6,
    body: Bet1013.Body.purple_even,
  },
  {
    groupId: 2,
    title: i18n.t('fortuna_bet_violet_odd'),
    winningRate: 6,
    body: Bet1013.Body.purple_odd,
  },

  {
    groupId: 2,
    title: i18n.t('fortuna_bet_yellow'),
    winningRate: 3,
    body: Bet1013.Body.yellow,
  },
  {
    groupId: 2,
    title: i18n.t('fortuna_bet_yellow_even'),
    winningRate: 6,
    body: Bet1013.Body.yellow_even,
  },
  {
    groupId: 2,
    title: i18n.t('fortuna_bet_yellow_odd'),
    winningRate: 6,
    body: Bet1013.Body.yellow_odd,
  },
];
