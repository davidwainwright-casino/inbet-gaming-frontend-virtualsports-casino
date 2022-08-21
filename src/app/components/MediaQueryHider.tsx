import React from 'react';

export class MediaQueryHider extends React.Component<{ query: string }, { hidden: boolean }> {
  public state = {
    hidden: true,
  };

  private mql?: MediaQueryList;

  public componentWillMount() {
    this.mql = window.matchMedia(this.props.query);
    this.mql.addListener(this.mediaQueryChanged);
    this.mediaQueryChanged();
  }

  public componentWillUnmount() {
    if (this.mql) this.mql.removeListener(this.mediaQueryChanged);
  }

  public mediaQueryChanged = () => {
    // console.log(this.props.query, this.mql.matches);
    if (this.mql) {
      this.setState({ hidden: !this.mql.matches });
    }
  };

  public render() {
    const { children } = this.props;
    return this.state.hidden ? null : children;
  }
}
