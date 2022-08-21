// import MutationObserver from 'mutation-observer';

const handleResize = () => {
  postHeight();
};

const handleMessage = (event: any) => {
  switch (event.data.type) {
    case 'getHeight':
      sendHeight(event.source);
      break;
  }
};

let lastHeight = 0;
const HEIGHT_CORRECTION = 10;
const sendHeight = (target: any, correction: number = 0) => {
  const div = document.getElementById('root'); // document.body
  if (!div) {
    return;
  }

  const height = Math.max(div.scrollHeight, div.offsetHeight) + correction;

  if (
    lastHeight > 0 &&
    lastHeight >= height - HEIGHT_CORRECTION &&
    lastHeight <= height + HEIGHT_CORRECTION
  ) {
    return;
  }
  lastHeight = height;

  target.postMessage(
    {
      value: height + HEIGHT_CORRECTION,
      type: 'height',
    },
    '*',
  );
};

export const postHeight = (correction: number = 0, timeout: number = 100) => {
  if (timeout) {
    setTimeout(() => {
      sendHeight(window.parent, correction);
    }, timeout);
  } else {
    sendHeight(window.parent, correction);
  }
};

window.addEventListener('message', handleMessage);
window.addEventListener('resize', handleResize);

const observer = new MutationObserver(handleResize);
observer.observe(document.body, { attributes: false, childList: true, subtree: true });
