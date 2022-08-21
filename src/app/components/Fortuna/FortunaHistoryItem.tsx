
import React from 'react';
import { IFortunaHistory } from '../../models';

export class FortunaHistoryItem extends React.Component<IFortunaHistory, {}> {
  public render() {
    const { round, ball } = this.props;
    return (
      <div className="fortuna__history-item">
        <div className="fortuna__history-item-round">№ {round}</div>
        <div className="fortuna__history-item-number">
          <div className='fortuna__number fortuna__history-number' data-number={ball || 0} />
        </div>
        {/* <div className="history__content-round">{ball}</div> */}
      </div>
    );
  }
}
