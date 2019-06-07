import { ModalsAction } from 'shared/types/modals';
import { MODAL_DATA_DEFAULT_VALUE } from './Modal.constants';

export const REGISTER_MODAL = 'modals/REGISTER';
export const UNREGISTER_MODAL = 'modals/UNREGISTER';
export const SHOW_MODAL = 'modals/SHOW';
export const HIDE_MODAL = 'modals/HIDE';
export const MERGE_MODAL_DATA = 'modals/MERGE_DATA';

export const registerModal = (modalId: string): ModalsAction => ({
  type: REGISTER_MODAL,
  modalId
});
export const unregisterModal = (modalId: string): ModalsAction => ({
  type: UNREGISTER_MODAL,
  modalId
});
export const showModal = (modalId: string, data: {} = MODAL_DATA_DEFAULT_VALUE): ModalsAction => ({
  type: SHOW_MODAL,
  modalId,
  data
});
export const hideModal = (modalId: string): ModalsAction => ({
  type: HIDE_MODAL,
  modalId
});
export const mergeModalData = (modalId: string, data: any): ModalsAction => ({
  type: MERGE_MODAL_DATA,
  modalId,
  data
});
