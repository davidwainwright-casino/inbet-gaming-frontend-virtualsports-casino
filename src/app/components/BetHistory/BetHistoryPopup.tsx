// import cn from 'classnames';
import { Popper } from 'react-popper';
import { ReferenceObject } from 'popper.js';
import * as React from 'react';
import { Panel } from './../';
import List from './List';
import * as ReactDOM from 'react-dom';
import { inject } from 'mobx-react';
import { GameStore } from '../../stores';
import i18n from '../../locales/i18n';

interface IBetHistoryPopupProps {
  historyButton?: HTMLAnchorElement;
  game?: GameStore;
}

@inject('game')
export class BetHistoryPopup extends React.Component<IBetHistoryPopupProps, {}> {
  private popupEl?: HTMLDivElement;

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  public handleClickOutside = (event: any) => {
    const { historyButton } = this.props;
    if (
      this.popupEl &&
      !this.popupEl.contains(event.target) &&
      (historyButton && !historyButton.contains(event.target))
    ) {
      const { game } = this.props;
      if (game) {
        game.toggleHistoryVisibility();
      }
    }
  };

  public render() {
    const { historyButton } = this.props;
    const rootEl = document.querySelector('#root');
    if (!rootEl) {
      return;
    }

    return ReactDOM.createPortal(
      <Popper
        placement="bottom-end"
        modifiers={{ flip: { enabled: false } }}
        referenceElement={historyButton ? (historyButton as ReferenceObject) : undefined}
      >
        {({ placement, ref, style }) => (
          <div
            className="bet-history__popup"
            ref={(node) => {
              ref(node);
              if (node) {
                this.popupEl = node;
              }
            }}
            style={{ ...style }}
            data-placement={placement}
          >
            <Panel
              className="bet-history bet-history__panel"
              bodyClassName="bet-history__panel-body"
              title={i18n.t('bets_history')}
              collapsed={false}
              collapsible={false}
            >
              <List multiColumn={false} />
            </Panel>
          </div>
        )}
      </Popper>,
      rootEl,
    );
  }
}
