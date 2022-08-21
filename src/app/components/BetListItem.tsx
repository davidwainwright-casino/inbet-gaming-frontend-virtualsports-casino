import { Popper } from 'react-popper';
import { ReferenceObject } from 'popper.js';
import cn from 'classnames';
import * as React from 'react';
import { computed, observe } from 'mobx';
import { inject, observer } from 'mobx-react';
import { GameStore } from '../stores';
import {
  Dynamics,
  GameStatus,
  IOddItem,
  NotificationType,
  IGameStateBase,
  GameStateBase,
  NotificationModel,
} from '../models';
import i18n from '../locales/i18n';
import { betFormat, currencyFormat } from '../utils';
import config from '../api/configLoader';
import minNotZero from '../utils/minNotZero';

interface IBetListItemProps {
  odd: IOddItem;
  columns?: number;
  game?: GameStore;
  gameStore?: IGameStateBase;
  titleRenderer?: (odd: IOddItem) => React.ReactNode;
}

interface IBetListItemState {
  isOpen: boolean;
  value: number;
  message: string;
}

@inject('game', 'gameStore')
@observer
export class BetListItem extends React.Component<IBetListItemProps, IBetListItemState> {
  public state = {
    isOpen: false,
    value: 0,
    message: '',
  };

  private buttonRef = React.createRef<HTMLDivElement>();
  private popupEl?: HTMLDivElement;
  private betButtonRef = React.createRef<HTMLDivElement>();

  constructor(props: IBetListItemProps) {
    super(props);

    const gameStore = props.gameStore as GameStateBase;
    observe(gameStore, 'video', (change: any) => {
      if (this.state.isOpen && !change.oldValue && change.newValue !== change.oldValue) {
        this.setState({ isOpen: false });
      }
    });
  }

  @computed get makeBetDisabled(): boolean {
    const { balanceAvailable } = this.props.game as GameStore;
    return !this.state.value || this.props.odd.game.status !== GameStatus.OPEN || this.state.value > balanceAvailable;
  };

  public makeBet = () => {
    if (!this.makeBetDisabled) {
      this.props.odd.makeBet(this.state.value);
      this.setState({ isOpen: false, value: 0 });
    }
  };

  public toogleFavorite = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    this.props.odd.toogleFavorite();
  };

  public openBetMenu = () => {
    this.setState({ isOpen: !this.state.isOpen, value: 0, message: '' });
  };

  public setVal = (val: number = 0) => {
    const { balanceAvailable, minBet, maxBetPerRound, addNotification, currency, betsAmount } = this
      .props.game as GameStore;
    const maxBet = this.props.gameStore ? this.props.gameStore.maxBet : 0;
    const maxBetsAllRound = this.props.gameStore ? this.props.gameStore.maxBetsAllRound : 0;
    const maxBetForRound = minNotZero([maxBetPerRound, maxBetsAllRound]);

    let tooltip = '';
    if (maxBet && maxBet < val) {
      const message = i18n.t('notification_max_bet', {
        maxBet: currencyFormat(maxBet, currency),
      });
      addNotification(new NotificationModel(NotificationType.ERROR, message));

      if (this.state.value === maxBet) {
        tooltip = i18n.t('tooltip_max_bet', { maxBet: currencyFormat(maxBet, currency) });
      }
      if (config.onlyIntegerBets) {
        this.setState({
          value: balanceAvailable < maxBet ? Math.floor(balanceAvailable / 100) * 100 : maxBet,
          message: tooltip,
        });
      } else {
        this.setState({
          value: balanceAvailable < maxBet ? balanceAvailable : maxBet,
          message: tooltip,
        });
      }
    } else if (maxBetForRound && maxBetForRound < betsAmount + val) {
      const message = i18n.t('notification_max_bet_per_round', {
        maxBet: currencyFormat(maxBetForRound, currency),
      });
      addNotification(new NotificationModel(NotificationType.ERROR, message));

      if (this.state.value === maxBetForRound - betsAmount) {
        tooltip = i18n.t('tooltip_max_bet_per_round', {
          maxBet: currencyFormat(maxBetForRound, currency),
        });
      }
      if (config.onlyIntegerBets) {
        this.setState({
          value:
            balanceAvailable < maxBetForRound - betsAmount
              ? Math.floor(balanceAvailable / 100) * 100
              : maxBetForRound - betsAmount,
          message: tooltip,
        });
      } else {
        this.setState({
          value:
            balanceAvailable < maxBetForRound - betsAmount
              ? balanceAvailable
              : maxBetForRound - betsAmount,
          message: tooltip,
        });
      }
    } else if (minBet && (minBet > val || minBet > balanceAvailable)) {
      tooltip = i18n.t('tooltip_min_bet', {
        minBet: currencyFormat(minBet, currency),
      });

      if (minBet > balanceAvailable) {
        this.setState({ value: 0, message: tooltip });
      } else {
        this.setState({ value: minBet, message: tooltip });
      }
    } else {
      if (val > balanceAvailable) {
        if (config.onlyIntegerBets) {
          this.setState({ value: Math.floor(balanceAvailable / 100) * 100, message: tooltip });
        } else {
          this.setState({ value: balanceAvailable, message: tooltip });
        }
      } else {
        if (config.onlyIntegerBets) {
          this.setState({ value: val < 0 ? 0 : Math.floor(val / 100) * 100, message: tooltip });
        } else {
          this.setState({ value: val < 0 ? 0 : val, message: tooltip });
        }
      }
    }
  };

  public decVal = () => {
    const { betStep } = this.props.game as GameStore;
    if (this.state.value > 0) {
      this.setVal(this.state.value - betStep);
    }
  };

  public incVal = () => {
    const { betStep } = this.props.game as GameStore;
    this.setVal(this.state.value + betStep);
  };

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  public handleClickOutside = (event: any) => {
    const { isOpen } = this.state;

    if (!isOpen) {
      return;
    }

    if (
      this.popupEl &&
      !this.popupEl.contains(event.target) &&
      (this.buttonRef.current && !this.buttonRef.current.contains(event.target))
    ) {
      this.setState({ isOpen: false });
    }
  };

  public render() {
    const { columns, odd, titleRenderer } = this.props;
    const { title, game, num, favorite, dynamics, betsAmount } = odd;
    const { isOpen, value, message } = this.state;
    const { status } = game;
    const { betButtons, currency } = this.props.game as GameStore;

    return (
      <>
        <div
          ref={this.buttonRef}
          onClick={this.openBetMenu}
          className={cn('bet-list__item', {
            ['bet-list__item-open']: isOpen,
            [`bet-list__item--${columns}-in-row`]: columns,
          })}
        >
          <div className="bet-list__item-main">
            <div className="bet-list__item-main-title">
              {titleRenderer ? titleRenderer(odd) : title}
            </div>
            {betsAmount > 0 && (
              <div className="bet-list__item-main-bet-amount">
                {betFormat(betsAmount, currency)} {currency}
              </div>
            )}
            <div
              className={cn('bet-list__item-main-value', {
                ['bet-list__item-main-value_decreased']: dynamics === Dynamics.DOWN,
              })}
            >
              x {num}
              {dynamics && <i className="bet-list__item-main-value-icon" />}
            </div>
            <i
              className={cn('bet-list__item-add-to-favourites', {
                ['bet-list__item-add-to-favourites-in']: favorite,
              })}
              onClick={this.toogleFavorite}
            />
          </div>
        </div>
        {isOpen && (
          <Popper
            placement="bottom-start"
            referenceElement={
              this.buttonRef.current ? (this.buttonRef.current as ReferenceObject) : undefined
            }
          >
            {({ placement, ref, style }) => {
              let width = null;
              if (this.buttonRef.current) {
                width = this.buttonRef.current.getBoundingClientRect().width;
                if (width < 220) {
                  width = 320;
                }
              }
              return (
                <div
                  ref={(node) => {
                    ref(node);
                    if (node) {
                      this.popupEl = node;
                    }
                  }}
                  style={{ ...style, width: width + 'px' }}
                  data-placement={placement}
                  className="bet-list__item-make-bet"
                >
                  <div className="bet-list__item-make-bet-title">{i18n.t('your_bet_value')}</div>
                  <div className="bet-list__item-make-bet-spinner">
                    <div className="bet-list__item-make-bet-spinner-dec" onClick={this.decVal} />
                    <div className="bet-list__item-make-bet-spinner-val">
                      {betFormat(value, currency)} {currency}
                    </div>
                    <div className="bet-list__item-make-bet-spinner-inc" onClick={this.incVal} />
                  </div>
                  <div className="bet-list__item-make-bet-calc">
                    {betButtons.map((n) => (
                      <span
                        key={n}
                        className="bet-list__item-make-bet-calc-btn"
                        onClick={this.setVal.bind(this, value + n)}
                      >
                        +{betFormat(n, currency)}
                      </span>
                    ))}
                  </div>
                  <div className="bet-list__item-make-bet-buttons" ref={this.betButtonRef}>
                    {status !== GameStatus.OPEN ? (
                      <div className="bet-list__item-make-bet-buttons-text disabled">
                        {i18n.t('cannot_bet')}
                      </div>
                    ) : (
                      <>
                        <div
                          className="bet-list__item-make-bet-buttons-x2"
                          onClick={this.setVal.bind(this, 2 * value)}
                        >
                          X2
                        </div>
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

                  {message ? (
                    <Popper
                      placement="top"
                      referenceElement={
                        this.betButtonRef.current
                          ? (this.betButtonRef.current as ReferenceObject)
                          : undefined
                      }
                    >
                      {({ placement: p, ref: r, style: s }) => (
                        <div
                          ref={(node) => {
                            r(node);
                          }}
                          style={s}
                          data-placement={p}
                          className="bet-list__item-popper"
                        >
                          {message}
                        </div>
                      )}
                    </Popper>
                  ) : null}
                </div>
              );
            }}
          </Popper>
        )}
      </>
    );
  }
}
