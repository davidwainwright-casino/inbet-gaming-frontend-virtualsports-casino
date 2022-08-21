import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RaceGame } from '../';
import { GameStore } from '../../stores';

interface IMakeBetProps {
  game?: GameStore;
}

@inject('game')
@observer
export class Horses6 extends React.Component<IMakeBetProps> {
  public render() {
    const { horses6 } = this.props.game as GameStore;

    return <RaceGame store={horses6} />;
  }
}
