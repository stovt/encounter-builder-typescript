import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Monster } from 'shared/types/monsters';
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

type GroupMonsters = {
  id: string;
  qty: number;
  fetched: boolean;
}[];

const RandomGenerator: React.FC = () => {
  const [difficulty, setDifficulty] = React.useState<Difficulty>(DEFAULT_RANDOM_DIFFICULTY);
  const [groupMonsters, setGroupMonsters] = React.useState<GroupMonsters>([]);
  const [randomGenerated, setRandomGenerated] = React.useState<boolean>(false);

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
      setGroupMonsters([]);
      setRandomGenerated(false);

      const totalTargetExp = getTotalPartyExpLevels(partyLevels)[diff];
      const totalPlayerCount = getTotalPlayerCount(partyLevels);

      const baseExpBudget = totalTargetExp * FUDGE_FACTOR;
      const encounterTemplate = getEncounterTemplate(MAX_MOSTERS_COUNT);
      const multiplier = getMultiplier(totalPlayerCount, encounterTemplate.total);
      let availableExp = baseExpBudget / multiplier;

      let localGroupMonsters: GroupMonsters = [];

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

        const groupMonster = localGroupMonsters.find(m => m.id === monster.id);
        if (groupMonster) {
          localGroupMonsters = [
            ...localGroupMonsters.slice(0, localGroupMonsters.indexOf(groupMonster)),
            { ...groupMonster, qty: groupMonster.qty + currentGroup },
            ...localGroupMonsters.slice(localGroupMonsters.indexOf(groupMonster) + 1)
          ];
        } else {
          localGroupMonsters = [
            ...localGroupMonsters,
            {
              id: monster.id,
              qty: currentGroup,
              fetched: false
            }
          ];
        }

        availableExp -= currentGroup * CR_INFO[monster.challengeRating].exp;
      }

      setGroupMonsters(localGroupMonsters);
    },
    [clearGroup, difficulty, filteredMonsterIDs, monsters, partyLevels]
  );

  const handleOnDropDownClick = React.useCallback(
    (diff: Difficulty) => {
      handleOnChangeDifficulty(diff);
      generateRandom(diff);
    },
    [generateRandom, handleOnChangeDifficulty]
  );

  React.useEffect(() => {
    let localLoadedMonsters: (Monster | undefined)[] = [];

    groupMonsters.forEach(gm => {
      localLoadedMonsters = [...localLoadedMonsters, loadedMonsters.find(m => m.id === gm.id)];
    });

    const isAllMonstersLoaded =
      localLoadedMonsters.filter(m => !!m).length === groupMonsters.length;

    if (!randomGenerated && isAllMonstersLoaded) {
      groupMonsters.forEach(gm => {
        for (let i = 0; i < gm.qty - 1; i += 1) {
          addMonsterToGroup(
            gm.id,
            loadedMonsters.find(m => m.id === gm.id)
          );
        }
      });
      setRandomGenerated(true);
    } else {
      groupMonsters.forEach(gm => {
        if (!gm.fetched) {
          addMonsterToGroup(
            gm.id,
            loadedMonsters.find(m => m.id === gm.id)
          );
          setGroupMonsters(gms => [
            ...gms.slice(0, gms.indexOf(gm)),
            { ...gm, fetched: true },
            ...gms.slice(gms.indexOf(gm) + 1)
          ]);
        }
      });
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [
    addMonsterToGroup,
    groupMonsters.map(m => m.id),
    loadedMonsters.map(m => m.id),
    randomGenerated
    /* eslint-enable react-hooks/exhaustive-deps */
  ]);

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
