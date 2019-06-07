import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'react-styled-flexboxgrid';
import { BattleMonsterRows } from 'shared/types/monsters';
import StyledTitle from 'shared/components/Title';
import BattleTable from './BattleTable';
import ButtonsWrapper from './ButtonsWrapper';
import BackButton from './BackButton';
import NextTurnButton from './NextTurnButton';

interface Props {
  monsters: BattleMonsterRows;
}

const EncounterBattle: React.FC<Props> = ({ monsters }) => {
  if (!monsters.length) {
    return (
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <StyledTitle center>
                <FormattedMessage id='encounter-battle.add-monsters-before-start-battle' />
              </StyledTitle>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ButtonsWrapper>
                <BackButton />
              </ButtonsWrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  return (
    <Row>
      <Col xs={12}>
        <Row>
          <Col xs={12}>
            <StyledTitle center>
              <FormattedMessage id='encounter-battle.title' />
            </StyledTitle>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <BattleTable monsters={monsters} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ButtonsWrapper>
              <BackButton />
              <NextTurnButton />
            </ButtonsWrapper>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EncounterBattle;
