import * as React from 'react';

interface IBetStatusColumnProps {
  children: any;
}

export const BetStatusColumn = ({ children }: IBetStatusColumnProps) => (
  <div className="bet-status bet-status_onecolumn">{children}</div>
);
