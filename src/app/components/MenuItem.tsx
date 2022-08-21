import cn from 'classnames';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { getGameUrl } from '../api';
import { IGameStateBase, GameStatus } from '../models';
import { formatTime } from '../utils';


interface IMenuItem {
  routing?: any;
  game?: any;
  name: string;
  title: string;
  iconClass?: string;
  gameStore: IGameStateBase;
  selectIsDisabled?: boolean;
}

@inject('routing', 'game')
@observer
export class MenuItem extends React.Component<IMenuItem> {

  public onClick = () => {
    const { name, routing } = this.props;
    routing.push(getGameUrl(name));
  }

  public render() {
    const { name, title, game, iconClass, gameStore } = this.props;
    const className = cn('menu__item', 'font', iconClass, { 'menu__item--selected': !this.props.selectIsDisabled && name === game.name });

    const { status: statusType, timeLeft: time } = gameStore;
    const statusCls = { 
      ['menu__item-status']: true,
      ['menu__item-status_open']: statusType === GameStatus.OPEN,
      ['menu__item-status_closed']: statusType === GameStatus.CLOSED,
      ['menu__item-status_started']: statusType === GameStatus.STARTED,
      ['menu__item-status_finished']: statusType === GameStatus.FINISHED,
    };
    
    return (
      <li key={name} className={className} onClick={this.onClick}>
        <div className='menu__item-text'>
          {title}
          {([GameStatus.OPEN, GameStatus.CLOSED, GameStatus.FINISHED].indexOf(statusType) >= 0) && (
            <div className='menu__item-text-status'>{formatTime(time)}</div>
          )}
          <div className={cn(statusCls)}/>
        </div>
      </li>
    );
  }
}
