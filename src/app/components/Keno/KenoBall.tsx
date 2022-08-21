import React from 'react';
import { compose } from 'recompose';
import { inject, observer } from 'mobx-react';
import { IKenoState } from '../../models';

interface IKenoBallOutProps {
  index: number;
  setRef: (el: HTMLDivElement) => void;
  setRefNumber: (el: HTMLDivElement) => void;
}

interface IKenoBallProps extends IKenoBallOutProps {
  gameStore?: IKenoState;
}

export const KenoBall = compose<IKenoBallProps, IKenoBallOutProps>(
  inject('gameStore'),
  observer,
)(({ index, gameStore, setRef, setRefNumber }: IKenoBallProps) => (
  <div className="keno__video-ball-wrap">
    <div ref={(ref) => ref && setRef(ref)} className="keno__video-ball">
      <div ref={(ref) => ref && setRefNumber(ref)} className="keno__video-ball-number">
        {gameStore!.winNumbers[index]}
      </div>
    </div>
  </div>
));
