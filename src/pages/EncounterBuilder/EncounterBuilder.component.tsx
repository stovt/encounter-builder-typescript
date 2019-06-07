import * as React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import { ErrorType } from 'shared/types';
import { Breakpoints } from 'shared/types/breakpoints';
import { EncounterBuilderAction, Groups, PartyLevels } from 'shared/types/encounterBuilder';
import { MonstersBase } from 'shared/types/monsters';
import LoadingComponent from 'shared/components/LoadingComponent';
import AlertBox from 'shared/components/AlertBox';
import Divider from 'shared/components/Divider';
import GroupInfo from './GroupInfo';
import EncounterInfo from './EncounterInfo';
import Totals from './Totals';
import Legend from './Legend';
import MonstersTable from './MonstersTable';
import BattleButton from './BattleButton';
import { isMonsterLoading } from './EncounterBuilder.selectors';

interface Props {
  monsters: MonstersBase;
  loading: boolean;
  error: ErrorType;
  groups: Groups;
  partyLevels: PartyLevels;
  breakpoints: Breakpoints;
  monsterLoading: boolean;
  fetchAllMonsters: () => EncounterBuilderAction;
}

const EncounterBuilder: React.FC<Props> = ({
  monsters,
  loading,
  error,
  groups,
  partyLevels,
  breakpoints,
  monsterLoading,
  fetchAllMonsters
}) => {
  React.useEffect(() => {
    if (!monsters.length) fetchAllMonsters();
  }, [fetchAllMonsters, monsters.length]);

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
                <BattleButton />
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
