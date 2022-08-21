export const apiRequest = (opts: any) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url);
    xhr.responseType = opts.responseType || 'arraybuffer';
    if (opts.contentType) {
      xhr.setRequestHeader('Content-Type', opts.contentType);
    }
    xhr.timeout = 45000;

    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve({
          data: xhr.response,
          status: this.status,
        });
      } else {
        reject({
          data: xhr.response,
          message: xhr.statusText,
          status: this.status,
        });
      }
    };
    xhr.onerror = function() {
      reject({
        data: xhr.response,
        message: xhr.statusText,
        status: this.status,
      });
    };
    xhr.ontimeout = function() {
      reject({
        data: xhr.response,
        message: xhr.statusText,
        status: this.status,
      });
    };

    xhr.send(opts.data);
  });
};
