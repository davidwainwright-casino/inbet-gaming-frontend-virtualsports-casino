import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { GameStatus, IGameStateBase } from '../models';
import i18n from '../locales/i18n';
import { Timer } from '.';

@inject('gameStore')
@observer
export class VideoTimer extends React.Component<{ gameStore: IGameStateBase }> {
  public render() {
    const { status } = this.props.gameStore;
    let text = '';
    switch (status) {
      case GameStatus.OPEN:
        text = i18n.t('bets_allowed');
        break;
      case GameStatus.CLOSED:
        text = i18n.t('bets_taken');
        break;
      case GameStatus.STARTED:
        text = i18n.t('begin_yet');
        break;
      case GameStatus.FINISHED:
        text = i18n.t('round_finished_and_results_processing');
        break;
      default:
        break;
    }
    return (
      <div className="video-timer">
        <div className="video-timer__title">
          <div className="video-timer__title-body">{text}</div>
        </div>
        <div className="video-timer__value">
          <Timer />
        </div>
      </div>
    );
  }
}
