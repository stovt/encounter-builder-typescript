import { MODAL_OPEN_CLASS, HAS_SCROLLBAR_CLASS } from './ModalWatcher.constants';

export const attachModalStyles = () => {
  if (window.innerWidth > document.documentElement.clientWidth) {
    // has scrollbar
    document.body.classList.add(MODAL_OPEN_CLASS, HAS_SCROLLBAR_CLASS);
  } else {
    document.body.classList.add(MODAL_OPEN_CLASS);
  }
};

export const detachModalStyles = () => {
  document.body.classList.remove(MODAL_OPEN_CLASS, HAS_SCROLLBAR_CLASS);
};
