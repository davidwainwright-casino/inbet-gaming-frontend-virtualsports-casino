
import { IOdd4001 } from '../../proto/bets.proto';
import i18n from './../../locales/i18n';

/**
 * Объект для ставки в футболе
 *
 * @export
 * @interface IFoolballMeta
 */
export interface IFoolballMeta {
  /**
   * Заголовок группы для ставки
   *
   * @type {string}
   * @memberof IFoolballMeta
   */
  title: string;

  /**
   * Получение заголовка ставки
   *
   * @memberof IFoolballMeta
   */
  getTitle: (kind: number, r: IOdd4001) => string;

  /**
   * Проверка по kind, отоносится ли ставка к данному типу
   *
   * @memberof IFoolballMeta
   */
  checkKind: (kind: number) => boolean;
}


export const foolballMetas: IFoolballMeta[] = [
  {
    title: i18n.t('football_base_time'),
    checkKind: (kind) => kind >= 0 && kind <= 2,
    getTitle: (kind) => {
      let title = i18n.t('football_team_number_1');
      if (kind === 1) { title = i18n.t('football_draw'); }
      else if (kind === 2) { title = i18n.t('football_team_number_2'); }
      return title;
    }
  },
  {
    title: i18n.t('football_double_chance'),
    checkKind: (kind) => kind >= 3 && kind <= 5,
    getTitle: (kind) => {
      let title = '1х';
      if(kind === 4) { title = '12'; }
      else if(kind === 5) { title = '2x'; }
      return title;
    }
  },
  {
    title: i18n.t('football_who_score'),
    checkKind: (kind) => kind >= 34 && kind <= 36,
    getTitle: (kind) => {
      let title = i18n.t('football_nobody');
      if (kind === 34) { title = i18n.t('football_both'); }
      if (kind === 35) { title = i18n.t('football_one'); }
      return title;
    }
  },
  {
    title: i18n.t('football_number_goals'),
    checkKind: (kind) => kind >= 65 && kind <= 68,
    getTitle: (kind) => {
      let title = i18n.t('football_one_goal');
      if (kind === 66) { title = i18n.t('football_two_goals'); }
      if (kind === 67) { title = i18n.t('football_three_goals'); }
      if (kind === 68) { title = i18n.t('football_four_goals'); }
      return title;
    }
  },
  {
    title: i18n.t('football_handicap'),
    checkKind: (kind) => kind >= 6 && kind <= 21,
    getTitle: (kind, r) => {
      if (!r.handicap) {
        return '';
      }
      const isFirst = (kind >= 6 && kind <= 13);
      return `${isFirst ? '1' : '2'} (${r.handicap < 0 ? '' : '+'}${r.handicap / 10})`;
    }
  },
  {
    title: i18n.t('football_total'),
    checkKind: (kind) => kind >= 22 && kind <= 33,
    getTitle: (kind, r) => {
      const isUnder = (kind >= 22 && kind <= 27);
      const total = r.total ? r.total / 10 : 0;
      return `${isUnder ? '>' : '<'}${total}`;
    }
  },
  {
    title: i18n.t('football_exact_score'),
    checkKind: (kind) => kind >= 37 && kind <= 64,
    getTitle: (kind, r) => `${r.teamA||0}:${r.teamB||0}`
  }
];
