import { IBet999XX } from '../../proto/bets.proto';
// import { IBet } from '..';
import i18n from '../../locales/i18n';
import { BaseBet } from '../';
import { computed } from 'mobx';
import { GameStatus } from '../GameStatus';
// import { KenoOdd } from '.';

export class KenoBet extends BaseBet {
  @computed public get betData(): IBet999XX {
    const bet = (this.remoteData as any)['bet' + this.gameState.source];
    if (!bet) {
      throw new Error('Server not return IBet999XX');
    }
    return bet;
  }

  @computed public get factor() {
    let show = false;
    if (
      (this.round === this.gameState.round && this.gameState.status === GameStatus.FINISHED) ||
      this.round !== this.gameState.round
    ) {
      show = true;
    }
    return show ? 0 : undefined;
  }

  @computed public get group() {
    const body = this.betData.body!;
    return Array.isArray(body) && body.length > 1
      ? i18n.t('keno_ball_numbers')
      : i18n.t('keno_ball_number');
  }

  @computed public get title() {
    return this.betData.body!.join(', ');
  }
}
