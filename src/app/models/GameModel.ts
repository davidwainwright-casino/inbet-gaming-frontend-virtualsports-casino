import { GameStore } from '../stores';
import { IGameStateBase } from './';

export type GameModel = {
  name: string;
  title: string;
  source: number;
  newSource?: number;
  iconClass: string;
  pickStore: (store: GameStore) => IGameStateBase;
};
