import cn from 'classnames';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Panel } from './../';
import { IKenoState } from '../../models';

interface IKenoHistoryProps {
  gameStore?: IKenoState,
  title?: string;
}

@inject('gameStore')
@observer
export class KenoHistory extends React.Component<IKenoHistoryProps, {}> {
  public render() {
    const { title, gameStore } = this.props;
    if(!gameStore) { return; }
    const { history } = gameStore;
    
    return (
      <Panel className="history__panel keno__history" title={title} collapsible={true} initialCollapsed={false} >
        {
          history.length && (
            <>
              {
                history.slice(0, 3).map(historyItem => (
                  <React.Fragment key={historyItem.round ? historyItem.round.toString() : ''}>
                    <div className="keno__history__group-title">№ {historyItem.round}</div>
                    {
                        historyItem.wincombo && (
                          <>
                            <div className="keno__history__group-list">
                              {
                                historyItem.wincombo.slice(0, 10).map(num => 
                                  <div className={cn("keno__history__group-list__item")} key={num}>{num}</div>
                                )
                              }
                            </div>
                            <div className="keno__history__group-list">
                              {
                                historyItem.wincombo.slice(10).map(num => 
                                  <div className={cn("keno__history__group-list__item")} key={num}>{num}</div>
                                )
                              }
                            </div>
                          </>
                        )
                    }
                  </React.Fragment>
                ))
              }
            </>
          )
        }
      </Panel>
    );
  }
}
