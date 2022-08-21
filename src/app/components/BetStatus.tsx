import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Scrollbars from 'react-custom-scrollbars';
import { GameStore } from '../stores';
import { Panel } from './';
import { BetStatuses, BetStatusItem, BetStatusColumn } from './';
import { BetStatus as bStatus } from '../proto/bets.proto';
import { GameStatus, IGameStateBase } from '../models';
import i18n from '../locales/i18n';
import { currencyFormat } from '../utils';

interface IBetStatusProps {
  gameStore?: IGameStateBase;
  game?: GameStore;
  title?: string;
}

@inject('game', 'gameStore')
@observer
export class BetStatus extends React.Component<IBetStatusProps, {}> {
  public renderScrollView = (props: any) => {
    return <div {...props} className="bet-status__scroll__view" />;
  };

  public renderScrollTrack = (props: any) => {
    return <div {...props} className="bet-status__scroll__track" />;
  };

  public getScrollHeight = (count: number) => {
    return (count > 3 ? 3 * 10.5 : count * 10.5) + 'em';
  };

  public render() {
    const { title, gameStore, game } = this.props;
    if (!gameStore || !game) {
      return;
    }

    const { currency, activeBets } = game;

    return (
      <Panel className="bet-status__panel" bodyClassName="bet-status__panel-body" title={title}>
        <Scrollbars
          style={{ height: this.getScrollHeight(activeBets.length) }}
          className="bet-status__scroll"
          renderView={this.renderScrollView}
          renderTrackVertical={this.renderScrollTrack}
        >
          <BetStatusColumn>
            {activeBets.map((bet) => {
              const gameStatus = bet.gameState.status;

              let betStatus = BetStatuses.UNDEFINED;
              let statusText = i18n.t('processing');

              if (bet.status === bStatus.BS_undefined) {
                betStatus = BetStatuses.UNDEFINED;
                statusText = i18n.t('processing');
              } else if (bet.status === bStatus.BS_want_cancel) {
                betStatus = BetStatuses.CANCELING;
                statusText = i18n.t('cancelling');
              } else if (bet.status === bStatus.BS_user_canceled) {
                betStatus = BetStatuses.CANCELED;
                statusText = i18n.t('cancel');
              } else if (bet.status === bStatus.BS_denied) {
                betStatus = BetStatuses.ERROR;
                statusText = i18n.t('bet_denied');
              } else if (gameStatus === GameStatus.STARTED) {
                // bet.status === bStatus.BS_calculated &&
                betStatus = BetStatuses.PLAYING;
                statusText = i18n.t('is_playing_now');
              } else if (gameStatus === GameStatus.FINISHED) {
                if (bet.status === bStatus.BS_calculated) {
                  if (bet.payAmount) {
                    betStatus = BetStatuses.WIN;
                    statusText = i18n.t('win');
                  } else {
                    betStatus = BetStatuses.LOSE;
                    statusText = i18n.t('loss');
                  }
                } else {
                  betStatus = BetStatuses.PLAYING;
                  statusText = i18n.t('is_playing_now');
                }
              } else if (bet.status === bStatus.BS_accepted) {
                betStatus = BetStatuses.ACCEPTED;
                statusText = i18n.t('waiting_for_play');
              } else {
                betStatus = BetStatuses.PLAYING;
                statusText = i18n.t('is_playing_now');
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
                  onCancel={() => (game.betToCancel = bet)}
                />
              );
            })}
          </BetStatusColumn>
        </Scrollbars>
      </Panel>
    );
  }
}
