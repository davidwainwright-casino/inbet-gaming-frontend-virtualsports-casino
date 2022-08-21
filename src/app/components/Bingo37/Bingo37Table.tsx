import cn from 'classnames';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IGameStateBase, RED_SECTORS, BaseBet } from '../../models';
import { GameStore } from '../../stores';
import { RouletteTimer } from '..';
import i18n from '../../locales/i18n';
import { RouletteBet } from '../../proto/bets.proto';
const { Alias } = RouletteBet;

interface IBingo37Table {
  game?: GameStore;
  gameStore?: IGameStateBase;
}

@inject('game', 'gameStore')
@observer
export class Bingo37Table extends React.Component<IBingo37Table> {
  public hasBet(sector: number) {
    const { game } = this.props;
    const { activeBets, source } = game as GameStore;
    return activeBets.some((bet: BaseBet) => {
      if (bet.gameState.source === source && bet.betData.body.sectorList) {
        return bet.betData.body.sectorList.includes(sector);
      }
      return false;
    });
  }

  public hasBetByAlias(alias: RouletteBet.Alias) {
    const { game } = this.props;
    const { activeBets, source } = game as GameStore;
    return activeBets.some((bet: BaseBet) => {
      if (bet.gameState.source === source && bet.betData.body.type === RouletteBet.Type.ALIAS) {
        return bet.betData.body.alias === alias;
      }
      return false;
    });
  }

  public render() {
    const first12 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
    const second12 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
    const third12 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];

    return (
      <div className="roulette__panel">
        <div className="roulette__title">
          <RouletteTimer />
        </div>
        <table className="roulette__table">
          <tbody>
            <tr className="roulette__table__row">
              <td
                rowSpan={3}
                className={cn(
                  'roulette__table__cell roulette__table_bottom-border roulette__table_radius-lt roulette__table_radius-lb',
                  {
                    roulette__table__cell_selected: this.hasBet(37),
                  },
                )}
              >
                <span className="roulette__table__ball roulette__table__ball_green">37</span>
              </td>

              {first12.map((sector: number, idx: number) => (
                <td
                  key={sector}
                  className={cn('roulette__table__cell', {
                    'roulette__table_right-border': idx === first12.length - 1,
                    roulette__table__cell_selected: this.hasBet(sector),
                  })}
                >
                  <span
                    className={cn('roulette__table__ball', {
                      roulette__table__ball_red: RED_SECTORS.includes(sector),
                    })}
                  >
                    {sector}
                  </span>
                </td>
              ))}

              <td
                className={cn(
                  'roulette__table__cell roulette__table__cell_label roulette__table_radius-rt',
                  { roulette__table__cell_selected: this.hasBetByAlias(Alias.col3) },
                )}
              >
                {i18n.t('bingo37_table_x3')}
              </td>
            </tr>
            <tr className="roulette__table__row">
              {second12.map((sector: number, idx: number) => (
                <td
                  key={sector}
                  className={cn('roulette__table__cell', {
                    'roulette__table_right-border': idx === second12.length - 1,
                    roulette__table__cell_selected: this.hasBet(sector),
                  })}
                >
                  <span
                    className={cn('roulette__table__ball', {
                      roulette__table__ball_red: RED_SECTORS.includes(sector),
                    })}
                  >
                    {sector}
                  </span>
                </td>
              ))}

              <td
                className={cn('roulette__table__cell roulette__table__cell_label', {
                  roulette__table__cell_selected: this.hasBetByAlias(Alias.col2),
                })}
              >
                {i18n.t('bingo37_table_x3')}
              </td>
            </tr>
            <tr className="roulette__table__row roulette__table_bottom-border">
              {third12.map((sector: number, idx: number) => (
                <td
                  key={sector}
                  className={cn('roulette__table__cell', {
                    'roulette__table_right-border': idx === third12.length - 1,
                    roulette__table__cell_selected: this.hasBet(sector),
                  })}
                >
                  <span
                    className={cn('roulette__table__ball', {
                      roulette__table__ball_red: RED_SECTORS.includes(sector),
                    })}
                  >
                    {sector}
                  </span>
                </td>
              ))}

              <td
                className={cn(
                  'roulette__table__cell roulette__table__cell_label roulette__table_radius-rb',
                  { roulette__table__cell_selected: this.hasBetByAlias(Alias.col1) },
                )}
              >
                {i18n.t('bingo37_table_x3')}
              </td>
            </tr>
            <tr className="roulette__table__row roulette__table_no-top-border">
              <td className="roulette__table__cell roulette__table__cell_unused" />
              <td
                className={cn('roulette__table__cell roulette__table__cell_label', {
                  roulette__table__cell_selected: this.hasBetByAlias(Alias.row1),
                })}
                colSpan={4}
              >
                {i18n.t('roulette_table_row1')}
              </td>
              <td
                className={cn('roulette__table__cell roulette__table__cell_label', {
                  roulette__table__cell_selected: this.hasBetByAlias(Alias.row2),
                })}
                colSpan={4}
              >
                {i18n.t('roulette_table_row2')}
              </td>
              <td
                className={cn(
                  'roulette__table__cell roulette__table__cell_label roulette__table_right-border',
                  { roulette__table__cell_selected: this.hasBetByAlias(Alias.row3) },
                )}
                colSpan={4}
              >
                {i18n.t('roulette_table_row3')}
              </td>
              <td className="roulette__table__cell roulette__table__cell_unused" />
            </tr>
            <tr className="roulette__table__row">
              <td className="roulette__table__cell roulette__table__cell_unused" />
              <td
                className={cn(
                  'roulette__table__cell roulette__table__cell_label roulette__table_radius-lb',
                  { roulette__table__cell_selected: this.hasBetByAlias(Alias.small) },
                )}
                colSpan={2}
              >
                {i18n.t('roulette_table_small')}
              </td>
              <td
                className={cn('roulette__table__cell roulette__table__cell_label', {
                  roulette__table__cell_selected: this.hasBetByAlias(Alias.even),
                })}
                colSpan={2}
              >
                {i18n.t('roulette_table_even')}
              </td>
              <td
                className={cn(
                  'roulette__table__cell roulette__table__cell_label roulette__table__cell__sq_red',
                  { roulette__table__cell_selected: this.hasBetByAlias(Alias.red) },
                )}
                colSpan={2}
              />
              <td
                className={cn(
                  'roulette__table__cell roulette__table__cell_label roulette__table__cell__sq_black',
                  { roulette__table__cell_selected: this.hasBetByAlias(Alias.black) },
                )}
                colSpan={2}
              />
              <td
                className={cn('roulette__table__cell roulette__table__cell_label', {
                  roulette__table__cell_selected: this.hasBetByAlias(Alias.odd),
                })}
                colSpan={2}
              >
                {i18n.t('roulette_table_odd')}
              </td>
              <td
                className={cn(
                  'roulette__table__cell roulette__table__cell_label roulette__table_right-border roulette__table_radius-rb',
                  { roulette__table__cell_selected: this.hasBetByAlias(Alias.big) },
                )}
                colSpan={2}
              >
                {i18n.t('roulette_table_big')}
              </td>
              <td className="roulette__table__cell roulette__table__cell_unused " />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Bingo37Table;
