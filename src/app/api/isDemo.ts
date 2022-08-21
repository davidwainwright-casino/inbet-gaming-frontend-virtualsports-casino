import { queryUUID } from './queryUUID';

let demoMode = !queryUUID;

// if(process.env.NODE_ENV === 'development' || process.env.REACT_APP_NODE_ENV === 'development') {
//   demoMode = true;
//   console.log('Demo mode development env!');
// }

export const isDemo = demoMode;
