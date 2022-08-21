import React from 'react';
import { observer, Provider } from 'mobx-react';

import { BetStatus, MediaQueryHider, Loader, KenoPanel, KenoVideo } from '../components';
import { GameStatusItem } from './';

import { IGameStateBase } from '../models';
import i18n from '../locales/i18n';
import { KenoHistory, KenoBetPanel } from '../components/Keno';

export const KenoGame = observer(({ store }: { store: IGameStateBase }) => (
  <Provider gameStore={store}>
    {store.isLoaded ? (
      <>
        <main className="content">
          <MediaQueryHider query={`(min-width: 1200px)`}>
            <KenoVideo />
            <KenoPanel />
          </MediaQueryHider>
        </main>
        <aside className="sidebar">
          <MediaQueryHider query={`(max-width: 1199px)`}>
            <KenoVideo />
            <KenoPanel />
          </MediaQueryHider>
          <GameStatusItem />
          <KenoBetPanel />
          <BetStatus title={i18n.t('current_bets')} />
          <KenoHistory title={i18n.t('keno_round_history')} />
        </aside>
      </>
    ) : (
      <Loader />
    )}
  </Provider>
));
