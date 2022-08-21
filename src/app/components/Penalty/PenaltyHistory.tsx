import cn from 'classnames';
import * as React from 'react';
import { Panel } from '..';
import { inject, observer } from 'mobx-react';
import { IPenaltyState } from '../../models/penalty';
import Slider from 'react-slick';
import i18n from '../../locales/i18n';

interface IPenaltyHistoryProps {
  gameStore?: IPenaltyState;
  title?: string;
}

interface IPenaltyHistoryState {
  slideIndex: number;
  height: number;
}

@inject('gameStore')
@observer
export class PenaltyHistory extends React.Component<IPenaltyHistoryProps, IPenaltyHistoryState> {
  public state = {
    height: 0,
    slideIndex: 0,
  };

  public slider?: Slider;

  public getBallStatistic(ball: number) {
    const { gameStore } = this.props;
    const { statistic } = gameStore as IPenaltyState;

    if (statistic) {
      if (ball > 0) {
        return statistic.balls
          ? i18n.t('penalty_history_hits_number', { number: statistic.balls[ball - 1] })
          : null;
      } else if (ball === -1) {
        return statistic.balls
          ? i18n.t('penalty_history_hits_number', { number: statistic.post })
          : null;
      } else if (ball === -2) {
        return statistic.balls ? statistic.miss : null;
      }
    }
    return null;
  }

  public getSectorName(ball: number) {
    if (ball > 0) {
      return i18n.t('penalty_history_sector_number', { number: ball });
    } else if (ball === -1) {
      return i18n.t('penalty_history_crossbar');
    } else if (ball === -2) {
      return i18n.t('penalty_history_miss_save');
    }
    return null;
  }

  public renderItems(page = 0) {
    const { gameStore } = this.props;
    const { history } = gameStore as IPenaltyState;
    const items = page === 0 ? history.slice(0, 8) : history.slice(8);

    return (
      <>
        {items.map((item) =>
          item.round && item.ball ? (
            <div
              key={item.round + '-' + item.ball}
              className={cn('penalty__history-item', 'penalty__history-item_ball-' + item.ball)}
            >
              <div className="penalty__history-round">
                {i18n.t('penalty_history_round_number', { number: item.round })}
              </div>
              <div className="penalty__history-sector">{this.getSectorName(item.ball)}</div>
              <div className="penalty__history-statistic">{this.getBallStatistic(item.ball)}</div>
            </div>
          ) : null,
        )}
      </>
    );
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
      <Panel className="history__panel" title={title} initialCollapsed={false} collapsible={true}>
        <div className="penalty__history">
          <div className="penalty__history-header">
            <div className="penalty__history-title">{i18n.t('penalty_history_round')}</div>
            <div className="penalty__history-title">{i18n.t('penalty_history_hit')}</div>
            <div className="penalty__history-title">
              {i18n.t('penalty_history_sector_statistics')}
            </div>
          </div>
          <div>
            <Slider ref={(ref) => ref && (this.slider = ref)} {...settings}>
              <div className="penalty__history-content">{this.renderItems(0)}</div>
              <div className="penalty__history-content">{this.renderItems(1)}</div>
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
