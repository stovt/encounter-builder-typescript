// @flow
import { createGlobalStyle } from 'styled-components';
import { scrollbarWidth } from 'shared/helpers';
import { MODAL_OPEN_CLASS, HAS_SCROLLBAR_CLASS } from './ModalWatcher.constants';

const GlobalComponent = createGlobalStyle`
  body {
    &.${MODAL_OPEN_CLASS} {
      overflow: hidden;
    }

    &.${HAS_SCROLLBAR_CLASS} {
      padding-right: ${scrollbarWidth}px;
    }
  }
`;

export default GlobalComponent;
