import * as React from 'react';
import { Panel } from './../';
import { inject } from 'mobx-react';
import List from './List';
import * as ReactDOM from 'react-dom';
import { GameStore } from '../../stores';
import i18n from '../../locales/i18n';

export interface IBetHistoryWindowProps {
  game?: GameStore;
}

@inject('game')
export class BetHistoryWindow extends React.Component<IBetHistoryWindowProps, {}> {
  public doClose = () => {
    const { game } = this.props;
    if (game) {
      game.toggleHistoryVisibility();
    }
  };

  public handleClick = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      this.doClose();
    }
  };

  public componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  public componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  public renderRight = () => (
    <div className={'bet-history__window__close-button'} onClick={this.doClose} />
  );

  public render() {
    const rootEl = document.querySelector('#root');
    if (!rootEl) {
      return;
    }

    return ReactDOM.createPortal(
      <Panel
        className="bet-history bet-history__window"
        headClassName="bet-history bet-history__window-head"
        title={i18n.t('bets_history')}
        collapsed={false}
        collapsible={false}
        renderRight={this.renderRight}
      >
        <List multiColumn={true} />
      </Panel>,
      rootEl,
    );
  }
}
