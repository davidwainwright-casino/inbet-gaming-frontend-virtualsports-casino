import React from 'react';
import { inject, observer } from 'mobx-react';
import { IKenoState, GameStatus } from '../../models';
import { KenoVideoAnimated } from './KenoVideoAnimated';

interface IKenoVideoProps {
  gameStore?: IKenoState;
}

@inject('gameStore')
@observer
export class KenoVideo extends React.Component<IKenoVideoProps, {}> {
  public render() {
    const { status, timeRight, startDelayDelta, videoDuration } = this.props.gameStore!;

    return (
      <KenoVideoAnimated
        hidden={![GameStatus.STARTED, GameStatus.FINISHED].includes(status)}
        duration={videoDuration}
        status={status}
        currentTime={timeRight && timeRight - startDelayDelta > 0 ? timeRight - startDelayDelta : 1}
      />
    );
  }
}
