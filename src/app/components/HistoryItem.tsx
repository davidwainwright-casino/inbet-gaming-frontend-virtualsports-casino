import * as React from 'react';

interface IHistoryItemProps {
  round: number;
  winners: number[];
}

export class HistoryItem extends React.Component<IHistoryItemProps, {}> {
  public render() {
    const { round, winners } = this.props;
    return (
      <div className="history__content-item">
        <div className="history__content-round">№ {round}</div>
        <div className="history__content-results">
          {winners.map((winner: number) => (
            <div
              key={round + '_' + winner}
              className={'history__content-results-item player-' + winner}
            >
              {winner}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
