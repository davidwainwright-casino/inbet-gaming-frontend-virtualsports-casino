import * as React from 'react';
import { GameStatusItem } from './';

type R = React.ReactElement<GameStatusItem>;

interface IGameStatusListProps {
  children: R[] | R;
}

export const GameStatusList = ({ children }: IGameStatusListProps) => (
  <div className="game-status__list">{children}</div>
);
