import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IGameStateBase, GameStatus } from '../../models';
import { Video } from '..';
import { PenaltyTable } from '.';

interface IPenaltyVideoArea {
  gameStore?: IGameStateBase;
}

@inject('gameStore')
@observer
export class PenaltyVideoArea extends React.Component<IPenaltyVideoArea> {
  public render() {
    const { gameStore } = this.props;
    const { status } = gameStore as IGameStateBase;

    return [GameStatus.STARTED, GameStatus.FINISHED].includes(status) ? (
      <Video minFastForwardTime={5} />
    ) : (
      <PenaltyTable />
    );
  }
}
