import cn from 'classnames';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { IRaceState } from '../models';
import { HistoryItem, Panel } from './';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import i18n from '../locales/i18n';

interface IHistoryProps {
  gameStore?: IRaceState;
  title?: string;
}

interface IHistoryState {
  slideIndex: number;
  height: number;
}

@inject('gameStore')
@observer
export class History extends React.Component<IHistoryProps, IHistoryState> {
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
    const history = gameStore.history;
    if (!history) {
      return;
    }

    const items = page === 0 ? history.slice(0, 10) : history.slice(10);

    return items.map((
      item, // TODO: fix types
    ) => (
      <HistoryItem key={Number(item.round)} round={Number(item.round)} winners={item.winners!} />
    ));
  }

  public setPage = (slideIndex: number) => () => {
    this.setState({ slideIndex });
    if (this.slider) this.slider.slickGoTo(slideIndex);
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
        <div className="history history_racing">
          <div className="history__header history__header_nums">
            <div className="history__header-title">{i18n.t('race')}</div>
            <div className="history__header-title-nums">
              <div className="history__header-title history__header-title_num">1</div>
              <div className="history__header-title history__header-title_num">2</div>
              <div className="history__header-title history__header-title_num">3</div>
            </div>
          </div>
          <div>
            <Slider ref={(slider) => slider && (this.slider = slider)} {...settings}>
              <div className="history__content">{this.renderItems(0)}</div>
              <div className="history__content">{this.renderItems(1)}</div>
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
