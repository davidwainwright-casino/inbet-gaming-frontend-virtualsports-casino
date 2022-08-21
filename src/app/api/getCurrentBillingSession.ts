import { querySession } from './querySession';

export const getCurrentBillingSession = () => querySession || null;
