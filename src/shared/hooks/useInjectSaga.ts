import * as React from 'react';
import { Task, Saga } from 'redux-saga';
import sagaMiddleware from 'store/middleware/sagaMiddleware';

const useInjectSaga = (sagas: Saga) => {
  const sagasRef = React.useRef<Task | null>(null);

  React.useEffect(() => {
    sagasRef.current = sagaMiddleware.run(sagas);

    return () => {
      (sagasRef.current as Task).cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useInjectSaga;
