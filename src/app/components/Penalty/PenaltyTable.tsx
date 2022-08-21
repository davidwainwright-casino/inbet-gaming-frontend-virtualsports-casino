import cn from 'classnames';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { BaseBet } from '../../models';
import { GameStore } from '../../stores';
import { Panel } from '..';
import { PenaltyTimer } from '.';

interface IPenaltyTable {
  game?: GameStore;
}

@inject('game')
@observer
export class PenaltyTable extends React.Component<IPenaltyTable> {

  public hasBat(ball: number) {
    const { game } = this.props;
    const { activeBets, source } = game as GameStore;
    return activeBets.some((bet: BaseBet) => {
      if (bet.remoteData.gameId === source && bet.betData) {
        return bet.betData.ball === ball;
      }
      return false;
    });
  }

  public render() {
    return (
      <Panel className="penalty__panel" bodyClassName="penalty__panel-body" collapsed={false} collapsible={false}>
        <PenaltyTimer />

        <div className='penalty__table-wrapper'>
          <span className='penalty__table-wrapper__top-bg' />
          <span className='penalty__table-wrapper__left-bg' />
          <span className='penalty__table-wrapper__right-bg' />

          <table className='penalty__table'>
            <tbody>
              <tr className='penalty__table-row'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(ball =>
                  <td key={ball} className={cn('penalty__table-cell', { ['penalty__table-cell_selected']: this.hasBat(ball) })}>{ball}</td>)
                }
              </tr>
              <tr className='penalty__table-row penalty__table-row--odd'>
                {[9, 10, 11, 12, 13, 14, 15, 16].map(ball =>
                  <td key={ball} className={cn('penalty__table-cell', { ['penalty__table-cell_selected']: this.hasBat(ball) })}>{ball}</td>)
                }
              </tr>
              <tr className='penalty__table-row'>
                {[17, 18, 19, 20, 21, 22, 23, 24].map(ball =>
                  <td key={ball} className={cn('penalty__table-cell', { ['penalty__table-cell_selected']: this.hasBat(ball) })}>{ball}</td>)
                }
              </tr>
            </tbody>
          </table>
        </div>
      </Panel>
    );
  }
}

export default PenaltyTable;
