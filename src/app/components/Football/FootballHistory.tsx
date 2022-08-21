import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Panel } from './../';
import { IFootballState } from '../../models';
import chunk from 'lodash/chunk';

interface IFootballHistoryProps {
  gameStore?: IFootballState;
  title?: string;
}

@inject('gameStore')
@observer
export class FootballHistory extends React.Component<IFootballHistoryProps, {}> {
  public render() {
    const { title, gameStore } = this.props;
    if (!gameStore) {
      return;
    }
    const { teamAName, teamALogoUrl, teamBName, teamBLogoUrl, roundTeamsHistory } = gameStore;
    if (!roundTeamsHistory) {
      return;
    }

    let numA = 0;
    let numX = 0;
    let numB = 0;
    roundTeamsHistory.forEach((result) => {
      let { team_AScore: a, team_BScore: b } = result;
      if (!a) {
        a = 0;
      }
      if (!b) {
        b = 0;
      }

      if (a === b) {
        numX++;
      } else if (a > b) {
        numA++;
      } else {
        numB++;
      }
    });
    const chunkedItems = chunk(roundTeamsHistory, 5);

    return (
      <Panel
        className="football__history"
        title={title}
        initialCollapsed={false}
        collapsible={true}
      >
        <div className="football__game-status">
          <span className="football__game-status-team">
            {teamAName}
            <span
              className="football__game-status-logo"
              style={{ backgroundImage: `url('${teamALogoUrl}')` }}
            />
          </span>
          <span className="football__game-status-number">
            {numA} - {numX} - {numB}
          </span>
          <span className="football__game-status-team">
            <span
              className="football__game-status-logo"
              style={{ backgroundImage: `url('${teamBLogoUrl}')` }}
            />
            {teamBName}
          </span>
        </div>
        <table className="football__history__table">
          <tbody>
            {chunkedItems.map((chunkedItem) => (
              <tr
                key={chunkedItem.map((i) => i.roundId).join('-')}
                className="football__history__table__row"
              >
                {chunkedItem.map((item) => (
                  <td key={Number(item.roundId)} className="football__history__table__cell">
                    {item.team_AScore} : {item.team_BScore}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    );
  }
}
