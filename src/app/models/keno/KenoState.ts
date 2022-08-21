import { action, computed, when, IObservableArray } from 'mobx';
import { GameStateBase } from './../';
import KenoGroup from './KenoGroup';
import { observable } from 'mobx';
import { IKenoState } from './IKenoState';
import { putBet } from '../../api';
import { GameState999XX, Bet999XX, Bet, BetStatus, IBet } from '../../proto/bets.proto';
import { GameStatus } from '../GameStatus';
import uuidv1 from 'uuid/v1';
// import { KenoBet } from './KenoBet';
import uniq from 'lodash/uniq';
import { GameStore } from '../../stores';
import { KenoBet } from './KenoBet';

export default class KenoState extends GameStateBase implements IKenoState {
  @observable public history: GameState999XX.IHistoryItem[] = [];
  @observable public selected: number[] = observable.array([]);
  @observable public outedIndexes: IObservableArray<number> = observable.array([]);
  @observable public betAmount: number = 0;

  constructor(root: GameStore) {
    super(root);

    this.videoDuration = 75;
  }

  @computed public get winNumbers() {
    const item = this.history.find((h) => h.round === this.round);

    return item && item.wincombo ? item.wincombo : [];
  }

  @computed public get outedNumbers() {
    return this.outedIndexes.map((out) => this.winNumbers[out]);
  }

  @computed public get usedNumbers() {
    let numbers: number[] = [];

    this.activeBets.map((bet) => {
      if (bet.betData.body) {
        numbers = numbers.concat(bet.betData.body);
      }
    });

    return uniq(numbers);
  }

  public makeBet = async () => {
    if (
      this.round &&
      this.status === GameStatus.OPEN &&
      this.betAmount > 0 &&
      this.selected.length > 0
    ) {
      const bet = Bet.create({
        betAmount: this.betAmount,
        payAmount: 0,
        betId: uuidv1(),
        gameId: this.source,
        status: BetStatus.BS_undefined,
      });

      (bet as any)['bet' + this.source] = Bet999XX.create({
        body: [...this.selected.sort((a, b) => a - b)],
        round: this.round,
      });

      this.root.addBetFromServer(bet);

      this.selected = [];
      this.betAmount = 0;

      await putBet([this.source], [bet]);
    }
  };

  @action
  public toggle = (num: number): void => {
    const index = this.selected.indexOf(num);
    const exist = index >= 0;

    if (this.status !== GameStatus.OPEN) {
      return;
    }

    if (exist) {
      this.selected.splice(index, 1);
    } else if (this.selected.length < 10) {
      this.selected.push(num);
    }
  };

  public addGroup(code: string): KenoGroup {
    const item = new KenoGroup(this, code);
    this.odds.push(item);
    return item;
  }

  public createBet(remoteBet: IBet): KenoBet {
    return new KenoBet(this, remoteBet);
  }
}
