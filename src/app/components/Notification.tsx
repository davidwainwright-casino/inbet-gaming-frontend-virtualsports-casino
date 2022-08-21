import cn from 'classnames';
import * as React from 'react';
import { NotificationType, NotificationModel } from '../models';
import { inject } from 'mobx-react';
import { GameStore } from '../stores';

interface INotificationProps {
  notification: NotificationModel;
  game?: GameStore;
}

@inject('game')
export class Notification extends React.Component<INotificationProps, {}> {
  public doClose = () => {
    const { game, notification } = this.props;
    if (!game) {
      return;
    }
    game.closeNotification(notification);
  };

  public render() {
    const { type, message } = this.props.notification;
    return (
      <div
        className={cn('notification', {
          ['notification_green']: type === NotificationType.WIN,
          ['notification_red']: type === NotificationType.LOSE || type === NotificationType.ERROR,
          // ['notification_orange']: [].indexOf(type) >= 0
        })}
      >
        <div className="notification__body">{message}</div>
        <div className="notification__close-button" onClick={this.doClose} />
      </div>
    );
  }
}
