import { PartyLevel, PartyLevels, Groups } from 'shared/types/encounterBuilder';
import { CR_INFO } from 'shared/constants';

type PartyLevelsType = Record<'easy' | 'medium' | 'hard' | 'deadly' | 'budget', number>;

const getExpLevels = (partyLevel: PartyLevel): PartyLevelsType => ({
  easy: partyLevel.playerCount * partyLevel.level.easy,
  medium: partyLevel.playerCount * partyLevel.level.medium,
  hard: partyLevel.playerCount * partyLevel.level.hard,
  deadly: partyLevel.playerCount * partyLevel.level.deadly,
  budget: partyLevel.playerCount * partyLevel.level.budget
});

export const getTotalPartyExpLevels = (partyLevels: PartyLevels): PartyLevelsType => {
  const result = partyLevels.reduce(
    (accum, curLevel) => {
      const curExpLevels = getExpLevels(curLevel);

      return {
        easy: accum.easy + curExpLevels.easy,
        medium: accum.medium + curExpLevels.medium,
        hard: accum.hard + curExpLevels.hard,
        deadly: accum.deadly + curExpLevels.deadly,
        budget: accum.budget + curExpLevels.budget
      };
    },
    {
      easy: 0,
      medium: 0,
      hard: 0,
      deadly: 0,
      budget: 0
    }
  );
  return result;
};

export const getTotalExp = (groups: Groups): number =>
  groups.reduce((acc, group) => acc + CR_INFO[group.monster.challenge_rating].exp * group.qty, 0);

export const getTotalQty = (groups: Groups): number =>
  groups.reduce((acc, group) => acc + group.qty, 0);

export const getTotalPlayerCount = (partyLevels: PartyLevels): number =>
  partyLevels.reduce((acc, pl) => acc + pl.playerCount, 0);

const getMultiplier = (playerCount: number, monsterCount: number): number => {
  let multiplierCategory;

  const multipliers = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5];

  if (monsterCount === 0) return 0;
  if (monsterCount === 1) multiplierCategory = 1;
  else if (monsterCount === 2) multiplierCategory = 2;
  else if (monsterCount < 7) multiplierCategory = 3;
  else if (monsterCount < 11) multiplierCategory = 4;
  else if (monsterCount < 15) multiplierCategory = 5;
  else multiplierCategory = 6;

  if (playerCount < 3) {
    // Increase multiplier for parties of one and two
    multiplierCategory += 1;
  } else if (playerCount > 5) {
    // Decrease multiplier for parties of six through eight
    multiplierCategory -= 1;
  }

  return multipliers[multiplierCategory];
};

export const getAdjustedExp = (groups: Groups, partyLevels: PartyLevels): number => {
  const qty = getTotalQty(groups);
  const exp = getTotalExp(groups);
  const totalPlayerCount = getTotalPlayerCount(partyLevels);
  const multiplier = getMultiplier(totalPlayerCount, qty);

  return Math.floor(exp * multiplier);
};

export const getDifficulty = (groups: Groups, partyLevels: PartyLevels): string => {
  const exp = getAdjustedExp(groups, partyLevels);
  const levels = getTotalPartyExpLevels(partyLevels);

  if (exp < levels.easy) return '';
  if (exp < levels.medium) return 'easy';
  if (exp < levels.hard) return 'medium';
  if (exp < levels.deadly) return 'hard';
  return 'deadly';
};
