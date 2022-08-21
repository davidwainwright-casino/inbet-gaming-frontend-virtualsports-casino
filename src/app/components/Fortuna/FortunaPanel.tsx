import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IFortunaState, GameStatus } from '../../models';
import i18n from '../../locales/i18n';
import { formatTime } from '../../utils';
import { FortunaBet } from '../../models/fortuna';
import groupBy from 'lodash/groupBy';
import { FortunaCircle } from './FortunaCircle';

interface IFortunaPanelProps {
  gameStore?: IFortunaState;
}

@inject('gameStore')
@observer
export class FortunaPanel extends React.Component<IFortunaPanelProps, {}> {
  public render() {
    const { gameStore } = this.props;
    if (!gameStore) {
      return;
    }
    const { timeLeft, odds, status, ofterNumbers, activeBets } = gameStore;

    const mappedBets = (activeBets as FortunaBet[]).map((bet) => {
      // TODO: do via types/interface
      const { betData, oddData } = bet;

      return {
        groupId: oddData!.groupId,
        body: betData.body,
      };
    });

    const mappedBetsGrouped = groupBy(mappedBets, 'groupId');
    const bodies = mappedBets.map((bet) => bet.body);

    let text = '';
    switch (status) {
      case GameStatus.OPEN:
        text = i18n.t('bets_allowed');
        break;
      case GameStatus.CLOSED:
        text = i18n.t('bets_taken');
        break;
      case GameStatus.STARTED:
        text = i18n.t('is_playing_now');
        break;
      case GameStatus.FINISHED:
        text = i18n.t('round_finished_and_results_processing');
        break;
      default:
        break;
    }

    return (
      <div className="fortuna__panel">
        <div className="fortuna__panel-left">
          <div className="fortuna__title">
            {text} {formatTime(timeLeft)}
          </div>

          {mappedBets.length ? (
            <div className="fortuna__your-bets">
              <div className="fortuna__your-bets-title">{i18n.t('fortuna_your_bets')}</div>

              {odds.map(
                (group) =>
                  mappedBetsGrouped[group.groupId] && (
                    <div key={group.code}>
                      <div className="fortuna__your-bets-group">{group.title}</div>
                      <div className="fortuna__your-bets-body">
                        {group.items.map((item) => {
                          if (!item.oddData || !bodies.includes(item.oddData.body)) {
                            return '';
                          }

                          if (item.oddData.groupId === 1) {
                            return (
                              <div
                                key={item.key}
                                className="fortuna__number"
                                data-number={item.oddData.body}
                              />
                            );
                          }
                          return (
                            <div key={item.key} className="fortuna__your-bets-bet-text">
                              {item.title}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ),
              )}
            </div>
          ) : (
            ''
          )}

          <div className="fortuna__popular-numbers">
            <div className="fortuna__popular-numbers-title">
              {i18n.t('fortuna_lucky_number_by_last_rounds')}
            </div>

            <div className="fortuna__popular-numbers-body">
              {ofterNumbers.map((ofterNumber) => (
                <div key={ofterNumber} className="fortuna__number" data-number={ofterNumber} />
              ))}
            </div>
          </div>
        </div>
        <div className="fortuna__panel-right">
          <FortunaCircle />
        </div>
      </div>
    );
  }
}
