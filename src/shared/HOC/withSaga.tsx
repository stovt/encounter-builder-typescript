import * as React from 'react';
import sagaMiddleware from 'store/middleware/sagaMiddleware';

const withSaga = (sagas: any) => (WrappedComponent: React.FC) =>
  class extends React.Component {
    sagas: any;

    componentWillMount() {
      this.sagas = sagaMiddleware.run(sagas);
    }

    componentWillUnmount() {
      this.sagas.cancel();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withSaga;
