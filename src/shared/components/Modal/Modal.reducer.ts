import { LOCATION_CHANGE } from 'connected-react-router';
import { Modals } from 'shared/types/modals';
import { Action } from 'shared/types';
import {
  SHOW_MODAL,
  HIDE_MODAL,
  REGISTER_MODAL,
  UNREGISTER_MODAL,
  MERGE_MODAL_DATA
} from './Modal.actions';
import { MODAL_ITEM_DEFAULT_STRUCTURE } from './Modal.constants';

const initialState = {};

const modalReducer = (state: Modals = initialState, action: Action): Modals => {
  switch (action.type) {
    case REGISTER_MODAL:
      if (state[action.modalId]) {
        return state; // Do nothing if modal is already registered
      }
      return {
        ...state,
        [action.modalId]: MODAL_ITEM_DEFAULT_STRUCTURE
      };
    case UNREGISTER_MODAL:
      return Object.keys(state).reduce((acc, modalId: string) => {
        if (modalId === action.modalId) {
          return acc;
        }
        return {
          ...acc,
          [modalId]: state[modalId]
        };
      }, {});
    case SHOW_MODAL: {
      const { modalId: actionModalId, data } = action;
      return Object.keys(state).reduce(
        (acc, modalId) => ({
          ...acc,
          [modalId]: {
            visible: modalId === actionModalId,
            data: modalId === action.modalId ? data : state[modalId].data
          }
        }),
        {}
      );
    }
    case HIDE_MODAL:
      return {
        ...state,
        [action.modalId]: {
          ...state[action.modalId],
          visible: false
        }
      };
    case LOCATION_CHANGE:
      return Object.keys(state).reduce(
        (acc, modalId) => ({
          ...acc,
          [modalId]: {
            ...state[modalId],
            visible: false
          }
        }),
        {}
      );
    case MERGE_MODAL_DATA: {
      const { data } = action;
      return Object.keys(state).reduce(
        (acc, modalId) => ({
          ...acc,
          [modalId]: {
            ...state[modalId],
            data: {
              ...state[modalId].data,
              ...data
            }
          }
        }),
        {}
      );
    }
    default:
      return state;
  }
};

export default modalReducer;
