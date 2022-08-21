import cn from 'classnames';
import * as React from 'react';

interface IRightButton {
  active: boolean;
  id: string | number;
  text: string;
}

interface IPanelProps {
  title?: React.ReactNode;
  height?: number;
  collapsible?: boolean;
  collapsed?: boolean;
  initialCollapsed?: boolean;
  className?: string;
  bodyClassName?: string;
  rightLabel?: string;
  headClassName?: string;
  rightButtons?: IRightButton[];
  onCollapseClick?: () => void;
  renderRight?: () => React.ReactNode;
}

interface IPanelState {
  collapsed: boolean;
}

export class Panel extends React.Component<IPanelProps, IPanelState> {
  public state = {
    collapsed: this.props.initialCollapsed !== undefined ? this.props.initialCollapsed : false,
  };

  public onCollapseClick = () => {
    const { collapsed, onCollapseClick } = this.props;
    if (collapsed !== undefined && onCollapseClick) {
      onCollapseClick();
    } else {
      this.setState((last: IPanelState) => ({
        collapsed: !last.collapsed,
      }));
    }
  };

  public isCollapsed = () => {
    const { collapsed: collapsedState } = this.state;
    const { collapsed: collapsedProp } = this.props;

    return collapsedProp !== undefined ? collapsedProp : collapsedState;
  };

  public renderTitle = () => {
    const { title, collapsible, renderRight, headClassName, rightLabel, rightButtons } = this.props;
    const collapsed = this.isCollapsed();
    return (
      <div className={cn('panel__head', headClassName)}>
        <span className="panel__head-title">{title}</span>
        {rightLabel && <div className="panel__head-right-label">{rightLabel}</div>}
        {rightButtons && (
          <ul className="panel__head-right-buttons">
            {rightButtons.map((rightButton) => (
              <li key={rightButton.id} className={cn({ ['active']: rightButton.active })}>
                {rightButton.text}
              </li>
            ))}
          </ul>
        )}
        {collapsible && (
          <div
            onClick={this.onCollapseClick}
            className={cn('panel__head-button', 'font', {
              [collapsed ? 'font--arrow-down' : 'font--arrow-up']: true,
            })}
          />
        )}
        {renderRight && renderRight()}
      </div>
    );
  };

  public render() {
    const { children, title, height, className, bodyClassName } = this.props;
    const collapsed = this.isCollapsed();

    return (
      <div className={cn('panel', className)} style={{ height }}>
        {title && this.renderTitle()}
        {!collapsed && <div className={cn('panel__body', bodyClassName)}>{children}</div>}
      </div>
    );
  }
}
