import React from 'react';
import { inject, observer } from 'mobx-react';
import { GameStore } from '../stores';
import { Notification as Item } from '../components/';

interface INotificationProps {
  game?: GameStore;
}

@inject('game')
@observer
export class Notification extends React.Component<INotificationProps, {}> {
  public render() {
    const { notifications } = this.props.game as GameStore;
    if (notifications.length) {
      return notifications.map((notification) => (
        <Item key={notification.id} notification={notification} />
      ));
    } else {
      return null;
    }
  }
}
