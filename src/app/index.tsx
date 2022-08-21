import 'normalize.css/normalize.css';
import '../assets/sass/style.scss';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BetCancelAlert, Body, Menu } from './components';
import { Game, Header, Notification } from './containers';
import { getGameUrl } from './api';
import config from './api/configLoader';
import { Lobby } from './containers/Lobby';
import { GameWithoutMenu } from './containers/GameWithoutMenu';

export class App extends React.Component {
  public render() {
    if (config.hideMenuOnGamePage) {
      return (
        <div className="layout">
            <Switch>
              <Route path="/game/:name" component={GameWithoutMenu} />
              <Route path="/" component={Lobby} />
            </Switch>
        </div>
      );

    }

    return (
      <div className="layout">
        <Menu />
        <Header />
        <Notification />
        <BetCancelAlert />

        <Body>
          <Switch>
            <Route path="/game/:name" component={Game} />
            <Redirect from="/" to={getGameUrl()} />
          </Switch>
        </Body>
      </div>
    );
  }
}

export default App;
