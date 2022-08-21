import cn from 'classnames';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { BetStatusItem, BetStatuses } from './../';
import Scrollbars from 'react-custom-scrollbars';
import { GameStore } from '../../stores';
import { BetStatus as bStatus } from '../../proto/bets.proto';
import i18n from '../../locales/i18n';
import { currencyFormat } from '../../utils';

interface IBetHistoryPopupProps {
  game?: GameStore;
  multiColumn: boolean;
}

@inject('game')
@observer
export default class BetHistoryPopup extends React.Component<IBetHistoryPopupProps, {}> {
  public renderScrollView = (props: any) => {
    return <div {...props} className="bet-history__popup__scroll__view" />;
  };

  public renderThumb = ({ style, ...props }: any) => {
    return (
      <div
        {...props}
        style={{ ...style, backgroundColor: '#f4f3f3', width: '10px', opacity: '0.6' }}
      />
    );
  };

  public render() {
    const { multiColumn, game } = this.props;
    if (!game) {
      return;
    }
    const { historyBets, currency } = game;

    return (
      <Scrollbars
        className="bet-history__popup__scroll"
        renderView={this.renderScrollView}
        renderThumbVertical={this.renderThumb}
      >
        <div
          className={cn('bet-status', {
            [multiColumn ? 'bet-status_multicolumn' : 'bet-status_onecolumn']: true,
          })}
        >
          {historyBets.map((bet) => {
            let betStatus = BetStatuses.UNDEFINED;
            let statusText = i18n.t('processing');

            if (bet.status === bStatus.BS_accepted) {
              betStatus = BetStatuses.ACCEPTED;
              statusText = i18n.t('waiting_for_play');
            } else if (bet.status === bStatus.BS_denied) {
              betStatus = BetStatuses.ERROR;
              statusText = i18n.t('bet_denied');
            } else if (bet.status === bStatus.BS_want_cancel) {
              betStatus = BetStatuses.CANCELING;
              statusText = i18n.t('cancelling');
            } else if (bet.status === bStatus.BS_user_canceled) {
              betStatus = BetStatuses.CANCELED;
              statusText = i18n.t('bet_cancelled');
            } else if (bet.status === bStatus.BS_calculated) {
              if (bet.payAmount) {
                betStatus = BetStatuses.WIN;
                statusText = i18n.t('win');
              } else {
                betStatus = BetStatuses.LOSE;
                statusText = i18n.t('loss');
              }
            }

            return (
              <BetStatusItem
                key={bet.key}
                group={bet.group}
                gameTitle={bet.gameState!.title}
                title={bet.title}
                amount={currencyFormat(bet.betAmount, currency)}
                factor={bet.factor}
                betAmount={currencyFormat(bet.winAmount, currency)}
                statusType={betStatus}
                statusText={statusText}
              />
            );
          })}
        </div>
      </Scrollbars>
    );
  }
}
