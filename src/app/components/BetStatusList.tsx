import * as React from 'react';
import { BetStatusItem } from './';

interface IBetStatusListProps {
  children: Array<React.ReactElement<BetStatusItem>>;
}

export const BetStatusList = ({ children }: IBetStatusListProps) => (
  <div className="bet-status bet-status_multicolumn">{children}</div>
);
