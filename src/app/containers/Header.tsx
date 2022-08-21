import cn from 'classnames'
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { GameStore } from '../stores';
import { BetHistoryByQuery } from '../components'
import { currencyFormat } from '../utils';


export interface IHeader {
  game?: GameStore
  titleIsDisabled?: boolean;
}

@inject('game')
@observer
export class Header extends React.Component<IHeader, any> {
  public historyButton?: HTMLAnchorElement;

  public render() {
    const { loaded, hideBalance, balanceAvailable, currency, title, toggleHistoryVisibility, historyVisible, notificationsEnabled, toggleNotifications } = this.props.game as GameStore;
    const balanceStr = currencyFormat(balanceAvailable, currency);

    return (
      <header className='header'>
        <div className='header__title'>{this.props.titleIsDisabled ? null : title}</div>
        <div className='header__bar'>
          {
            !hideBalance 
              && loaded 
              && <span className='header__bar-text header__bar-balance'>{balanceStr}</span>
          }
          <a className={cn('header__bar-button font', { ['font--notifications-on']: notificationsEnabled, ['font--notifications-off']: !notificationsEnabled })} onClick={toggleNotifications}/>
          <a ref={node => (node && (this.historyButton = node))} className='header__bar-button font font--history' onClick={toggleHistoryVisibility}/>
          {
            historyVisible && <BetHistoryByQuery historyButton={this.historyButton}/>
          }
        </div>
      </header>
    );
  }
}
