import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Panel, BetList, BetListItem } from '../components';
import { IGameStateBase } from '../models';

interface IFavoritesProps {
  gameStore?: IGameStateBase;
  title?: string;
}

@inject('gameStore')
@observer
export class Favorites extends React.Component<IFavoritesProps, {}> {
  public render() {
    const { title, gameStore } = this.props;
    if (!gameStore) {
      return;
    }
    const { favoritesCollapsed, favoritesCollapseToggle } = gameStore;

    return (
      <Panel
        className={'panel--favorites'}
        title={title}
        collapsed={favoritesCollapsed}
        onCollapseClick={favoritesCollapseToggle}
        collapsible={true}
      >
        {gameStore.odds.map((oddGroup) => {
          const favs = oddGroup.items.filter((item) => item.favorite);
          return favs.length ? (
            <BetList key={oddGroup.code} title={oddGroup.title} fullWidth={false}>
              {favs.map((item) => (
                <BetListItem key={item.key} odd={item} />
              ))}
            </BetList>
          ) : null;
        })}
      </Panel>
    );
  }
}
