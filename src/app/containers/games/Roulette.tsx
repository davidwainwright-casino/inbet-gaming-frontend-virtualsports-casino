import * as React from 'react';
import { inject, observer, Provider } from 'mobx-react';
import { GameStore } from '../../stores';
import i18n from './../../locales/i18n';
import {
  BetStatus,
  Loader,
  Popular,
  MediaQueryHider,
  Favorites,
  RouletteVideoArea,
  RouletteHistory,
} from '../../components';
import { GameStatusItem, MakeBet } from '..';

interface IMakeBetProps {
  game?: GameStore;
}

@inject('game')
@observer
export class Roulette extends React.Component<IMakeBetProps> {
  public render() {
    const { roulette: store } = this.props.game as GameStore;

    return (
      <Provider gameStore={store}>
        {store.isLoaded ? (
          <>
            <main className="content">
              <Favorites title={i18n.t('favourites')} />
              <MediaQueryHider query={`(min-width: 1200px)`}>
                <RouletteVideoArea />
              </MediaQueryHider>
              <MakeBet title={i18n.t('make_bet')} />
            </main>
            <aside className="sidebar">
              <MediaQueryHider query={`(max-width: 1199px)`}>
                <RouletteVideoArea />
              </MediaQueryHider>
              <GameStatusItem />
              <BetStatus title={i18n.t('current_bets')} />
              <Popular title={i18n.t('popular_coef')} />
              <RouletteHistory title={i18n.t('roulette_history')} />
            </aside>
          </>
        ) : (
          <Loader />
        )}
      </Provider>
    );
  }
}
