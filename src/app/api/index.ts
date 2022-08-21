import { Response, Request, SessionError } from '../proto/bets.proto';
import qs from 'qs';
import uuidv1 from 'uuid/v1';
import { apiRequest } from './apiRequest';
import { errorHandler, UNKNOWN_ERROR } from './errorHandler';
import { querySession } from './querySession';
import { queryUUID } from './queryUUID';
import { getCurrentUUID } from './getCurrentUUID';
import { getCurrentSession } from './getCurrentSession';
import { getCurrentBilling } from './getCurrentBilling';
import { isDemo } from './isDemo';
import { DEFAULT_GAME, newSourcesMap } from '../consts/games';
import { getLanguage } from '../locales';
import i18n from '../locales/i18n';
import { getCurrentBillingSession } from './getCurrentBillingSession';

const prms = qs.parse(window.location.search, { ignoreQueryPrefix: true });

const CURRENCY = prms.c || '';

let outedQuery = false;

function log(...args: any) {
  if (outedQuery === false) {
    outedQuery = true;
    log(prms);
  }

  const useLog =
    (window as any).vllog || prms.debug ||
    (process.env.NODE_ENV === 'development' || process.env.REACT_APP_NODE_ENV === 'development');
  const l = !useLog ? () => {} : (console.log.bind(console) as any);
  l.apply(l, args);
}

if (isDemo) {
  log({ isDemo });
}

export const getGameUrl = (game: string = DEFAULT_GAME.name): string => {
  const lang = getLanguage();
  const url = [`/game/${game}?l=${lang}`];
  if (CURRENCY) {
    url.push(`c=${CURRENCY}`);
  }
  if (queryUUID) {
    url.push(`d=${queryUUID}`);
  }
  if (querySession) {
    url.push(`s=${querySession}`);
  }
  return url.join('&');
};

let lastHash: any = null;
export const fetchUrl = async (url: string, sources: number[], bets: any[] = []) => {
  if (bets.length) {
    lastHash = null;
  }

  const resSources = sources.map((source) => newSourcesMap[source] || source);
  const uuid = await getCurrentUUID();
  const billing = await getCurrentBilling();
  const sessionId = await getCurrentSession();
  const billingSession = await getCurrentBillingSession();

  const reqData = Request.create({
    bets,
    device: {
      billing,
      currency: CURRENCY,
      sessionId,
      billingSession,
      uuid,
    },
    gamesIds: resSources,
    hash: lastHash,
  });

  log('<--', reqData);

  const buffer = Request.encode(reqData).finish();
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length);

  let response: any;
  return apiRequest({
    data: arrayBuffer,
    method: 'POST',
    url,
  })
    .then((res: any) => {
      response = res;
      return Response.decode(new Uint8Array(res.data));
    })
    .then((obj: any) => {
      if (response.status === 200) {
        log('---->', obj);

        lastHash = bets.length ? null : obj.hash;
        if (obj.error) {
          let msg = UNKNOWN_ERROR;
          if (obj.error === SessionError.SE_broken_session) {
            msg = i18n.t('broken_session');
          } else if (obj.error === SessionError.SE_balance_not_available) {
            msg = i18n.t('error_balance_not_available');
          }

          return { error: msg };
        }
        return { response: obj };
      } else {
        return { error: obj };
      }
    })
    .catch(errorHandler);
};

export const fetchState = (sources: number[]) => {
  return fetchUrl('/bets/states', sources);
};

export const putBet = (sources: number[], bets: any[]) => {
  return fetchUrl('/bets/add', sources, bets);
};
