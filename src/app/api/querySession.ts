import qs from 'qs';

const prms = qs.parse(window.location.search, { ignoreQueryPrefix: true });

export const querySession = prms.s || null;
