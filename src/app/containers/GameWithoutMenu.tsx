import { inject, observer } from 'mobx-react';
import React from 'react';
import { BetCancelAlert, Body } from '../components';
import { GameBody } from './';
import { Header } from './Header';
import { Notification } from './Notification';

interface IGame {
  match: any;
  game: any;
}

@inject('game')
@observer
export class GameWithoutMenu extends React.Component<IGame> {
  public componentDidMount() {
    const { match } = this.props;
    const { name } = match.params;
    this.props.game.selectGame(name);
  }

  public componentDidUpdate() {
    const { match } = this.props;
    const { name } = match.params;
    this.props.game.selectGame(name);
  }

  public render() {
    return (
      <>
        <Header />
        <Notification />
        <BetCancelAlert />

        <Body>
          <GameBody />
        </Body>
      </>
    );
  }
}
