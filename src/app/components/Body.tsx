import * as React from 'react';

export class Body extends React.Component {
  public render() {
    const { children } = this.props;
    return <div className="wrapper">{children}</div>;
  }
}
