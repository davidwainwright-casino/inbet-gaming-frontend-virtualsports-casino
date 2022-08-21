import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RaceGame } from '../';
import { GameStore } from '../../stores';

interface IMakeBetProps {
  game?: GameStore
}

@inject('game')
@observer
export class Trone extends React.Component<IMakeBetProps> {
  public render() {
    const { trone } = this.props.game as GameStore;

    return (
      <RaceGame store={trone}/>
    );
  }
}
