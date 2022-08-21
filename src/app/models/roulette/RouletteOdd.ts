import { RouletteBet } from '../../proto/bets.proto';

export class RouletteOdd {
  public sector?: number | null;
  public alias?: RouletteBet.Alias | null;
  public type?: RouletteBet.Type;
  public resultValue?: string;
  public isRed: boolean = false;
}

export default RouletteOdd;
