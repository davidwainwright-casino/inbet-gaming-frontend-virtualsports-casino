
import { Bet4001, IBet } from '../../proto/bets.proto';

import { IFoolballMeta, foolballMetas } from './';
import { longToFloat } from '../../utils';
import { computed } from 'mobx';
import { IFootballState } from './IFootballState';
import { BaseBet } from '../';

/**
 * Модель для ставки в футболе
 *
 * @export
 * @class FootballBet
 * @extends {Bet4001}
 * @implements {IBet}
 */
export class FootballBet extends BaseBet {
  public gameState: IFootballState;

  constructor(gameState: IFootballState, remoteBet: IBet) {
    super(gameState, remoteBet);
    this.gameState = gameState;
  }

  @computed public get betData(): Bet4001 {
    return this.remoteData.bet4001 as Bet4001;
  }

  @computed public get oddData() {
    const odds = this.gameState.remoteData!.odds!;
    const { kind } = this.betData.odd!;
    const oddEx = odds.find(o => o.kind === kind);
    return { kind: 0, ...this.betData.odd, ...oddEx! };
  }

  @computed public get factor() {
    if (!this.oddData || !this.oddData.odd) {
      return 0;
    }
    return longToFloat(this.oddData.odd);
  }

  @computed public get group() {
    if (!this.oddData) {
      return '';
    }
    const { kind } = this.oddData;
    
    if (kind === undefined) {
      return '';
    }
    
    const meta = this.getMeta();
    
    if (!meta) {
      return '';
    }
    return meta.title;
  }
  
  @computed public get title() {
    if (!this.oddData) {
      return '';
    }
    const { kind } = this.oddData;

    if (kind === undefined) {
      return '';
    }
    const kindNumber = Number(kind);
    
    const meta = this.getMeta();
    if (!meta) {
      return '';
    }

    // const k = Number(kind) || 0;

    // if(k === 0) {
    //   return this.teamAName;
    // } else if(k === 2) {
    //   return this.teamBName;
    // }
    
    return meta.getTitle(kindNumber, this.oddData);
  }
  // private teamAName: string;
  // private teamBName: string;

  /**
   * Получить объект типа ставки
   *
   * @private
   * @returns {(IFoolballMeta | null)}
   * @memberof FootballBet
   */
  private getMeta(): IFoolballMeta | null {
    if(!this.oddData) { return null; }
    const { kind } = this.oddData;
    
    if(kind === undefined) { return null; }

    const kindNumber = Number(kind);
    const meta = foolballMetas.find(m => m.checkKind(kindNumber));
    if(!meta) { return null; }
    return meta;
  }
}
