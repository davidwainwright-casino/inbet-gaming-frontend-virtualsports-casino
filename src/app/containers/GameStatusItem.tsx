import { observer, inject } from 'mobx-react';
import React from 'react';
import { IGameStateBase } from '../models';
import { GameStatusItem as Item } from '../components';
import i18n from '../locales/i18n';

interface IGameStatusItemProps {
  gameStore?: IGameStateBase;
}

@inject('gameStore')
@observer
export class GameStatusItem extends React.Component<IGameStatusItemProps, {}> {
  public render() {
    const { round, status, timeLeft } = this.props.gameStore as IGameStateBase;

    return (
      <Item
        statusType={status}
        adaptive={true}
        title={i18n.t('race') + ' № ' + round}
        time={timeLeft}
      />
    );
  }
}
