import { computed, action, observable, decorate } from 'mobx'; // observable, action,
import { putBet } from '../../api';
import { IBet, BetStatus } from '../../proto/bets.proto'; // Bet, BetStatus,
// import { GameStore } from '../stores';
// import { RaceBet } from './race';
// import { FootballBet } from './football';
import { IGameStateBase } from './';
// import { BetStatuses } from '../components';
// import { PenaltyBet } from './penalty';

/**
 * Модель сделанной ставки
 *
 * @export
 * @class BaseBet
 * @extends {Bet}
 */
export class BaseBet {
  @computed public get betData(): any {
    return {};
  }

  @computed public get createdAt() {
    return Number(this.remoteData.createdAt);
  }

  @computed public get id() {
    return this.remoteData.betId;
  }

  @computed public get round() {
    return Number(this.betData.round);
  }

  @computed public get key() {
    return [this.id, this.round, this.createdAt, this.betAmount].join('_');
  }

  @computed public get status(): BetStatus {
    return this.remoteData.status || BetStatus.BS_undefined;
  }

  @computed public get betAmount(): number {
    return Number(this.remoteData.betAmount);
  }

  @computed public get payAmount(): number {
    return Number(this.remoteData.payAmount);
  }

  @computed public get betId() {
    return this.remoteData.betId;
  }

  @computed public get factor(): number | undefined {
    return undefined;
  }

  @computed public get group() {
    return '';
  }

  @computed public get title() {
    return '';
  }

  /**
   * Размер выигрыша
   *
   * @readonly
   * @memberof BaseBet
   */
  @computed public get winAmount() {
    if (this.payAmount) {
      return this.payAmount;
    }

    return this.factor ? Math.round(this.betAmount * this.factor) : 0;
  }

  public gameState: IGameStateBase;
  public remoteData: IBet;

  constructor(gameState: IGameStateBase, remoteBet: IBet) {
    this.gameState = gameState;
    this.remoteData = remoteBet;

    decorate(this.remoteData, {
      status: observable.ref,
    });
  }

  /**
   * Отмена сделанной ставки
   *
   * @memberof BaseBet
   */
  @action.bound
  public async cancelBet() {
    const root = this.gameState.root;

    if (this.remoteData.status !== BetStatus.BS_accepted) {
      return;
    }

    this.remoteData.status = BetStatus.BS_undefined;

    await putBet(root.sources, [
      {
        ...this.remoteData,
        status: BetStatus.BS_want_cancel,
      },
    ]);
  }
}
