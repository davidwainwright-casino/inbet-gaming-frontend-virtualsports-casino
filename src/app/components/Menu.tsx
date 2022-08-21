import * as React from 'react';
import cn from 'classnames';
import { inject, observer } from 'mobx-react';
import { GameModel } from '../models';
import { GameStore } from '../stores';
import { MenuItem } from './';
import i18n from '../locales/i18n';

interface IMenu {
  routing?: any;
  game?: GameStore;
  backButtonOnly?: boolean;
  selectIsDisabled?: boolean;
}

@inject('routing', 'game')
@observer
export class Menu extends React.Component<IMenu> {
  public renderItem = (item: GameModel) => {
    const { game } = this.props;
    if (!game) {
      return;
    }

    return (
      <MenuItem
        key={item.name}
        name={item.name}
        iconClass={item.iconClass}
        title={item.title}
        gameStore={item.pickStore(game)}
        selectIsDisabled={this.props.selectIsDisabled}
      />
    );
  };

  public onBack = () => {
    this.props.routing && this.props.routing.push('/');
  }

  public render() {
    if (this.props.backButtonOnly) {
      return (
        <li className={cn('menu__item', 'menu__item--back', 'font')} onClick={this.onBack}>
          <div className='menu__item-text'>
            {i18n.t('back')}
          </div>
        </li>
      );
    }

    const { game } = this.props;
    if (!game) {
      return;
    }

    return <ul className="menu">{game.list.map(this.renderItem)}</ul>;
  }
}
