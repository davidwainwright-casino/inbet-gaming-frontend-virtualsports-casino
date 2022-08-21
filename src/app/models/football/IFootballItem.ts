// import { IOddGroup, Dynamics } from './../';
// import { IObservableFactories, IObservableObject } from 'mobx';
import { IOddItem } from './../';
import { IOdd4001 } from '../../proto/bets.proto';
import { IFoolballMeta } from './';

export interface IFootballItem extends IOddItem {
  serverData?: IOdd4001;
  meta?: IFoolballMeta;
}
