import { useSelector } from 'react-redux';
import { State } from 'shared/types';
import { ModalItem } from 'shared/types/modals';
import { MODAL_ITEM_DEFAULT_STRUCTURE } from './Modal.constants';

const getModalFromState = (
  state: State,
  modalId: string,
  defaultValue = MODAL_ITEM_DEFAULT_STRUCTURE
): ModalItem => state.modals[modalId] || defaultValue;

const getVisible = (state: State, modalId: string) => getModalFromState(state, modalId).visible;
const getAnyVisible = (state: State) =>
  Object.keys(state.modals).some((modalId: string) => getVisible(state, modalId));
const getData = (state: State, modalId: string) => getModalFromState(state, modalId).data;
const getVisibleModalId = (state: State) =>
  Object.keys(state.modals).find((modalId: string) => getModalFromState(state, modalId).visible);

export const useModalFromStateSelector = (modalId: string) =>
  useSelector<State, ModalItem>(state => getModalFromState(state, modalId));

export const useVisibleSelector = (modalId: string) =>
  useSelector<State, boolean>(state => getVisible(state, modalId));

export const useAnyVisibleSelector = () => useSelector<State, boolean>(getAnyVisible);

export const useDataSelector = (modalId: string) =>
  useSelector<State, Record<string, any>>(state => getData(state, modalId));

export const useVisibleModalIdSelector = () =>
  useSelector<State, string | undefined>(getVisibleModalId);
