import { GameModel } from '../models';
import i18n from '../locales/i18n';
import config from '../api/configLoader';

export const GAMES: GameModel[] = [
  {
    iconClass: 'font--dogs',
    name: 'dogs6',
    source: 2106,
    title: i18n.t('dogs_6'),
    pickStore: (s) => s.dogs6,
  },
  {
    iconClass: 'font--horses',
    name: 'horses6',
    source: 2116,
    title: i18n.t('horses_6'),
    pickStore: (s) => s.horses6,
  },
  {
    iconClass: 'font--dogs',
    name: 'dogs',
    source: 2120,
    title: i18n.t('dogs_6_3d'),
    pickStore: (s) => s.dogs3d,
  },
  {
    iconClass: 'font--trone',
    name: 'trone',
    source: 2121,
    title: i18n.t('tron_3d'),
    pickStore: (s) => s.trone,
  },
  {
    iconClass: 'font--bike',
    name: 'bike',
    source: 2122,
    title: i18n.t('velo_3d'),
    pickStore: (s) => s.bike,
  },
  {
    iconClass: 'font--moto',
    name: 'moto',
    source: 2123,
    title: i18n.t('moto_racing'),
    pickStore: (s) => s.moto,
  },
  {
    iconClass: 'font--football',
    name: 'football',
    source: 4001,
    newSource: 40011,
    title: i18n.t('football'),
    pickStore: (s) => s.football,
  },
  {
    iconClass: 'font--fortuna',
    name: 'fortuna',
    source: 1013,
    newSource: 10131,
    title: i18n.t('fortuna'),
    pickStore: (s) => s.fortuna,
  },
  {
    iconClass: 'font--goal',
    name: 'goal',
    source: 1024,
    newSource: 10241,
    title: i18n.t('penalty'),
    pickStore: (s) => s.penalty,
  },
  {
    iconClass: 'font--roullette',
    name: 'roulette',
    source: 1204,
    newSource: 12041,
    title: i18n.t('roulette'),
    pickStore: (s) => s.roulette,
  },
  {
    iconClass: 'font--bingo37',
    name: 'bingo37',
    source: 1009,
    newSource: 10091,
    title: i18n.t('bingo37'),
    pickStore: (s) => s.bingo37,
  },
  {
    iconClass: 'font--keno',
    name: 'keno-live',
    source: 99920,
    newSource: 999201,
    title: i18n.t('keno_live'),
    pickStore: (s) => s.keno99920,
  },
];

export const newSourcesMap = GAMES.reduce(
  (acc, { source, newSource }) => ({ ...acc, [source]: newSource }),
  {},
) as any;
export const sourcesMap = GAMES.reduce(
  (acc, { source, newSource }) => ({ ...acc, [newSource ? newSource : source]: source }),
  {},
) as any;

export const DEFAULT_GAME = GAMES.find((game) => config.sources[game.name]) || GAMES[0];

export default GAMES;
