import { Bet1024 } from '../../proto/bets.proto';

export class PenaltyOdd {
  public ball?: (number | null);
  public alias?: (Bet1024.Alias | null);
  public type?: Bet1024.Type;
  public resultValue?: string;
}
