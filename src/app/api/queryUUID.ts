import qs from 'qs';

const prms = qs.parse(window.location.search, { ignoreQueryPrefix: true });

export const queryUUID = prms.d || null;
