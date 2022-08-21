import cn from 'classnames';
import * as React from 'react';
import { GameStatus } from '../models';
import { Panel } from './';
import { formatTime } from '../utils';
import i18n from '../locales/i18n';

interface IGameStatusItemProps {
  title?: React.ReactNode;
  time?: number;
  statusType: GameStatus;
  adaptive?: true;
  headClassName?: string;
}

export class GameStatusItem extends React.Component<IGameStatusItemProps, {}> {
  public render() {
    const { title, time, adaptive, statusType, headClassName } = this.props;

    let text = '';
    switch (statusType) {
      case GameStatus.OPEN:
        text = i18n.t('bets_allowed');
        break;
      case GameStatus.CLOSED:
        text = i18n.t('bets_taken');
        break;
      case GameStatus.STARTED:
        text = i18n.t('begin_yet');
        break;
      case GameStatus.FINISHED:
        text = i18n.t('round_finished_and_results_processing');
        break;
      default:
        break;
    }

    const statusCls = {
      ['game-status-icon']: true,
      ['game-status-icon_open']: statusType === GameStatus.OPEN,
      ['game-status-icon_closed']: statusType === GameStatus.CLOSED,
      ['game-status-icon_started']: statusType === GameStatus.STARTED,
      ['game-status-icon_finished']: statusType === GameStatus.FINISHED,
    };

    return (
      <Panel
        className={cn('game-status__panel', { ['game-status__panel_adaptive']: adaptive })}
        headClassName={cn('game-status__panel-head', headClassName, statusCls)}
        title={title}
      >
        <div className="game-status">
          <div className="game-status__info">
            <span className="game-status__info-value">
              <i className={cn('game-status__info-badge', statusCls)} />
              {text}
            </span>
            <span className="game-status__info-title">{i18n.t('playing_status')}</span>
          </div>
          {[GameStatus.OPEN, GameStatus.CLOSED].includes(statusType) && (
            <div className="game-status__counter">
              <span className="game-status__counter-info">{formatTime(time)}</span>
              <span className="game-status__counter-title">{i18n.t('begin_soon')}</span>
            </div>
          )}
        </div>
      </Panel>
    );
  }
}
