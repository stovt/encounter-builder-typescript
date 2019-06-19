import * as React from 'react';
import ReactDOM from 'react-dom';
import { noop } from 'shared/helpers';
import Overlay from './Overlay';
import StyledModal from './Modal.styled';
import CloseButton from './CloseButton';
import Title from './Title';
import {
  useRegisterModalDispatch,
  useUnregisterModalDispatch,
  useHideModalDispatch
} from './Modal.actions';
import { useVisibleSelector } from './Modal.selectors';

const modalsRoot = document.getElementById('modals');

interface Props {
  modalId: string;
  onRequestClose?: () => void;
  showCloseBtn?: boolean;
  customCloseBtn?: typeof React.Component;
  title?: React.ReactNode | string;
  error?: boolean;
  flex?: boolean;
  padded?: boolean;
  cover?: boolean;
  width?: string;
  fullscreenOnMobile?: boolean;
}

const Modal: React.FC<Props> = ({
  modalId,
  onRequestClose = noop,
  showCloseBtn = true,
  customCloseBtn: CustomCloseBtn = null,
  title = null,
  error = false,
  flex = false,
  padded = true,
  cover = false,
  width = '',
  fullscreenOnMobile = true,
  children
}) => {
  const [hydrated, setHydrated] = React.useState<boolean>(false);

  const overlayRef = React.useRef<HTMLDivElement>(null);

  const registerModal = useRegisterModalDispatch();
  const unregisterModal = useUnregisterModalDispatch();
  const hideModal = useHideModalDispatch();

  const visible = useVisibleSelector(modalId);

  React.useEffect(() => {
    /* SSR mismatch fix */
    setHydrated(true);
    registerModal(modalId);

    return () => {
      unregisterModal(modalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalId]);

  const closeModal = React.useCallback(() => {
    onRequestClose();
    hideModal(modalId);
  }, [onRequestClose, hideModal, modalId]);

  const onOverlayClick = React.useCallback(
    e => {
      if (overlayRef.current) {
        if (e.target === overlayRef.current) {
          closeModal();
        }
      }
    },
    [overlayRef, closeModal]
  );

  if (!hydrated || !modalsRoot) return null;

  return ReactDOM.createPortal(
    <Overlay visible={visible} ref={overlayRef} onClick={onOverlayClick}>
      <StyledModal
        width={width}
        flex={flex}
        padded={padded}
        cover={cover}
        fullscreenOnMobile={fullscreenOnMobile}
      >
        {showCloseBtn &&
          (CustomCloseBtn ? (
            <CustomCloseBtn onClick={closeModal} />
          ) : (
            <CloseButton onClick={closeModal} />
          ))}
        {title && <Title error={error}>{title}</Title>}
        {children}
      </StyledModal>
    </Overlay>,
    modalsRoot
  );
};

export default Modal;
