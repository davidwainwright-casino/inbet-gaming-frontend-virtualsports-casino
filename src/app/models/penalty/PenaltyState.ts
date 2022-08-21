import { IObservableArray } from 'mobx';
import { GameStateBase } from './../';
import {PenaltyGroup} from './PenaltyGroup'
import { observable } from 'mobx';
import {IPenaltyState} from './IPenaltyState';
import { GameState1024, IBet } from '../../proto/bets.proto';
import { GameStore } from '../../stores';
import { ODDS, PenaltyOdd } from '.';
import i18n from '../../locales/i18n';
import { PenaltyBet } from './PenaltyBet';

export default class PenaltyState extends GameStateBase implements IPenaltyState {
  @observable public history: GameState1024.IHistoryItem[] = [];
  @observable public odds: IObservableArray<PenaltyGroup> = observable.array([]);
  @observable public statistic?: (GameState1024.IStatisticItem | null);

  constructor(root: GameStore) {
    super(root);

    // this.videoDuration = 8;

    const sectorGroup = this.addGroup(i18n.t('penalty_bets_by_sector'));
    sectorGroup.columns = 4;
    const commonGroup = this.addGroup(i18n.t('penalty_bets_common'));
    commonGroup.columns = 3;
    ODDS.forEach((odd: PenaltyOdd) => {
      if (odd.ball) {
        if (odd.ball > 0) {
          sectorGroup.add(odd);
        } else {
          commonGroup.add(odd);
        }
      } else if (typeof odd.alias !== 'undefined') {
        commonGroup.add(odd);
      }
    });
  }

  public setVideoDuration(duration: number) {
    this.videoDuration = Math.ceil(duration)
      + (this.timeLeft ? (this.timeTotal - this.timeLeft) : 0); // Добавляем время пока видео грузилось
  }

  public addGroup(code: string): PenaltyGroup {
    const item = new PenaltyGroup(this, code);
    this.odds.push(item);
    return item;
  }

  public createBet(remoteBet: IBet): PenaltyBet {
    return new PenaltyBet(this, remoteBet);
  }
}
