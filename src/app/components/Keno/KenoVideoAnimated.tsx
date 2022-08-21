import cn from 'classnames';
import React from 'react';
import anime from 'animejs';
import { KenoBall } from './';
import { inject, observer } from 'mobx-react';
import { IKenoState } from '../../models/keno/IKenoState';
import { GameStatus } from '../../models';

interface IKenoVideoProps {
  status: GameStatus;
  hidden: boolean;
  gameStore?: IKenoState;
  currentTime: number;
  duration: number;
}

@inject('gameStore')
// @observer
export class KenoVideoAnimated extends React.Component<IKenoVideoProps, {}> {
  private ballEls: HTMLDivElement[] = Array(20);
  private ballNumberEls: HTMLDivElement[] = Array(20);
  private ballAnime: anime.AnimeInstance[] = [];
  private ballNumberAnime: anime.AnimeInstance[] = [];

  public componentDidMount() {
    document.addEventListener('visibilitychange', this.onDocumentVisible);
    // (window as any).an = () => this.runEachAnime((a) => a.restart());
    this.start();
  }

  public componentDidUpdate(prevProps: IKenoVideoProps) {
    if (prevProps.status !== GameStatus.STARTED) {
      this.start();
    }
  }

  public componentWillUnmount() {
    document.removeEventListener('visibilitychange', this.onDocumentVisible);

    this.runEachAnime((a) => a.pause());
  }

  public onDocumentVisible = () => {
    if (document.hidden) {
      return;
    }

    this.start();
  };

  public runEachAnime = (fn: (a: anime.AnimeInstance, n: number) => void) => {
    this.ballAnime.map(fn);
    this.ballNumberAnime.map(fn);
  };

  public start() {
    const status = this.props.status;
    const { currentTime } = this.props;
    // console.log('start', { status });

    if (status === GameStatus.FINISHED) {
      this.runEachAnime((a) => (a.seek(a.duration), a.pause()));

      return;
    }

    if (status !== GameStatus.STARTED) {
      this.runEachAnime((a) => (a.pause(), ((a as any).completed = false)));

      return;
    }

    // console.log({ currentTime }, this.anime.map((a) => a.currentTime / 1000));

    if (currentTime) {
      this.runEachAnime((a, n) => {
        // if (n == 0)
        //   console.log(n, {
        //     current: currentTime,
        //     anCurrent: a.currentTime / 1000,
        //     delay: a.delay / 1000,
        //     duration: a.duration / 1000,
        //     dv: currentTime - a.currentTime / 1000,
        //     ccc: (a.currentTime - a.duration + a.delay) / 1000,
        //   });

        a.pause();
        // if (Math.abs(currentTime - a.currentTime / 1000) > 4) {
        a.seek(currentTime * 1000);
        // }

        a.play();
      });
    } else {
      console.log('else');
      this.runEachAnime((a) => a.play());
    }
  }

  getAnimSettings = (el: HTMLDivElement, isNumber: boolean, i: number) => ({
    targets: el,
    autoplay: true,
    delay: (19 - i) * (this.props.duration - 10) * 1000 * 0.05 + 2000,
    duration: 8000,
    easing: 'easeOutQuad',
    ...(!isNumber
      ? {
          translateX: ['-2500%', '0%'],
          complete: () => {
            this.props.gameStore!.outedIndexes.push(i);
          },
        }
      : {
          rotateZ: [`-2000deg`, '0deg'],
        }),
  });

  public setRef = (i: number) => (el: HTMLDivElement) => {
    if (this.ballEls[i] !== el) {
      this.ballEls[i] = el;
      this.ballAnime[i] = anime(this.getAnimSettings(el, false, i));
    }
  };
  public setRefNumber = (i: number) => (el: HTMLDivElement) => {
    if (this.ballNumberEls[i] !== el) {
      this.ballNumberEls[i] = el;
      this.ballNumberAnime[i] = anime(this.getAnimSettings(el, true, i));
    }
  };

  public render() {
    const { hidden } = this.props;
    // console.log('render');

    return (
      // <div className={cn('keno__video', { keno__video_hidden: false })}>
      <div className={cn('keno__video', { keno__video_hidden: hidden })}>
        {Array(20)
          .fill(null)
          .map((v, i) => (
            <KenoBall
              key={i}
              index={i}
              setRef={this.setRef(i)}
              setRefNumber={this.setRefNumber(i)}
            />
          ))}
      </div>
    );
  }
}
