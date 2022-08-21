import cn from 'classnames';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from '../../locales/i18n';

import { IKenoState, GameStatus, NotificationModel, NotificationType } from '../../models';
import { GameStore } from '../../stores';
import { currencyFormat, betFormat } from '../../utils';
import config from '../../api/configLoader';
import { computed } from 'mobx';
import minNotZero from '../../utils/minNotZero';

interface IHistoryProps {
  gameStore: IKenoState;
  game: GameStore;
}

@inject('gameStore', 'game')
@observer
export class KenoBetPanel extends React.Component<{}, {}> {
  get injected() {
    return this.props as IHistoryProps;
  }

  public setVal = (val: number = 0) => {
    const { gameStore, game } = this.injected;
    const {
      balanceAvailable,
      minBet,
      maxBetPerRound,
      addNotification,
      currency,
      betsAmount,
    } = game;

    const maxBet = gameStore.maxBet;
    const maxBetForRound = minNotZero([maxBetPerRound, gameStore.maxBetsAllRound]);

    if (maxBet && maxBet < val) {
      const message = i18n.t('notification_max_bet', {
        maxBet: currencyFormat(maxBet, currency),
      });
      addNotification(new NotificationModel(NotificationType.ERROR, message));

      if (config.onlyIntegerBets) {
        gameStore.betAmount =
          balanceAvailable < maxBet ? Math.floor(balanceAvailable / 100) * 100 : maxBet;
      } else {
        gameStore.betAmount = balanceAvailable < maxBet ? balanceAvailable : maxBet;
      }
    } else if (maxBetForRound && maxBetForRound < betsAmount + val) {
      const message = i18n.t('notification_max_bet_per_round', {
        maxBet: currencyFormat(maxBetForRound, currency),
      });
      addNotification(new NotificationModel(NotificationType.ERROR, message));

      if (config.onlyIntegerBets) {
        gameStore.betAmount =
          balanceAvailable < maxBetForRound - betsAmount
            ? Math.floor(balanceAvailable / 100) * 100
            : maxBetForRound - betsAmount;
      } else {
        gameStore.betAmount =
          balanceAvailable < maxBetForRound - betsAmount
            ? balanceAvailable
            : maxBetForRound - betsAmount;
      }
    } else if (minBet && (minBet > val || minBet > balanceAvailable)) {
      const message = i18n.t('tooltip_min_bet', {
        minBet: currencyFormat(minBet, currency),
      });
      addNotification(new NotificationModel(NotificationType.ERROR, message));
      if (minBet > balanceAvailable) {
        gameStore.betAmount = 0;
      } else {
        gameStore.betAmount = minBet;
      }
    } else {
      if (val > balanceAvailable) {
        if (config.onlyIntegerBets) {
          gameStore.betAmount = Math.floor(balanceAvailable / 100) * 100;
        } else {
          gameStore.betAmount = balanceAvailable;
        }
      } else {
        if (config.onlyIntegerBets) {
          gameStore.betAmount = val < 0 ? 0 : Math.floor(val / 100) * 100;
        } else {
          gameStore.betAmount = val < 0 ? 0 : val;
        }
      }
    }
  };

  public incVal = (inc: number = 1) => () => {
    const { gameStore, game } = this.injected;
    const { betStep } = game;
    this.setVal(gameStore.betAmount + inc * betStep);
  };


  @computed get makeBetDisabled(): boolean {
    const { balanceAvailable } = this.injected.game as GameStore;
    const gameStore = this.injected.gameStore;
    return !gameStore.selected.length || !gameStore.betAmount || gameStore.status !== GameStatus.OPEN || gameStore.betAmount > balanceAvailable;
  };

  public makeBet = () => {
    const { gameStore } = this.injected;
    if (!gameStore.selected.length || this.makeBetDisabled) {
      return;
    }

    gameStore.makeBet();
    this.setState({ value: 0 });
  };

  public render() {
    const { gameStore, game } = this.injected;
    if (!gameStore || !game) {
      return;
    }
    const { betAmount, status } = gameStore;
    const { betButtons, currency } = game;

    const canBet = status === GameStatus.OPEN;

    return (
      <div className="keno__bet-panel">
        <div className="bet-list__item-make-bet">
          <div className="bet-list__item-make-bet-title">{i18n.t('your_bet_value')}</div>
          <div className="bet-list__item-make-bet-spinner">
            <div className="bet-list__item-make-bet-spinner-dec" onClick={this.incVal(-1)} />
            <div className="bet-list__item-make-bet-spinner-val">
              {betFormat(betAmount, currency)} {currency}
            </div>
            <div className="bet-list__item-make-bet-spinner-inc" onClick={this.incVal(1)} />
          </div>
          <div className="bet-list__item-make-bet-calc">
            {betButtons.map((n) => (
              <span
                key={n}
                className="bet-list__item-make-bet-calc-btn"
                onClick={this.setVal.bind(this, betAmount + n)}
              >
                +{betFormat(n, currency)}
              </span>
            ))}
          </div>
          <div className="bet-list__item-make-bet-buttons">
            {!canBet ? (
              <div className="bet-list__item-make-bet-buttons-text disabled">
                {i18n.t('cannot_bet')}
              </div>
            ) : (
              <>
                <div
                  className="bet-list__item-make-bet-buttons-clear"
                  onClick={this.setVal.bind(this, 0)}
                />
                <div
                  className={cn('bet-list__item-make-bet-buttons-do', {
                    disabled: this.makeBetDisabled,
                  })}
                  onClick={this.makeBet}
                >
                  {i18n.t('make_bet')}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
