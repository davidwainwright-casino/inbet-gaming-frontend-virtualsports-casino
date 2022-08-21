import cn from 'classnames';
import * as React from 'react';
import i18n from '../locales/i18n';
import ReactModal from 'react-modal';
import { BetStatuses } from './';

ReactModal.setAppElement('#root');

interface IBetStatusItemProps {
  group: string;
  title: string;
  amount: string;
  betAmount: string;
  statusText: string;
  statusType: BetStatuses;
  gameTitle?: string;
  factor?: number;
  onCancel?: any;
}

export class BetStatusItem extends React.Component<IBetStatusItemProps, {}> {
  public handleCancelClick = () => {
    this.props.onCancel();
  };

  public render() {
    const {
      title,
      amount,
      group,
      factor,
      betAmount,
      statusText,
      gameTitle,
      statusType,
    } = this.props;
    return (
      <div className="bet-status__item">
        <div className="bet-status__item-header">
          {gameTitle}
          {statusType === BetStatuses.ACCEPTED && (
            <div className="bet-status__item-remove" onClick={this.handleCancelClick} />
          )}
        </div>
        <div className="bet-status__item-body">
          <div className="bet-status__item-title">
            <div className="bet-status__item-header-title">{title}</div>
            <div className="bet-status__item-header-value">{amount}</div>
          </div>
          <div className="bet-status__item-bet">
            <span className="bet-status__item-bet-title">{group}</span>
            {factor !== undefined && betAmount && (
              <span className="bet-status__item-bet-value">
                {factor ? ` x ${factor} ` : ''}({betAmount})
              </span>
            )}
          </div>
          <div className="bet-status__item-bet-status">
            {statusType !== BetStatuses.ERROR && (
              <span className="bet-status__item-bet-status-title">{i18n.t('your_bet_status')}</span>
            )}
            <span
              className={cn('bet-status__item-bet-status-info', {
                ['bet-status__item-bet-status-info_accepted']: statusType === BetStatuses.ACCEPTED,
                ['bet-status__item-bet-status-info_playing']: statusType === BetStatuses.PLAYING,
                ['bet-status__item-bet-status-info_win']: statusType === BetStatuses.WIN,
                ['bet-status__item-bet-status-info_lose']: statusType === BetStatuses.LOSE,
                ['bet-status__item-bet-status-info_error']: statusType === BetStatuses.ERROR,
              })}
            >
              {statusText}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
