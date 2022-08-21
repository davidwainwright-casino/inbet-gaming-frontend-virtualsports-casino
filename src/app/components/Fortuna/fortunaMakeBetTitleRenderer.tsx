import * as React from 'react';
import { IOddItem } from '../../models';

export const fortunaMakeBetTitleRenderer = (odd: IOddItem) => 
  odd.title !== '0' 
    ? odd.title 
    : <div className='fortuna__number fortuna__number_inline' data-number='0' />;
