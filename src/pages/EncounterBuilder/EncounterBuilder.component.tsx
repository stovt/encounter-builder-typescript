import * as React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import useInjectSaga from 'shared/hooks/useInjectSaga';
import LoadingComponent from 'shared/components/LoadingComponent';
import AlertBox from 'shared/components/AlertBox';
import Divider from 'shared/components/Divider';
import GroupInfo from './GroupInfo';
import EncounterInfo from './EncounterInfo';
import Totals from './Totals';
import Legend from './Legend';
import MonstersTable from './MonstersTable';
import sagas from './EncounterBuilder.sagas';
import { useFetchAllMonstersDispatch } from './EncounterBuilder.actions';
import {
  useMonstersSelector,
  useLoadingSelector,
  useErrorSelector,
  useGroupsSelector,
  usePartyLevelsSelector,
  useMonsterLoadingSelector
} from './EncounterBuilder.selectors';

const EncounterBuilder: React.FC = () => {
  useInjectSaga(sagas);

  const fetchAllMonsters = useFetchAllMonstersDispatch();

  const breakpoints = useBreakpoints();

  const monsters = useMonstersSelector();
  const loading = useLoadingSelector();
  const error = useErrorSelector();
  const groups = useGroupsSelector();
  const partyLevels = usePartyLevelsSelector();
  const monsterLoading = useMonsterLoadingSelector();

  React.useEffect(() => {
    if (!monsters.length) fetchAllMonsters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LoadingComponent />;
  if (error) return <AlertBox>{error}</AlertBox>;

  return (
    <Row>
      <Col xs={12} sm={12} md={4}>
        <Row>
          <Col xs={12}>
            <GroupInfo />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={12}>
            <EncounterInfo />
          </Col>
        </Row>
        {monsterLoading && (
          <>
            <Divider />
            <Row>
              <Col xs={12}>
                <LoadingComponent />
              </Col>
            </Row>
          </>
        )}
        {!!groups.length && !monsterLoading && (
          <>
            <Divider />
            <Row>
              <Col xs={12}>
                <Totals groups={groups} partyLevels={partyLevels} />
              </Col>
            </Row>
          </>
        )}
        {(breakpoints.xs || (breakpoints.sm && !breakpoints.md)) && <Divider />}
        {breakpoints.md && (
          <>
            <Divider />
            <Row>
              <Col xs={12}>
                <Legend />
              </Col>
            </Row>
          </>
        )}
      </Col>
      <Col xs={12} sm={12} md={8}>
        <Row>
          <Col xs={12}>
            <MonstersTable monsters={monsters} partyLevels={partyLevels} />
            {(breakpoints.xs || (breakpoints.sm && !breakpoints.md)) && (
              <>
                <Divider />
                <Row>
                  <Col xs={12}>
                    <Legend />
                  </Col>
                </Row>
              </>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EncounterBuilder;
