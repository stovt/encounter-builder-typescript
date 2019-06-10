import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ROUTES } from 'shared/constants';
import StyledBackButton from './BackButton.styled';

const BackButton: React.FC = () => (
  <StyledBackButton to={ROUTES.ENCOUNTER_BUILDER}>
    <FormattedMessage id='encounter-battle.back' />
  </StyledBackButton>
);

export default BackButton;
