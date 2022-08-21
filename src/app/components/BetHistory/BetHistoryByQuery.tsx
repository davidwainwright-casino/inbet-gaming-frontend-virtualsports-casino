import * as React from 'react';
import { BetHistoryPopup } from './BetHistoryPopup';
import { BetHistoryWindow } from './BetHistoryWindow';

interface IBetHistoryByQueryProps {
  historyButton?: HTMLAnchorElement;
}
interface IBetHistoryByQueryState {
  useWindow: boolean;
}

export class BetHistoryByQuery extends React.Component<
  IBetHistoryByQueryProps,
  IBetHistoryByQueryState
> {
  private mql: MediaQueryList = window.matchMedia('(min-width: 1024px)');

  public componentWillMount() {
    this.mql.addListener(this.mediaQueryChanged);
    this.mediaQueryChanged();
  }

  public componentWillUnmount() {
    this.mql.removeListener(this.mediaQueryChanged);
  }

  public mediaQueryChanged = () => {
    this.setState({ useWindow: !this.mql.matches });
  };

  public render() {
    const { useWindow } = this.state;

    return useWindow ? (
      <BetHistoryWindow />
    ) : (
      <BetHistoryPopup historyButton={this.props.historyButton} />
    );
  }
}
