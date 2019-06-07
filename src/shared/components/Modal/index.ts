import reducerRegistry from 'store/reducerRegistry';
import reducer from './Modal.reducer';

reducerRegistry.register('modals', reducer);

export { default } from './Modal.container';

export { default as ModalBodyRow } from './ModalBodyRow';
export { default as ModalWatcher } from './ModalWatcher';
