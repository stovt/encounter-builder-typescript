import { connect } from 'react-redux';
import { State } from 'shared/types';
import { getAnyVisible } from '../Modal.selectors';
import ModalWatcher from './ModalWatcher.component';

const mapStateToProps = (state: State) => ({
  anyModalVisible: getAnyVisible(state)
});

export default connect(mapStateToProps)(ModalWatcher);
