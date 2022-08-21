import React from 'react';
import { inject, observer, Provider } from 'mobx-react';
import { GameStore } from '../../stores';
import i18n from './../../locales/i18n';
import {
  Video,
  BetStatus,
  Loader,
  FootballHistory,
  Popular,
  MediaQueryHider,
  FootballGameStatusItem,
  Favorites,
} from '../../components';
import { MakeBet } from '../';
// import { footballMakeBetTitleRenderer } from './../../components/Football/footballMakeBetTitleRenderer';

interface IMakeBetProps {
  game?: GameStore;
}

@inject('game')
@observer
export class Football extends React.Component<IMakeBetProps> {
  public render() {
    const { football: store } = this.props.game as GameStore;

    return (
      <Provider gameStore={store}>
        {store.isLoaded ? (
          <>
            <main className="content">
              <Favorites title={i18n.t('favourites')} />
              <MediaQueryHider query={`(min-width: 1200px)`}>
                <Video />
              </MediaQueryHider>
              <MakeBet title={i18n.t('make_bet')} />
              {/* itemTitleRenderer={footballMakeBetTitleRenderer} */}
            </main>
            <aside className="sidebar">
              <MediaQueryHider query={`(max-width: 1199px)`}>
                <Video />
              </MediaQueryHider>
              <FootballGameStatusItem />
              <BetStatus title={i18n.t('current_bets')} />
              <Popular title={i18n.t('popular_coef')} />
              <FootballHistory title={i18n.t('football_history')} />
            </aside>
          </>
        ) : (
          <Loader />
        )}
      </Provider>
    );
  }
}
