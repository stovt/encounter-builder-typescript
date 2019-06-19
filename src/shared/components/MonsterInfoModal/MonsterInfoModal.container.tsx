import * as React from 'react';
import Modal from 'shared/components/Modal';
import { useDataSelector } from 'shared/components/Modal/Modal.selectors';
import AlertBox from 'shared/components/AlertBox';
import LoadingComponent from 'shared/components/LoadingComponent';
import { useFetchMonsterByIDDispatch } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import {
  useMonsterByIDSelector,
  useMonsterLoadingSelector,
  useMonsterErrorSelector
} from 'pages/EncounterBuilder/EncounterBuilder.selectors';
import { MONSTER_INFO_MODAL_ID } from './MonsterInfoModal.constants';
import MonsterInfoModal from './MonsterInfoModal.component';

const MonsterInfoModalContainer: React.FC = () => {
  const fetchMonsterById = useFetchMonsterByIDDispatch();

  const modalData = useDataSelector(MONSTER_INFO_MODAL_ID);

  const monster = useMonsterByIDSelector(modalData.monsterID);
  const monsterLoading = useMonsterLoadingSelector();
  const monsterError = useMonsterErrorSelector();

  React.useEffect(() => {
    if (modalData.monsterID && !monster) fetchMonsterById(modalData.monsterID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalData.monsterID, monster]);

  return (
    <Modal modalId={MONSTER_INFO_MODAL_ID} title={monster ? monster.name : ''} width='90vw'>
      {monsterLoading && <LoadingComponent />}
      {monsterError && <AlertBox>{monsterError}</AlertBox>}
      {monster && <MonsterInfoModal monster={monster} />}
    </Modal>
  );
};

export default MonsterInfoModalContainer;
