import { State } from 'shared/types';
import { ModalItem } from 'shared/types/modals';
import { MODAL_ITEM_DEFAULT_STRUCTURE } from './Modal.constants';

const getModalFromState = (
  state: State,
  modalId: string,
  defaultValue = MODAL_ITEM_DEFAULT_STRUCTURE
): ModalItem => state.modals[modalId] || defaultValue;

export const getVisible = (state: State, modalId: string) =>
  getModalFromState(state, modalId).visible;
export const getAnyVisible = (state: State) =>
  Object.keys(state.modals).some((modalId: string) => getVisible(state, modalId));
export const getData = (state: State, modalId: string) => getModalFromState(state, modalId).data;
export const getVisibleModalId = (state: State) =>
  Object.keys(state.modals).find((modalId: string) => getModalFromState(state, modalId).visible);
