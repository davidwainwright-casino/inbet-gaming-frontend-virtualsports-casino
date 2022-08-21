import { UNKNOWN_ERROR, errorHandler } from './errorHandler';
import { apiRequest } from './apiRequest';
import { queryUUID } from './queryUUID';
import { isDemo } from './isDemo';
import uuidv4 from 'uuid/v4';
import Cookies from 'js-cookie';

let demoUUID: string | null = Cookies.get('demoUUID') || null;

const fetchUuid = () => {
  console.log('fetchUuid');

  if (process.env.NODE_ENV !== 'development' && process.env.REACT_APP_NODE_ENV !== 'development') {
    console.log('Try fetchUuid at non development env');
    return '';
  }

  return apiRequest({
    method: 'GET',
    responseType: 'json',
    url: 'https://cafemobauth.com/mobile/api/auth/fun',
  })
    .then((res: any) => {
      if (typeof res.data === 'string') {
        return JSON.parse(res.data);
      }
      return res.data;
    })
    .then((data: any) => {
      const { token, errorMessage } = data;
      if (token) {
        return { response: token };
      } else {
        return { error: errorMessage || UNKNOWN_ERROR };
      }
    })
    .catch(errorHandler);
};

const getUuid = async () => {
  try {
    const { response, error } = await fetchUuid();

    if (response) {
      return response;
    } else if (error) {
      console.error(error);
    }
  } catch (e) {
    console.error(e);
  }
  return '';
};

export const getCurrentUUID = async () => {
  if (isDemo) {
    if (!demoUUID) {
      demoUUID = uuidv4(); //await getUuid();
      Cookies.set('demoUUID', demoUUID, { expires: 14 });
    }
    return demoUUID;
  } else {
    return queryUUID;
  }
};
