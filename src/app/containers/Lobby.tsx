import { inject, observer } from 'mobx-react';
import React from 'react';
import { BetCancelAlert, Menu } from '../components';
import { Header } from './Header';
import { Notification } from './Notification';

@inject('game')
@observer
export class Lobby extends React.Component {

  public render() {
    return (
      <>
        <Menu selectIsDisabled={true} />
        <Header titleIsDisabled={true}/>
        <Notification />
        <BetCancelAlert />
      </>
    );
  }
}
