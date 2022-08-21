import { isDemo } from './isDemo';
import config from './configLoader';

let demoBilling = 'demo-billing';

export const getCurrentBilling = async () => {
  return isDemo ? demoBilling : config.billing;
};
