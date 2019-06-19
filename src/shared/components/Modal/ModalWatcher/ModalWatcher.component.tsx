import React from 'react';
import GlobalStyles from './ModalWatcher.styles';
import { attachModalStyles, detachModalStyles } from './ModalWatcher.helpers';
import { useAnyVisibleSelector } from '../Modal.selectors';

const ModalWatcher: React.FC = () => {
  const anyModalVisible = useAnyVisibleSelector();

  React.useEffect(() => {
    if (anyModalVisible) {
      attachModalStyles();
    } else {
      detachModalStyles();
    }
  }, [anyModalVisible]);

  return <GlobalStyles />;
};

export default ModalWatcher;
