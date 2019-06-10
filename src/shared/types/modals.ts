import {
  REGISTER_MODAL,
  UNREGISTER_MODAL,
  SHOW_MODAL,
  HIDE_MODAL,
  MERGE_MODAL_DATA
} from 'shared/components/Modal/Modal.actions';

export interface ModalItem {
  visible: boolean;
  data: Record<string, any>;
}

export type Modals = Record<string, ModalItem>;

export interface ModalsState {
  modals: Modals;
}

export type ModalsAction =
  | { type: typeof REGISTER_MODAL; modalId: string }
  | { type: typeof UNREGISTER_MODAL; modalId: string }
  | { type: typeof SHOW_MODAL; modalId: string; data: Record<string, any> }
  | { type: typeof HIDE_MODAL; modalId: string }
  | { type: typeof MERGE_MODAL_DATA; modalId: string; data: Record<string, any> };
