import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import DropDown, { DropDownItem } from 'shared/components/DropDown';
import StyledWrapper from './Wrapper';
import StyledRandomButton from './RandomButton';
import DropDownButton from './DropDownButton';
import { Difficulty } from './RandomGenerator.types';
import { LEVEL_TYPES, DEFAULT_RANDOM_DIFFICULTY } from './RandomGenerator.constants';

const RandomGenerator: React.FC = () => {
  const [difficulty, setDifficulty] = React.useState<Difficulty>(DEFAULT_RANDOM_DIFFICULTY);

  const handleOnChangeDifficulty = React.useCallback((diff: Difficulty) => {
    setDifficulty(diff);
  }, []);

  return (
    <StyledWrapper>
      <StyledRandomButton>
        <FormattedMessage id={`encounter-info.random-generator.${difficulty}`} />
      </StyledRandomButton>
      <DropDown button={DropDownButton}>
        {LEVEL_TYPES.map(levelType => (
          <DropDownItem key={levelType} onClick={() => handleOnChangeDifficulty(levelType)}>
            <FormattedMessage id={`encounter-info.random-generator.${levelType}`} />
          </DropDownItem>
        ))}
      </DropDown>
    </StyledWrapper>
  );
};

export default RandomGenerator;
