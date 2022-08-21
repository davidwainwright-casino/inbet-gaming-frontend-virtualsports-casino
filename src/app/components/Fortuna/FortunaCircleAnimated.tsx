import React from 'react';
// import { observer } from 'mobx-react';
import anime from 'animejs';
import keys from 'lodash/keys';
import values from 'lodash/values';

interface IFortunaCircleAnimatedProps {
  started: boolean;
  currentTime?: number;
  videoDuration: number;
  ball?: number;
  onNumberHover?: (ball: number) => void;
}

type AnimeCallbackFunction = (anim: anime.AnimeInstance) => void;

// const sectorDeg = 360 / 18;

const ballsAngles: { [index: number]: number } = {
  6: 0,
  17: 18,
  10: 38,
  3: 56,
  14: 75,
  7: 94,
  18: 112,
  11: 132,
  4: 150,
  15: 170,
  8: 190,
  1: 208,
  0: 227,
  12: 247,
  5: 265,
  16: 284,
  9: 303,
  2: 322,
  13: 342,
};

const valuesMap = values(ballsAngles);
const keysMap = (keys(ballsAngles) as any) as number[];

// @observer
export class FortunaCircleAnimated extends React.Component<IFortunaCircleAnimatedProps, {}> {
  private cnt?: HTMLDivElement;
  private anime?: anime.AnimeTimelineInstance;
  // private timeline?: anime.AnimeTimelineInstance;
  // private currentBall: number = 6;

  public componentDidMount() {
    document.addEventListener('visibilitychange', this.onDocumentVisible);
    this.initAnime();
  }

  public componentDidUpdate() {
    this.initAnime();
  }

  public componentWillUnmount() {
    document.removeEventListener('visibilitychange', this.onDocumentVisible);

    if (this.anime) {
      this.anime.pause();
    }
  }

  public onDocumentVisible = () => {
    if (document.hidden) {
      return;
    }

    this.initAnime();
  };

  public initAnime() {
    const { videoDuration, currentTime } = this.props;
    const currentBall = this.props.ball !== undefined ? this.props.ball : 0;

    if (!this.cnt) {
      return;
    }

    let an = this.anime;

    const clearAngle = ballsAngles[currentBall];
    const angle = 360 * Math.round(videoDuration / 3) + clearAngle;

    // console.log({angle, clearAngle})

    if (an) {
      // console.log(an.currentTime, currentTime ? currentTime * 1000 : null)
      an.pause();
      // (an as any).reset();
    }
    anime.remove(this.cnt);

    an = this.anime = anime.timeline({
      autoplay: false,
      update: this.fromAnimationUpdate as any,
    });
    // console.log(videoDuration);
    an.add({
      targets: this.cnt,
      duration: videoDuration * 1000,
      easing: [0.34, 0.01, 0.17, 1], // [.54,.95,.84,.98],// // [.18,.54,.06,.99],// "easeOutExpo",
      rotateZ: angle,
    });

    an.add({
      targets: this.cnt,
      duration: 1,
      rotateZ: clearAngle,
    });

    const { started } = this.props;
    // if(started) {
    //   an.restart();
    // }

    if (currentTime) {
      an.pause();

      if (started) {
        an.seek(currentTime * 1000);
        an.play();
      } else {
        an.seek(an.duration);
      }
    } else if (started) {
      an.play();
    }

    // (window as any).an = an;
  }

  public fromAnimationUpdate = (data: AnimeCallbackFunction) => {
    const { onNumberHover } = this.props;
    const an = this.anime as any; // Mistakes in lib d.ts

    if (!an.children[0] || !an.children[0].animations[0]) {
      return;
    }

    const animation = an.children[0].animations[0];

    if (onNumberHover) {
      const deg = parseInt(animation.currentValue, 10) % 360;

      const closest = valuesMap.reduce((prev: number, curr: number) =>
        Math.abs(curr - deg) < Math.abs(prev - deg) ? curr : prev,
      );

      const currentNumber = keysMap[valuesMap.indexOf(closest)];
      onNumberHover(currentNumber);
    }
  };

  public shouldComponentUpdate(nextProps: IFortunaCircleAnimatedProps) {
    return nextProps.ball !== this.props.ball || nextProps.started !== this.props.started;
  }

  public render() {
    return <div ref={(ref) => ref && (this.cnt = ref)} className="fortuna__circle-bg" />;
  }
}
