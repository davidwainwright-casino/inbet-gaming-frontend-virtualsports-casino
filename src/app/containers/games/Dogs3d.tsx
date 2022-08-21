import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { RaceGame } from '../';
import { GameStore } from '../../stores';

interface IMakeBetProps {
  game?: GameStore
}

@inject('game')
@observer
export class Dogs3d extends React.Component<IMakeBetProps> {
  public render() {
    const { dogs3d } = this.props.game as GameStore;

    return (
      <RaceGame store={dogs3d}/>
    );
  }
}
