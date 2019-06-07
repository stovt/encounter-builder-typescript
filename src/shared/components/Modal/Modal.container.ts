import { connect } from 'react-redux';
import { State, Dispatch } from 'shared/types';
import { getVisible } from './Modal.selectors';
import { registerModal, unregisterModal, hideModal } from './Modal.actions';
import Modal from './Modal.component';

const mapStateToProps = (state: State, ownProps: { modalId: string }) => ({
  visible: getVisible(state, ownProps.modalId)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  registerModal: (modalId: string) => dispatch(registerModal(modalId)),
  unregisterModal: (modalId: string) => dispatch(unregisterModal(modalId)),
  hideModal: (modalId: string) => dispatch(hideModal(modalId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
