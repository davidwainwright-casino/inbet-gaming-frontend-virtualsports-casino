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
  Bingo37VideoArea,
  RouletteHistory,
} from '../../components';
import { GameStatusItem, MakeBet } from '..';

interface IMakeBetProps {
  game?: GameStore;
}

@inject('game')
@observer
export class Bingo37 extends React.Component<IMakeBetProps> {
  public render() {
    const { bingo37: store } = this.props.game as GameStore;

    return (
      <Provider gameStore={store}>
        {store.isLoaded ? (
          <>
            <main className="content">
              <Favorites title={i18n.t('favourites')} />
              <MediaQueryHider query={`(min-width: 1200px)`}>
                <Bingo37VideoArea />
              </MediaQueryHider>
              <MakeBet title={i18n.t('make_bet')} />
            </main>
            <aside className="sidebar">
              <MediaQueryHider query={`(max-width: 1199px)`}>
                <Bingo37VideoArea />
              </MediaQueryHider>
              <GameStatusItem />
              <BetStatus title={i18n.t('current_bets')} />
              <Popular title={i18n.t('popular_coef')} />
              <RouletteHistory title={i18n.t('bingo37_history')} />
            </aside>
          </>
        ) : (
          <Loader />
        )}
      </Provider>
    );
  }
}
