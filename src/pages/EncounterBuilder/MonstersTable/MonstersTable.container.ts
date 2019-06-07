import { connect } from 'react-redux';
import { Dispatch } from 'shared/types';
import { showModal } from 'shared/components/Modal/Modal.actions';
import MonstersTable from './MonstersTable.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showModal: (modalId: string, data: { monsterID: string }) => dispatch(showModal(modalId, data))
});

export default connect(
  null,
  mapDispatchToProps
)(MonstersTable);
