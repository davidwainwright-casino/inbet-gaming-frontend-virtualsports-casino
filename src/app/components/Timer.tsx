import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { formatTime } from '../utils';
import { IGameStateBase } from '../models';

interface ITimer {
  gameStore?: IGameStateBase;
}

@inject('gameStore')
@observer
export class Timer extends React.Component<ITimer> {
  public render() {
    const { gameStore } = this.props;
    const { timeLeft } = gameStore as IGameStateBase;

    return formatTime(timeLeft);
  }
}
