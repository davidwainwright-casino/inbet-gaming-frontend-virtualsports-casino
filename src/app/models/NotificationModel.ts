export enum NotificationType {
  WIN,
  LOSE,
  ERROR,
}

/**
 * Модель для уведомлений
 *
 * @export
 * @class NotificationModel
 */
export class NotificationModel {
  public id: string = '';
  public type: NotificationType = NotificationType.ERROR;
  public message?: string;
  public createDate: Date;

  constructor(type?: NotificationType, message?: string, id?: string) {
    if (typeof type !== 'undefined') {
      this.type = type;
    }
    if (message) {
      this.message = message;
    }

    if (id || message) {
      this.id = id ? id : message ? message : '';
    }

    this.createDate = new Date();
  }
}

export default NotificationModel;
