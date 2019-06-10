import * as React from 'react';
import { connect } from 'react-redux';
import { State, Dispatch, ErrorType } from 'shared/types';
import { Monster } from 'shared/types/monsters';
import { EncounterBuilderAction } from 'shared/types/encounterBuilder';
import Modal from 'shared/components/Modal';
import { getData } from 'shared/components/Modal/Modal.selectors';
import AlertBox from 'shared/components/AlertBox';
import LoadingComponent from 'shared/components/LoadingComponent';
import { fetchMonsterByID } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import {
  getMonsterByID,
  isMonsterLoading,
  getMonsterError
} from 'pages/EncounterBuilder/EncounterBuilder.selectors';
import { MONSTER_INFO_MODAL_ID } from './MonsterInfoModal.constants';
import MonsterInfoModal from './MonsterInfoModal.component';

interface Props {
  modalData: {
    monsterID: string;
  };
  getMonsterById: (monsterID: string) => Monster | undefined;
  fetchMonsterById: (monsterID: string) => EncounterBuilderAction;
  monsterLoading: boolean;
  monsterError: ErrorType | null;
}

const MonsterInfoModalContainer: React.FC<Props> = ({
  modalData: { monsterID },
  getMonsterById,
  fetchMonsterById,
  monsterLoading,
  monsterError
}) => {
  React.useEffect(() => {
    if (monsterID) fetchMonsterById(monsterID);
  }, [fetchMonsterById, monsterID]);

  const monster = React.useMemo(() => getMonsterById(monsterID), [getMonsterById, monsterID]);

  return (
    <Modal modalId={MONSTER_INFO_MODAL_ID} title={monster ? monster.name : ''} width='90vw'>
      {monsterLoading && <LoadingComponent />}
      {monsterError && <AlertBox>{monsterError}</AlertBox>}
      {monster && <MonsterInfoModal monster={monster} />}
    </Modal>
  );
};

const mapStateToProps = (state: State) => ({
  modalData: getData(state, MONSTER_INFO_MODAL_ID) as {
    monsterID: string;
  },
  getMonsterById: (monsterID: string) => getMonsterByID(state, monsterID),
  monsterLoading: isMonsterLoading(state),
  monsterError: getMonsterError(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchMonsterById: (monsterID: string) => dispatch(fetchMonsterByID(monsterID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonsterInfoModalContainer);
