import * as React from 'react';
import { Task, Saga } from 'redux-saga';
import sagaMiddleware from 'store/middleware/sagaMiddleware';

const withSaga = (sagas: Saga) => (WrappedComponent: React.FC) =>
  class extends React.Component {
    sagas?: Task;

    componentWillMount() {
      this.sagas = sagaMiddleware.run(sagas);
    }

    componentWillUnmount() {
      (this.sagas as Task).cancel();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withSaga;
