import cn from 'classnames';
import * as React from 'react';
import { BetListItem } from './';

interface IBetListProps {
  title: string;
  children: Array<React.ReactElement<BetListItem>>;
  fullWidth?: boolean;
}
interface IBetListState {
  collapsed: boolean;
}

export class BetList extends React.Component<IBetListProps, IBetListState> {
  public state = {
    collapsed: false,
  };

  public onCollapseClick = () => {
    this.setState((last: IBetListState) => ({
      collapsed: !last.collapsed,
    }));
  };
  public render() {
    const { title, children, fullWidth } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="bet-list">
        <div className="bet-list__header">
          <div className="bet-list__header-title">
            {title}
            <span
              className={cn('bet-list__collapse__button', 'font', {
                [collapsed ? 'font--arrow-down' : 'font--arrow-up']: true,
              })}
              onClick={this.onCollapseClick}
            />
          </div>
        </div>
        {!collapsed && (
          <div
            className={cn('bet-list__content', {
              ['bet-list__content_full-width']: fullWidth,
            })}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
}
