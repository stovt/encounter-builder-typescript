import { MonstersBase } from 'shared/types/monsters';
import { shuffle } from 'shared/helpers';
import { CR_LIST } from './RandomGenerator.constants';

export const getEncounterTemplate = (maxMonsters: number) => {
  let templates = [
    [1],
    [1, 1],
    [1, 2],
    [1, 5],
    [1, 1, 1],
    [1, 1, 2],
    [1, 2, 3],
    [2, 2],
    [2, 4],
    [8]
  ];
  if (maxMonsters) {
    templates = templates.filter(t => {
      const sum = t.reduce((a, b) => {
        return a + b;
      });
      return sum <= maxMonsters;
    });
  }
  const groups: number[] = JSON.parse(
    JSON.stringify(templates[Math.floor(Math.random() * templates.length)])
  );
  const total = groups.reduce((a, b) => a + b);

  // Silly hack to clone object
  return {
    total,
    groups
  };
};

const getShuffledMonsterList = (crString: string, monsters: MonstersBase) => {
  const list = monsters.filter(monster => monster.challengeRating === crString).slice(0);

  return shuffle(list) as MonstersBase;
};

export const getBestMonster = (targetExp: number, filteredMonsters: MonstersBase) => {
  let bestBelow = 0;
  let bestAbove;
  let crIndex;
  let currentIndex;
  let step = -1;
  let i;

  for (i = 1; i < CR_LIST.length; i += 1) {
    if (CR_LIST[i].exp < targetExp) {
      bestBelow = i;
    } else {
      bestAbove = i;
      break;
    }
  }

  if (targetExp - CR_LIST[bestBelow].exp < CR_LIST[bestAbove as number].exp - targetExp) {
    crIndex = bestBelow;
  } else {
    crIndex = bestAbove as number;
  }

  currentIndex = crIndex;

  let monsterList = getShuffledMonsterList(CR_LIST[crIndex].string, filteredMonsters);

  while (true) {
    // If we run through all the monsters from this level, check a different level
    if (monsterList.length === 0) {
      // there were no monsters found lower than target exp, so we have to start checking higher
      if (currentIndex === 0) {
        // Reset currentIndex
        currentIndex = crIndex;
        // Start looking up instead of down
        step = 1;
      }

      currentIndex += step;
      monsterList = getShuffledMonsterList(CR_LIST[currentIndex].string, filteredMonsters);
    } else {
      return monsterList[0];
    }
  }
};
