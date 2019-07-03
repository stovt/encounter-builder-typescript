import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import DropDown, { DropDownItem } from 'shared/components/DropDown';
import {
  useClearGroupDispatch,
  useAddMonsterToGroupDispatch
} from 'pages/EncounterBuilder/EncounterBuilder.actions';
import { CR_INFO } from 'shared/constants';
import {
  useFilteredMonsterIDsSelector,
  usePartyLevelsSelector,
  useMonstersSelector,
  useLoadedMonstersSelector
} from 'pages/EncounterBuilder/EncounterBuilder.selectors';
import {
  getTotalPartyExpLevels,
  getTotalPlayerCount,
  getMultiplier
} from 'pages/EncounterBuilder/EncounterBuilder.helpers';
import StyledWrapper from './Wrapper';
import StyledRandomButton from './RandomButton';
import DropDownButton from './DropDownButton';
import { Difficulty } from './RandomGenerator.types';
import { getEncounterTemplate, getBestMonster } from './RandomGenerator.helpers';
import {
  LEVEL_TYPES,
  DEFAULT_RANDOM_DIFFICULTY,
  MAX_MOSTERS_COUNT,
  FUDGE_FACTOR
} from './RandomGenerator.constants';

const RandomGenerator: React.FC = () => {
  const [difficulty, setDifficulty] = React.useState<Difficulty>(DEFAULT_RANDOM_DIFFICULTY);

  const clearGroup = useClearGroupDispatch();
  const addMonsterToGroup = useAddMonsterToGroupDispatch();

  const filteredMonsterIDs = useFilteredMonsterIDsSelector();
  const partyLevels = usePartyLevelsSelector();
  const monsters = useMonstersSelector();
  const loadedMonsters = useLoadedMonstersSelector();

  const handleOnChangeDifficulty = React.useCallback((diff: Difficulty) => {
    setDifficulty(diff);
  }, []);

  const generateRandom = React.useCallback(
    (diff: Difficulty = difficulty) => {
      clearGroup();

      const totalTargetExp = getTotalPartyExpLevels(partyLevels)[diff];
      const totalPlayerCount = getTotalPlayerCount(partyLevels);

      const baseExpBudget = totalTargetExp * FUDGE_FACTOR;
      const encounterTemplate = getEncounterTemplate(MAX_MOSTERS_COUNT);
      const multiplier = getMultiplier(totalPlayerCount, encounterTemplate.total);
      let availableExp = baseExpBudget / multiplier;

      while (encounterTemplate.groups[0]) {
        // Exp should be shared as equally as possible between groups
        let targetExp = availableExp / encounterTemplate.groups.length;
        const currentGroup = encounterTemplate.groups.shift() as number;

        // We need to find a monster who, in the correct number, is close to the target exp
        targetExp /= currentGroup;

        const filteredMonsters = monsters.filter(
          monster => filteredMonsterIDs.indexOf(monster.id) > -1
        );

        const monster = getBestMonster(targetExp, filteredMonsters);

        let i;
        for (i = 0; i < currentGroup; i += 1) {
          addMonsterToGroup(monster.id, loadedMonsters.find(m => m.id === monster.id));
        }

        // Finally, subtract the actual exp value
        availableExp -= currentGroup * CR_INFO[monster.challenge_rating].exp;
      }
    },
    [
      addMonsterToGroup,
      clearGroup,
      difficulty,
      filteredMonsterIDs,
      loadedMonsters,
      monsters,
      partyLevels
    ]
  );

  const handleOnDropDownClick = React.useCallback(
    (diff: Difficulty) => {
      handleOnChangeDifficulty(diff);
      generateRandom(diff);
    },
    [generateRandom, handleOnChangeDifficulty]
  );

  return (
    <StyledWrapper>
      <StyledRandomButton onClick={() => generateRandom()}>
        <FormattedMessage id={`encounter-info.random-generator.${difficulty}`} />
      </StyledRandomButton>
      <DropDown button={DropDownButton}>
        {LEVEL_TYPES.map(levelType => (
          <DropDownItem key={levelType} onClick={() => handleOnDropDownClick(levelType)}>
            <FormattedMessage id={`encounter-info.random-generator.${levelType}`} />
          </DropDownItem>
        ))}
      </DropDown>
    </StyledWrapper>
  );
};

export default RandomGenerator;
