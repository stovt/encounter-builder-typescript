// @flow
import React from 'react';
import GlobalStyles from './ModalWatcher.styles';
import { attachModalStyles, detachModalStyles } from './ModalWatcher.helpers';

interface Props {
  anyModalVisible: boolean;
}

const ModalWatcher: React.FC<Props> = ({ anyModalVisible }) => {
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
