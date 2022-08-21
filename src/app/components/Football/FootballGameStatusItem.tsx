import { inject, observer } from 'mobx-react';
import React from 'react';
import { IFootballState } from '../../models';
import { GameStatusItem as Item } from '../';

interface IFootballGameStatusItemProps {
  gameStore?: IFootballState;
}

@inject('gameStore')
@observer
export class FootballGameStatusItem extends React.Component<IFootballGameStatusItemProps, {}> {
  public renderTitle = () => {
    const { gameStore } = this.props;
    if (!gameStore) {
      return;
    }
    const { teamAName, teamALogoUrl, teamBName, teamBLogoUrl } = gameStore;

    return (
      <div className="football__game-status">
        <span className="football__game-status-team">
          {teamAName}
          <span
            className="football__game-status-logo"
            style={{ backgroundImage: `url('${teamALogoUrl}')` }}
          />
        </span>
        <span className="football__game-status-vs">VS</span>
        <span className="football__game-status-team">
          <span
            className="football__game-status-logo"
            style={{ backgroundImage: `url('${teamBLogoUrl}')` }}
          />
          {teamBName}
        </span>
      </div>
    );
  };

  public render() {
    const { gameStore } = this.props;
    if (!gameStore) {
      return;
    }
    const { status, timeLeft } = gameStore;

    return (
      <Item
        headClassName="football__game-status__panel"
        statusType={status}
        adaptive={true}
        title={this.renderTitle()}
        time={timeLeft}
      />
    );
  }
}
