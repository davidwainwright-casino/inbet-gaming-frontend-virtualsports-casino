import { History } from 'history';
import { GameStore } from './GameStore';
import { RouterStore } from './RouterStore';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const gameStore = new GameStore();
const routerStore = new RouterStore(history);

/**
 * Инициализируем сторы для хранения состояния игр и роутера
 * @param  {History} history - createBrowserHistory из пакета history
 */
export const createStores = () => {
  return {
    history,
    rootStore: {
      game: gameStore,
      routing: routerStore,
    },
  };
};
