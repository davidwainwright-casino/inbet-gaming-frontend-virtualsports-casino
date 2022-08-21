import * as React from 'react';
import { inject, observer, Provider } from 'mobx-react';
import { GameStore } from '../../stores';
import i18n from './../../locales/i18n';
import { BetStatus, Loader, PenaltyHistory, Favorites, Popular, MediaQueryHider, PenaltyVideoArea, penaltyMakeBetTitleRenderer } from '../../components';
import { GameStatusItem,  MakeBet } from '..';

interface IPenaltyProps {
  game?: GameStore
}

@inject('game')
@observer
export class Penalty extends React.Component<IPenaltyProps> {

  public render() {
    const { penalty: store } = this.props.game as GameStore;

    return (
      <Provider gameStore={store}>
        {
          store.isLoaded ? (
            <>
              <main className='content'>
                <Favorites title={i18n.t('favourites')} />
                <MediaQueryHider query={`(min-width: 1200px)`}>
                  <PenaltyVideoArea />
                </MediaQueryHider>
                <MakeBet title={i18n.t('make_bet')} itemTitleRenderer={penaltyMakeBetTitleRenderer} />
              </main>
              <aside className='sidebar'>
                <MediaQueryHider query={`(max-width: 1199px)`}>
                  <PenaltyVideoArea />
                </MediaQueryHider>
                <GameStatusItem />
                <BetStatus title={i18n.t('current_bets')} />
                <Popular title={i18n.t('popular_coef')} />
                <PenaltyHistory title={i18n.t('penalty_history')} />
              </aside>
            </>
          ) : <Loader />
        }
      </Provider>
    );
  }
}
