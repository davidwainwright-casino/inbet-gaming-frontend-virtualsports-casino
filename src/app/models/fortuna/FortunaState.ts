import { observable, IObservableArray } from 'mobx';
import { GameStateBase } from './../';
import { FortunaGroup, IFortunaState, IFortunaHistory } from './';

// import { GameStore } from './../../stores';
import { FortunaBet } from './FortunaBet';
import { IBet } from '../../proto/bets.proto';

/**
 * Общее состояние игры
 *
 * @export
 * @class RaceState
 * @extends {GameStateBase}
 * @implements {IFortunaState}
 */
export class FortunaState extends GameStateBase implements IFortunaState {
  @observable public ball?: number;
  @observable public history?: IFortunaHistory[];
  @observable public odds: IObservableArray<FortunaGroup> = observable.array([]);

  @observable public ofterNumbers: number[] = [1, 2, 3];
  @observable public videoDuration: number = 35;

  // constructor(root: GameStore) {
  //   super(root);
  //   // setInterval(() => {
  //   //   this.ball = Math.floor(Math.random() * 18) + 0;
  //   // }, 5000);
  // }

  /**
   * Создает группу доступных ставок и возвращает её
   *
   * @param {string} code
   * @returns {FortunaGroup}
   * @memberof FortunaState
   */
  public addGroup(code: string): FortunaGroup {
    const item = new FortunaGroup(this, code);
    this.odds.push(item);
    return item;
  }

  public createBet(remoteBet: IBet): FortunaBet {
    return new FortunaBet(this, remoteBet);
  }
}
