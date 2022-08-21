
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { formatTime } from '../../utils';
import {  IGameStateBase } from '../../models';
import i18n from '../../locales/i18n';


interface IPenaltyTimer {
  gameStore?: IGameStateBase;
}

@inject('gameStore')
@observer
export class PenaltyTimer extends React.Component<IPenaltyTimer> {
  public render() {
    const { gameStore } = this.props;
    const { timeLeft } = gameStore as IGameStateBase;

    return (
      <div className="penalty__title">{i18n.t('penalty_game_start_in', { time: formatTime(timeLeft) })}</div>
    );
  }
};
