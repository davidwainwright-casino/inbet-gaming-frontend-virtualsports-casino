import { inject, observer } from 'mobx-react';
import React from 'react';
import { GameBody } from './';

interface IGame {
  match: any;
  game: any;
}

@inject('game')
@observer
export class Game extends React.Component<IGame> {
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
    return <GameBody />;
  }
}
