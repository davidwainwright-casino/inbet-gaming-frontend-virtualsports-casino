import { IOddItem } from './../';
import { RouletteBet } from '../../proto/bets.proto';

export interface IRouletteItem extends IOddItem {
  sector?: number | null;
  alias?: RouletteBet.Alias | null;
  type?: RouletteBet.Type;
  resultValue?: string;
}
