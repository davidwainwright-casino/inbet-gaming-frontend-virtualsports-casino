import { IObservableArray, observable, computed } from 'mobx';
import { GameStateBase } from './../';
import { FootballGroup, IFootballState } from './'
import { GameState4001 as GameState4001Proto, IBet, IGameState4001 } from '../../proto/bets.proto';
import { FootballBet } from './FootballBet';

// const FLAGS_MAP = {

// };

/**
 * Общее состояние игры в футболе
 *
 * @export
 * @class FootballState
 * @extends {GameStateBase}
 * @implements {IFootballState}
 */
export class FootballState extends GameStateBase implements IFootballState {
  @observable public teamAName?: string;
  @observable public teamBName?: string;  
  @observable public roundTeamsHistory?: GameState4001Proto.IRoundTeamsHistory[];
  @observable public odds: IObservableArray<FootballGroup> = observable.array([]);
  public remoteData?: IGameState4001;

  /**
   * Получение лого команды 1
   *
   * @readonly
   * @memberof FootballState
   */
  @computed get teamALogoUrl() {
    const name = this.teamAName!.split(' ').join('_').toLocaleLowerCase();
    // if(FLAGS_MAP[this.teamAName]) {
    //   name = FLAGS_MAP[this.teamAName];
    // }
    return `/football-logos/${name}.svg`;
  }

  /**
   * Получение лого команды 2
   *
   * @readonly
   * @memberof FootballState
   */
  @computed get teamBLogoUrl() {
    const name = this.teamBName!.split(' ').join('_').toLocaleLowerCase();
    // if(FLAGS_MAP[this.teamBName]) {
    //   name = FLAGS_MAP[this.teamBName];
    // }
    return `/football-logos/${name}.svg`;
  }

  /**
   * Создает группу доступных ставок и возвращает её
   *
   * @param {string} code
   * @returns {FootballGroup}
   * @memberof FootballState
   */
  public addGroup(code: string): FootballGroup {
    const item = new FootballGroup(this, code);
    this.odds.push(item);
    return item;
  }

  public createBet(remoteBet: IBet): FootballBet {
    return new FootballBet(this, remoteBet);
  }
}
