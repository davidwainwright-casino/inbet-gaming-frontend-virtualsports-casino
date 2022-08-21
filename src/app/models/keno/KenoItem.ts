import { OddItem } from './../';
import { computed } from 'mobx';
import IKenoItem from './IKenoItem';
// import i18n from '../../locales/i18n';
import KenoGroup from './IKenoGroup';

export default class KenoItem extends OddItem implements IKenoItem {
  public resultValue?: string;

  constructor(group: KenoGroup, ...fields: Array<Partial<KenoItem>>) {
    super(group);
    Object.assign(this, ...fields);
  }

  @computed get key() {
    return '';
  }

  @computed get title() {
    return '';
  }

  // public getGameBet() {
  //   const odd = Bet999XX.create({
  //     round: this.game.round
  //   });
  //   return odd;
  // }
}
