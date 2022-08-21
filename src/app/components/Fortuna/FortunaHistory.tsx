
import cn from 'classnames';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { IFortunaState } from '../../models';
import { Panel } from './../';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FortunaHistoryItem } from './FortunaHistoryItem';
import i18n from '../../locales/i18n';

interface IFortunaHistoryProps {
  gameStore?: IFortunaState,
  title?: string;
}

interface IFortunaHistoryState {
  slideIndex: number;
  height: number;
}

@inject('gameStore')
@observer
export class FortunaHistory extends React.Component<IFortunaHistoryProps, IFortunaHistoryState> {
  public state = {
    height: 0,
    slideIndex: 0,
  }

  public slider?: Slider;

  public renderItems(page = 0) {
    const { gameStore } = this.props;
    if(!gameStore) { return; }
    const history = gameStore.history;
    if(!history) { return; }
    
    const items = page === 0 ? history.slice(0,10) : history.slice(10, 20);

    return items.map((item) => 
      <FortunaHistoryItem key={item.round} round={item.round} ball={item.ball} />);
  }

  public setPage = (slideIndex: number) => () => {
    this.setState({slideIndex});
    if(this.slider) this.slider.slickGoTo(slideIndex);
  }

  public afterChange = (slideIndex: number) => this.setState({slideIndex})

  public render() {
    const { title } = this.props;
    const { slideIndex } = this.state;

    const settings = {
      afterChange: this.afterChange,
      arrows: false,
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
    };

    return (
      <Panel 
          className="history__panel" 
          bodyClassName='history__panel-body' 
          title={title} 
          initialCollapsed={false} 
          collapsible={true}>
        <div className="fortuna__history">
          <div className="fortuna__history-header">
            <div className="fortuna__history-title">{i18n.t('fortuna_history_round')}</div>
            <div className="fortuna__history-title">{i18n.t('fortuna_history_hit')}</div>
            {/* <div className="penality__history-title">{i18n.t('fortuna_history_sector_statistics')}</div> */}
          </div>
          <div>
            <Slider ref={ref => (ref && (this.slider = ref))} {...settings} >
              <div className="fortuna__history-content">
                {this.renderItems(0)}
              </div>
              <div className="fortuna__history-content">
                {this.renderItems(1)}
              </div>
            </Slider>
          </div>
          <div className="history__controls">
            <div className={cn("history__controls-item", { ['active']: slideIndex === 0 })} onClick={this.setPage(0)} />
            <div className={cn("history__controls-item", { ['active']: slideIndex === 1 })} onClick={this.setPage(1)} />
          </div>
        </div>
      </Panel>
    );
  }
}
