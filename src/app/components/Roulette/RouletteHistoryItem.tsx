
import * as React from 'react';
import { GameState1XXX } from '../../proto/bets.proto';
import i18n from '../../locales/i18n';

interface IRouletteHistory extends GameState1XXX.IHistoryItem {
  stat?: number;
}

export class RouletteHistoryItem extends React.Component<IRouletteHistory> {
  public render() {
    const { round, wincombo, stat } = this.props;
    return (
      <div className="roulette__history-item">
        <div className="roulette__history-item-round">{i18n.t('roulette_history_round_number', { number: round })}</div>
        <div className="roulette__history-item-number">
          <div className="roulette__history-number" data-number={wincombo || 0} data-text={i18n.t('roulette_history_hits_number', { number: wincombo || 0 })} />
        </div>
        <div className="roulette__history-item-stat">{i18n.t('roulette_history_sector_number', { number: stat })}</div>
      </div>
    );
  }
}
