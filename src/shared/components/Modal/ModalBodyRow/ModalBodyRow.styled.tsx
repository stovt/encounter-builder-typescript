import styled from 'styled-components';
import { SCROLLBAR_PADDING } from './ModalBodyRow.constants';

export default styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: ${SCROLLBAR_PADDING}px;
`;
