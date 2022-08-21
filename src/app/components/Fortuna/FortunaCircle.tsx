import cn from 'classnames';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { FortunaCircleAnimated } from './';
import { GameStatus, IFortunaState } from './../../models';

interface IFortunaCircleProps {
  gameStore?: IFortunaState;
  currentTime?: number;
}

const PI = Math.PI;

@inject('gameStore')
@observer
export class FortunaCircle extends React.Component<IFortunaCircleProps, {}> {
  public state = {
    ball: 0,
  };
  public onNumberHover = (ball: number) => {
    this.setState({ ball });
  };

  public render() {
    const { gameStore } = this.props;
    if (!gameStore) {
      return;
    }
    const {
      ball,
      timeLeft,
      timeRight,
      timeToStatusStarted,
      timeTotal,
      status,
      videoDuration,
    } = gameStore;

    const { ball: hoverBall } = this.state;

    let percentLeft = 0;

    const pieMainCls = 'fortuna__circle-center-pie';
    const pieCls = {
      [pieMainCls]: true,
      [pieMainCls + '_open']: status === GameStatus.OPEN,
      [pieMainCls + '_closed']: status === GameStatus.CLOSED,
      [pieMainCls + '_started']: status === GameStatus.STARTED,
      [pieMainCls + '_finished']: status === GameStatus.FINISHED,
    };

    switch (status) {
      case GameStatus.OPEN:
      case GameStatus.CLOSED:
        percentLeft = 100 - ((timeTotal - (timeLeft || 0)) / timeTotal) * 100;
        break;
      case GameStatus.STARTED:
        percentLeft =
          100 -
          ((videoDuration - ((timeLeft ? timeLeft : timeToStatusStarted) - timeToStatusStarted)) /
            videoDuration) *
            100;
        break;
      case GameStatus.FINISHED:
        percentLeft = 100 - ((timeToStatusStarted - (timeLeft || 0)) / timeToStatusStarted) * 100;
        // console.log({ percentLeft, ball, timeLeft, timeRight, timeToStatusStarted, timeTotal, status, videoDuration, min: (timeLeft||0 - timeToStatusStarted) })

        break;
      default:
        break;
    }

    const angle = (360 * percentLeft) / 100;
    const r = (((angle === 360 ? 359 : angle) % 360) * PI) / 180;
    const x = Math.sin(r) * 125;
    const y = Math.cos(r) * -125;
    const mid = angle > 180 ? 1 : 0;
    const svgPath = `M 0 0 v -125 A 125 125 1 ${mid} 1 ${x} ${y} z`;

    return (
      <div className="fortuna__circle">
        <div className="fortuna__circle-arrow" />
        <div className="fortuna__circle-wrap">
          <FortunaCircleAnimated
            videoDuration={videoDuration}
            onNumberHover={this.onNumberHover}
            currentTime={timeRight}
            ball={ball}
            started={status === GameStatus.STARTED}
          />
          <div className="fortuna__circle-center">
            <div className="fortuna__circle-center-back">
              {[
                GameStatus.CLOSED,
                GameStatus.OPEN,
                GameStatus.STARTED,
                GameStatus.FINISHED,
              ].includes(status) && (
                <svg className={cn(pieCls)} width="250" height="250" viewBox="0 0 250 250">
                  <path transform="translate(125, 125) scale(.84)" d={svgPath} />
                </svg>
              )}
              <div className="fortuna__circle-center-top">
                <div className="fortuna__circle-center-number">{hoverBall}</div>
              </div>
            </div>
          </div>
        </div>

        {/* {currentTime} */}
      </div>
    );
  }
}
