import * as React from 'react';
import { inject, observer, Provider } from 'mobx-react';
import { GameStore } from '../../stores';
import i18n from './../../locales/i18n';
import {
  BetStatus,
  Loader,
  Popular,
  Favorites,
  MediaQueryHider,
  FortunaHistory,
  fortunaMakeBetTitleRenderer,
  FortunaPanel,
} from '../../components';
import { MakeBet, GameStatusItem } from '../';

interface IMakeBetProps {
  game?: GameStore;
}

@inject('game')
@observer
export class Fortuna extends React.Component<IMakeBetProps> {
  public render() {
    const { fortuna: store } = this.props.game as GameStore;

    return (
      <Provider gameStore={store}>
        {store.isLoaded ? (
          <>
            <main className="content">
              <Favorites title={i18n.t('favourites')} />
              <MediaQueryHider query={`(min-width: 1200px)`}>
                <FortunaPanel />
              </MediaQueryHider>
              <MakeBet
                itemTitleRenderer={fortunaMakeBetTitleRenderer}
                columns={3}
                title={i18n.t('make_bet')}
              />
            </main>
            <aside className="sidebar">
              <MediaQueryHider query={`(max-width: 1199px)`}>
                <FortunaPanel />
              </MediaQueryHider>
              <GameStatusItem />
              <BetStatus title={i18n.t('current_bets')} />
              <Popular
                itemTitleRenderer={fortunaMakeBetTitleRenderer}
                title={i18n.t('popular_coef')}
              />
              <FortunaHistory title={i18n.t('rounds_history')} />
            </aside>
          </>
        ) : (
          <Loader />
        )}
      </Provider>
    );
  }
}
