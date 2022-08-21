import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IGameStateBase, IOddItem } from '../models';
import { GameStore } from '../stores';
import { BetList, Panel, BetListItem } from '../components';
import groupBy from 'lodash/groupBy';

interface IPopularProps {
  gameStore?: IGameStateBase;
  game?: GameStore;
  title?: string;
  itemTitleRenderer?: (odd: IOddItem) => React.ReactNode;
}

@inject('game', 'gameStore')
@observer
export class Popular extends React.Component<IPopularProps, {}> {
  public render() {
    const { title, gameStore, itemTitleRenderer } = this.props;
    if (!gameStore || !gameStore.popular) {
      return;
    }
    // console.log(gameStore.popular)
    const grouped = groupBy<IOddItem>(gameStore.popular, (i) => i.group.title);

    return (
      <Panel className={'popular__panel'} title={title}>
        {Object.keys(grouped).map((groupTitle: string) => (
          <BetList key={groupTitle} title={groupTitle} fullWidth={true}>
            {grouped[groupTitle].map((oddItem: IOddItem) => (
              <BetListItem
                titleRenderer={itemTitleRenderer}
                key={oddItem.title.toString()}
                odd={oddItem}
              />
            ))}
          </BetList>
        ))}
      </Panel>
    );
  }
}
