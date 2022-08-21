export const UNKNOWN_ERROR = 'Unknown error';

export const errorHandler = (error: any) => {
  console.warn('errorHandler=', error);
  if (error.data && !(error.data instanceof ArrayBuffer)) {
    return error.data;
  }
  return { error: error.message || error.error || UNKNOWN_ERROR };
};
