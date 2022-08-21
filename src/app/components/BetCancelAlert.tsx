import cn from 'classnames';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { GameStore } from '../stores';
import ReactModal from 'react-modal';
import i18n from 'i18next';

interface IProps {
  game?: GameStore;
}

@inject('game')
@observer
export class BetCancelAlert extends React.Component<IProps, {}> {
  handleCloseConfirm = () => {
    this.props.game!.betToCancel = undefined;
  };
  handleCancel = async () => {
    await this.props.game!.betToCancel!.cancelBet();
    this.props.game!.betToCancel = undefined;
  };

  public render() {
    const { game } = this.props;
    return (
      <ReactModal
        isOpen={!!game!.betToCancel}
        onRequestClose={this.handleCloseConfirm}
        className="bet-status__modal"
        overlayClassName="bet-status__overlay"
      >
        <div className="bet-status__modal-title">{i18n.t('confirm_bet_cancellation')}</div>
        <div className="bet-status__modal-buttons">
          <div className="bet-status__modal-buttons-confirm" onClick={this.handleCancel}>
            {i18n.t('Yes')}
          </div>
          <div className="bet-status__modal-buttons-close" onClick={this.handleCloseConfirm}>
            {i18n.t('No')}
          </div>
        </div>
      </ReactModal>
    );
  }
}
