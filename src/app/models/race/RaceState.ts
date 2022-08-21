import { observable, IObservableArray } from 'mobx';
import { GameStateBase } from './../';
import { RaceGroup, RaceBet, IRaceState } from './';
import { GameState7XX as GameState7XXProto, IBet } from '../../proto/bets.proto';

/**
 * Общее состояние игры скачки
 *
 * @export
 * @class RaceState
 * @extends {GameStateBase}
 * @implements {IRaceState}
 */
export class RaceState extends GameStateBase implements IRaceState {
  @observable public history?: GameState7XXProto.IHistoryItem[];
  @observable public odds: IObservableArray<RaceGroup> = observable.array([]);

  /**
   * Создает группу доступных ставок и возвращает её
   *
   * @param {string} code
   * @returns {RaceGroup}
   * @memberof RaceState
   */
  public addGroup(code: string): RaceGroup {
    const item = new RaceGroup(this, code);
    this.odds.push(item);
    return item;
  }

  public createBet(remoteBet: IBet): RaceBet {
    return new RaceBet(this, remoteBet);
  }
}
