import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { KenoGame } from '../KenoGame';
import { IGameStateBase } from '../../models';

interface IMakeBetProps {
  gameState: IGameStateBase
}

@inject('game')
@observer
export class Keno extends React.Component<IMakeBetProps> {
  public render() {
    return (
      <KenoGame store={this.props.gameState}/>
    );
  }
}
