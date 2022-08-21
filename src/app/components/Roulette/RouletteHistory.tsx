import cn from 'classnames';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { IRouletteState } from '../../models';
import { Panel } from './../';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RouletteHistoryItem } from './RouletteHistoryItem';
import i18n from '../../locales/i18n';

interface IRouletteHistoryProps {
  gameStore?: IRouletteState;
  title?: string;
}

interface IRouletteHistoryState {
  slideIndex: number;
  height: number;
}

@inject('gameStore')
@observer
export class RouletteHistory extends React.Component<IRouletteHistoryProps, IRouletteHistoryState> {
  public state = {
    height: 0,
    slideIndex: 0,
  };

  public slider?: Slider;

  public renderItems(page = 0) {
    const { gameStore } = this.props;
    if (!gameStore) {
      return;
    }
    const { history, stats } = gameStore;
    if (!history) {
      return;
    }

    const items = page === 0 ? history.slice(0, 8) : history.slice(8);

    return items.map((item, idx: number) => (
      <RouletteHistoryItem
        key={idx}
        round={item.round}
        wincombo={item.wincombo}
        stat={stats && item.wincombo ? stats[item.wincombo == 37 ? 0 : item.wincombo] : 0}
      />
    ));
  }

  public setPage = (slideIndex: number) => () => {
    this.setState({ slideIndex });
    if (this.slider) {
      this.slider.slickGoTo(slideIndex);
    }
  };

  public afterChange = (slideIndex: number) => this.setState({ slideIndex });

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
        bodyClassName="history__panel-body"
        title={title}
        initialCollapsed={false}
        collapsible={true}
      >
        <div className="roulette__history">
          <div className="roulette__history-header">
            <div className="roulette__history-title">{i18n.t('roulette_history_round')}</div>
            <div className="roulette__history-title roulette__history-title-number">
              {i18n.t('roulette_history_hit')}
            </div>
            <div className="roulette__history-title">
              {i18n.t('roulette_history_sector_statistics')}
            </div>
          </div>
          <div>
            <Slider ref={(ref) => ref && (this.slider = ref)} {...settings}>
              <div className="roulette__history-content">{this.renderItems(0)}</div>
              <div className="roulette__history-content">{this.renderItems(1)}</div>
            </Slider>
          </div>
          <div className="history__controls">
            <div
              className={cn('history__controls-item', { ['active']: slideIndex === 0 })}
              onClick={this.setPage(0)}
            />
            <div
              className={cn('history__controls-item', { ['active']: slideIndex === 1 })}
              onClick={this.setPage(1)}
            />
          </div>
        </div>
      </Panel>
    );
  }
}

export default RouletteHistory;
