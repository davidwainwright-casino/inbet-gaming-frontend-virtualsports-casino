import cn from 'classnames';
// import { compose } from 'recompose';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Panel } from './../';
import { IKenoState, GameStatus } from '../../models';
// import { trace } from 'mobx';

interface IKenoPanelProps {
  title?: string;
}

interface InjectedProps {
  gameStore: IKenoState;
}

@inject('gameStore')
@observer
export class KenoPanel extends React.Component<IKenoPanelProps, { value: number }> {
  public state = {
    value: 0,
  };

  get injected() {
    return this.props as InjectedProps;
  }

  public toggleNumber = (num: number) => () => {
    const { gameStore } = this.injected;
    const { toggle } = gameStore;

    toggle(num);
  };

  public renderNum = (num: number) => {
    const { gameStore } = this.injected;
    const { selected, status, usedNumbers, outedNumbers } = gameStore;

    const inGame = [GameStatus.STARTED, GameStatus.FINISHED].includes(status);

    const cls = {
      ['keno__table__item_gray']: usedNumbers.includes(num),
      ['keno__table__item_selected']: selected.includes(num),
      ['keno__table__item_blue']: inGame && outedNumbers.includes(num),
      ['keno__table__item_green']:
        inGame && outedNumbers.includes(num) && usedNumbers.includes(num),
    };

    return (
      <div className={cn('keno__table__item', cls)} key={num} onClick={this.toggleNumber(num)}>
        <span>{num}</span>
      </div>
    );
  };

  public render() {
    const { title } = this.props;

    // trace(false);

    const numbers: number[] = [];
    for (let i = 1; i <= 80; i++) {
      numbers.push(i);
    }

    return (
      <Panel className="panel--keno" title={title} collapsed={false} collapsible={true}>
        <div className="keno__table">{numbers.map((num) => this.renderNum(num))}</div>
      </Panel>
    );
  }
}

// export const KenoPanel = compose<IInjectProps, IKenoPanelProps>(
//   observer,
//   inject<IInjectProps>((store) => {
//     return {
//       gameStore: store.keno99911,
//       game: store,
//   }})
// )(KenoPanelClass);
