import { IOddItem } from './../';
import { Bet1024 } from '../../proto/bets.proto';

export interface IPenaltyItem extends IOddItem {
  ball?: (number | null);
  alias?: (Bet1024.Alias | null);
  type?: Bet1024.Type;
  resultValue?: string;
}
