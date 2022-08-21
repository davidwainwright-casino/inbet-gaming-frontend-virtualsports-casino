import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { IGameStateBase, IOddItem } from '../models';
import { BetList, BetListItem, Panel } from '../components';

interface IMakeBetProps {
  gameStore?: IGameStateBase;
  columns?: number;
  title?: string;
  itemTitleRenderer?: (odd: IOddItem) => React.ReactNode;
}

@inject('gameStore')
@observer
export class MakeBet extends React.Component<IMakeBetProps, {}> {
  public render() {
    const { itemTitleRenderer, title, gameStore, columns } = this.props;

    return (
      <Panel className="panel--make-bet" title={title}>
        {gameStore &&
          gameStore.odds.map((oddGroup, i) => (
            <React.Fragment key={oddGroup.code}>
              <BetList title={oddGroup.title} fullWidth={false}>
                {oddGroup.items.map((oddItem) => (
                  <BetListItem
                    titleRenderer={itemTitleRenderer}
                    columns={columns || oddGroup.columns}
                    key={oddItem.title}
                    odd={oddItem}
                  />
                ))}
              </BetList>
              {gameStore.odds.length - 1 !== i && <div className="panel__body-hr" />}
            </React.Fragment>
          ))}
      </Panel>
    );
  }
}
