import { Reducer } from 'redux';

export type NameReducerMap = Record<string, Reducer>;

export class ReducerRegistry {
  _reducers: NameReducerMap;

  _emitChange: ((reducers: NameReducerMap) => void) | null;

  constructor() {
    this._emitChange = null;
    this._reducers = {};
  }

  getReducers() {
    return { ...this._reducers };
  }

  register(name: string, reducer: Reducer) {
    this._reducers = { ...this._reducers, [name]: reducer };
    const { _emitChange } = this;
    if (_emitChange) {
      _emitChange(this.getReducers());
    }
  }

  setChangeListener(listener: (reducers: NameReducerMap) => void) {
    this._emitChange = listener;
  }
}

const reducerRegistry = new ReducerRegistry();

export default reducerRegistry;
