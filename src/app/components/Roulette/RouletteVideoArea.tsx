import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IGameStateBase, GameStatus } from '../../models';
import { Video } from '..';
import { RouletteTable } from '.';

interface IRouletteVideoArea {
  gameStore?: IGameStateBase;
}

@inject('gameStore')
@observer
export class RouletteVideoArea extends React.Component<IRouletteVideoArea> {
  public render() {
    const { gameStore } = this.props;
    const { status } = gameStore as IGameStateBase;

    return (
      <>
        {[GameStatus.STARTED, GameStatus.FINISHED].includes(status) ? <Video /> : <RouletteTable />}
        {/* <RouletteTable /> */}
      </>
    );
  }
}

export default RouletteVideoArea;
