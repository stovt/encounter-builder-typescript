export const numberWithCommas = (number: number) => {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

// eslint-disable-next-line  @typescript-eslint/no-empty-function
export const noop = () => {};

export const isIE = (() => {
  const ua = window.navigator.userAgent;
  return ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0;
})();

export const scrollbarWidth = (function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = 'scroll';

  // add innerdiv
  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;

  // remove divs
  (outer.parentNode as Node & ParentNode).removeChild(outer);

  return widthNoScroll - widthWithScroll;
})();

export const shuffle = (array: any[]) => {
  let m = array.length;
  let t;
  let i;

  while (m) {
    i = Math.floor(Math.random() * m);
    m -= 1;

    t = array[m];
    // eslint-disable-next-line no-param-reassign
    array[m] = array[i];
    // eslint-disable-next-line no-param-reassign
    array[i] = t;
  }

  return array;
};
