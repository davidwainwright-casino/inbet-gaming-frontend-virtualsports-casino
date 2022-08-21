import { OddItem } from './../';
import { computed } from 'mobx';
import { IOdd4001, Bet4001 } from '../../proto/bets.proto';
import { IFoolballMeta, IFootballItem } from './';
import { longToFloat } from '../../utils';

/**
 * Ставка в футболе
 *
 * @export
 * @class FootballItem
 * @extends {OddItem}
 * @implements {IFootballItem}
 */
export class FootballItem extends OddItem implements IFootballItem {
  public serverData?: IOdd4001;
  public meta?: IFoolballMeta;
  
  /**
   * Получение ключа ставки для определения уникальности
   *
   * @readonly
   * @memberof FootballItem
   */
  @computed get key() {
    const s = this.serverData;
    if(!s) { return ''; }
    return [
      s.goals,
      s.handicap,
      s.kind,
      s.odd,
      s.teamA,
      s.teamB,
      s.total,
    ].join('_');
  }

  /**
   * Размер выигрыша коэффициент
   *
   * @readonly
   * @memberof FootballItem
   */
  @computed get num() {
    if (!this.serverData || !this.serverData.odd) {
      return 0;
    }
    return longToFloat(this.serverData.odd);
  }

  /**
   * Серверные данные о ставке
   *
   * @readonly
   * @memberof FootballItem
   */
  @computed get oddData() {
    let item = this.serverData;
    
    this.game.odds.forEach(group => {
      if(group.items) {
        group.items.forEach(odd => {
          const sd = odd.serverData as IOdd4001;
          if(sd && this.serverData && sd.kind === this.serverData.kind) {
            item = sd;
            // console.log('iii', item);
          }
        })
      }
    });
    
    return item;
  }

  /**
   * Заголовок ставки
   *
   * @readonly
   * @memberof FootballItem
   */
  @computed get title() {
    if(!this.meta || !this.serverData) { return ''; }
    const {kind} = this.serverData;
    if(kind === undefined) { return ''; }
    if(!this.oddData) { return ''; }
    return this.meta.getTitle(Number(kind) || 0, this.oddData);
  }

  @computed get betTitle() {
    if(!this.meta || !this.serverData) { return ''; }
    const {kind} = this.serverData;
    if(kind === undefined) { return ''; }
    if(!this.oddData) { return ''; }
    return this.meta.getTitle(Number(kind) || 0, this.oddData);
  }

  /**
   * Возвращает новую ставку
   *
   * @returns {Bet4001}
   * @memberof FootballItem
   */
  public getGameBet(): Bet4001 {
    const odd = Bet4001.create({
      round: this.game.round,
      odd: this.serverData,
    });
    return odd;

  }
}
