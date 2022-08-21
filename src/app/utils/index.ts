import Long from 'long';
import cf from 'currency-formatter';

export * from './randomArray';

export const formatTime = (time: number = 0) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
  const secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();
  return minutesStr + ':' + secondsStr;
};

export const timeout = (ms: number = 0) => new Promise((resolve) => setTimeout(resolve, ms));

export const currencyFormat = (value: number, currency: string) => {
  if (!cf.findCurrency(currency)) {
    return cf.format(value / 100, { code: currency, thousand: ' ' }) + ' ' + currency;
  }

  return cf.format(value / 100, { code: currency });
};

export const betFormat = (value: number, currency: string) => {
  return cf.format(value / 100, {
    code: currency,
    symbol: '',
    thousand: ' ',
    precision: value % 100 > 0 ? 2 : 0,
  });
};

export const longToFloatStr = (value: Long | number): string => {
  const longVal: Long = value instanceof Long ? value : Long.fromNumber(value);
  const isNegative = longVal.isNegative();

  const res = isNegative ? longVal.neg().toString() : longVal.toString();
  const prefix = isNegative ? '-' : '';

  if (res.length >= 2) {
    let left = res.substr(0, res.length - 2);
    if (left === '') {
      left = '0';
    }
    const right = res.substr(res.length - 2);
    return prefix + left + '.' + right;
  } else {
    return prefix + res + '.00';
  }
};

export const longToFloat = (value: Long | number): number => {
  const val = longToFloatStr(value);
  return parseFloat(val.toString());
};
