import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { GameStore } from '../stores';
import { VideoTimer } from './';
import { GameStatus, IGameStateBase } from '../models';
// import { trace } from "mobx"

interface IVideoProps {
  game?: GameStore;
  gameStore?: IGameStateBase;
  minFastForwardTime?: number;
}

interface IVideoState {
  showTimer: boolean;
  showPlayButton: boolean;
}

const getVideoInstance = () => {
  const videoEl = document.createElement('video');
  videoEl.className = 'player-video';
  videoEl.defaultMuted = true;
  videoEl.muted = true;
  videoEl.setAttribute('playsinline', 'playsinline');
  videoEl.autoplay = true;

  return videoEl;
};

@inject('game', 'gameStore')
@observer
export class Video extends React.Component<IVideoProps, IVideoState> {
  public state = {
    showTimer: false,
    showPlayButton: false,
  };

  private mounted: boolean = false;

  private video?: HTMLVideoElement;
  private cnt?: HTMLSpanElement;
  private lastSrc?: string;

  public createVideo = () => {
    if (!this.video) {
      // const sourceMP4 = document.createElement("source");
      // sourceMP4.type = "video/mp4";
      // sourceMP4.src = video;
      // this.video.appendChild(sourceMP4);

      this.video = getVideoInstance();
    }
  };

  public componentDidMount() {
    // TODO: async cancellable
    this.mounted = true;
    this.createVideo();
    this.bindVideo();

    this.update();
  }

  public componentDidUpdate() {
    this.update();
  }

  public componentWillUnmount() {
    this.mounted = false;
    this.unbindVideo();
  }

  public appendEl = () => {
    if (!this.cnt || this.cnt.childNodes[0] || !this.video) {
      return;
    }

    this.cnt.appendChild(this.video);
  };

  public update = () => {
    this.appendEl();

    const { gameStore, minFastForwardTime } = this.props;
    const { showTimer } = this.state;
    const video = this.video;

    if (!video || !gameStore) {
      return;
    }

    const { video: url, status, timeRight } = gameStore;

    if (url) {
      if (url !== this.lastSrc) {
        this.lastSrc = url;
        video.src = url;
        // console.log(gameStore.source, status === GameStatus.STARTED);

        const promise = video.play();

        if (promise !== undefined) {
          promise.catch((error) => {
            if (this.mounted && !this.state.showPlayButton) {
              this.showPlayIcon();
            }
          });
        }
      }

      const time = timeRight ? timeRight : 0;
      const minDiff = minFastForwardTime || 0;
      if (video.duration && time !== video.currentTime && time - video.currentTime > minDiff) {
        video.currentTime = time;
        // console.log(gameStore.source, {cirrentTime: video.currentTime});
      }
    } else if (this.lastSrc !== 'about:blank') {
      this.lastSrc = 'about:blank';
      video.src = '';
    }
    // debugger;
    if (showTimer || status !== GameStatus.STARTED) {
      video.classList.add('player-video-ended');
      //  console.log(gameStore.source, 'pause', showTimer)
      video.pause();
    } else {
      video.classList.remove('player-video-ended');
    }
  };

  public showPlayIcon = () => {
    this.setState({ showPlayButton: true });
  };

  public handlePlay = () => {
    this.setState({ showPlayButton: false });

    this.update();
  };

  public bindVideo = () => {
    document.addEventListener('visibilitychange', this.onDocumentVisible);

    if (this.video) {
      // document.body.addEventListener('click', ()=>{ this.video.play() });
      // this.video.addEventListener('canplay', this.handleCanPlay);
      this.video.addEventListener('play', this.handlePlay);
      // this.video.addEventListener('canplaythrough', this.canPlayThrough);
      this.video.addEventListener('loadstart', this.handleOnLoadStart);
      this.video.addEventListener('loadeddata', this.handleOnLoadedmetadata);
      this.video.addEventListener('loadedmetadata', this.handleOnLoadedmetadata);
      this.video.addEventListener('ended', this.handleOnEnded);
    }
  };

  public unbindVideo = () => {
    document.removeEventListener('visibilitychange', this.onDocumentVisible);

    // if(this.needStartTimer) { clearTimeout(this.needStartTimer); }

    if (this.video) {
      // this.video.removeEventListener('canplay', this.handleCanPlay);
      this.video.removeEventListener('play', this.handlePlay);
      this.video.removeEventListener('loadstart', this.handleOnLoadStart);
      this.video.removeEventListener('loadeddata', this.handleOnLoadedmetadata);
      this.video.removeEventListener('loadedmetadata', this.handleOnLoadedmetadata);
      this.video.removeEventListener('ended', this.handleOnEnded);
      delete this.video;
    }
  };

  // public handleCanPlay = () => {
  //   console.log('handleCanPlay')
  // }

  public onDocumentVisible = () => {
    if (document.hidden) {
      return;
    }

    this.update();
  };

  public handleOnLoadStart = () => {
    this.setState({ showTimer: false });
  };

  public handleOnLoadedmetadata = () => {
    const { gameStore } = this.props;
    // console.log('handleOnLoadedmetadata');

    if (gameStore && this.video) {
      gameStore.setVideoDuration(this.video.duration);

      // console.log(gameStore.source, gameStore.videoDuration (gameStore.timeLeft ? (gameStore.timeTotal - gameStore.timeLeft) : 0))
    }

    this.update();
  };

  public handleOnEnded = () => {
    this.setState({ showTimer: true });

    if (this.video) {
      this.video.pause();
    }
  };

  public doPlay = () => {
    if (this.video) {
      this.video.play();
    }
  };

  public render() {
    const { gameStore } = this.props;
    if (!gameStore) {
      return null;
    }

    const { status } = gameStore;
    const { showPlayButton } = this.state;

    return [GameStatus.STARTED, GameStatus.FINISHED].includes(status) ? (
      <div className={'panel--video player'}>
        <span ref={(ref) => ref && (this.cnt = ref)} />
        {showPlayButton && status === GameStatus.STARTED && (
          <div className="player-play-button" onClick={this.doPlay} />
        )}
        {status !== GameStatus.STARTED && <VideoTimer gameStore={gameStore} />}
      </div>
    ) : null;
  }
}
