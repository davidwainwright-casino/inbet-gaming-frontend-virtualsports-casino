import { inject, observer } from 'mobx-react';
import React from 'react';
import * as Games from './games';
import { GameStore } from '../stores';

interface IGameBody {
  game?: GameStore;
}

@inject('game')
@observer
export class GameBody extends React.Component<IGameBody> {
  public getGameBody(name: string) {
    const { game } = this.props;
    if (!game) {
      return;
    }

    switch (name) {
      // TODO: make simpler like keno
      case 'dogs6':
        return <Games.Dogs6 />;
      case 'horses6':
        return <Games.Horses6 />;
      case 'dogs':
        return <Games.Dogs3d />;
      case 'trone':
        return <Games.Trone />;
      case 'bike':
        return <Games.Bike />;
      case 'moto':
        return <Games.Moto />;
      case 'football':
        return <Games.Football />;
      case 'fortuna':
        return <Games.Fortuna />;
      case 'goal':
        return <Games.Penalty />;
      case 'keno-live':
        return <Games.Keno gameState={game.keno99920} />;
      case 'roulette':
        return <Games.Roulette />;
      case 'bingo37':
        return <Games.Bingo37 />;
      default:
        return null;
    }
  }

  public render() {
    const { game } = this.props;
    if (!game) {
      return;
    }
    const { name } = game;

    const gameBody = this.getGameBody(name);
    return gameBody;
  }
}
