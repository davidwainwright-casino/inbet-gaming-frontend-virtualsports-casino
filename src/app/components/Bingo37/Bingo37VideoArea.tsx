import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IGameStateBase, GameStatus } from '../../models';
import { Video } from '..';
import { Bingo37Table } from '.';

interface IBingo37VideoArea {
  gameStore?: IGameStateBase;
}

@inject('gameStore')
@observer
export class Bingo37VideoArea extends React.Component<IBingo37VideoArea> {
  public render() {
    const { gameStore } = this.props;
    const { status } = gameStore as IGameStateBase;

    return [GameStatus.STARTED, GameStatus.FINISHED].includes(status) ? (
      <Video />
    ) : (
      <Bingo37Table />
    );
  }
}

export default Bingo37VideoArea;
