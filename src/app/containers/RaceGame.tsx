import * as React from 'react';
import { observer, Provider } from 'mobx-react';

import { BetStatus, Favorites, History, MediaQueryHider, Video, Popular, Loader} from '../components';
import { GameStatusItem, MakeBet} from './';

import { IGameStateBase } from '../models';
import i18n from '../locales/i18n';

export const RaceGame = observer(({store} : {store: IGameStateBase}) => (
  <Provider gameStore={store}>
    {
      store.isLoaded ? (
        <>
          <main className='content'>
            <Favorites title={i18n.t('favourites')}/>
            <MediaQueryHider query={`(min-width: 1200px)`}>
              <Video />
            </MediaQueryHider>
            <MakeBet title={i18n.t('make_bet')}/>
          </main>
          <aside className='sidebar'>
            <MediaQueryHider query={`(max-width: 1199px)`}>
              <Video />
            </MediaQueryHider>
            <GameStatusItem />
            <BetStatus title={i18n.t('current_bets')}/>
            <Popular title={i18n.t('popular_coef')}/>
            <History title={i18n.t('rounds_history')}/>
          </aside>
        </>
      ) : <Loader/>
    }
  </Provider>
))
