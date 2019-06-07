import { PartyLevels } from 'shared/types/encounterBuilder';
import {
  getTotalPlayerCount,
  getTotalPartyExpLevels
} from 'pages/EncounterBuilder/EncounterBuilder.helpers';

export const getThreat = (partyLevels: PartyLevels) => {
  const count = getTotalPlayerCount(partyLevels);
  const levels = getTotalPartyExpLevels(partyLevels);
  const mediumExp = levels.medium;
  let singleMultiplier = 1;
  let pairMultiplier = 1.5;
  let groupMultiplier = 2;
  let trivialMultiplier = 2.5;

  if (count < 3) {
    // For small groups, increase multiplier
    singleMultiplier = 1.5;
    pairMultiplier = 2;
    groupMultiplier = 2.5;
    trivialMultiplier = 3;
  } else if (count > 5) {
    // For large groups, reduce multiplier
    singleMultiplier = 0.5;
    pairMultiplier = 1;
    groupMultiplier = 1.5;
    trivialMultiplier = 2;
  }

  return {
    deadly: levels.deadly / singleMultiplier,
    hard: levels.hard / singleMultiplier,
    medium: mediumExp / singleMultiplier,
    easy: levels.easy / singleMultiplier,
    pair: mediumExp / (2 * pairMultiplier),
    group: mediumExp / (4 * groupMultiplier),
    trivial: mediumExp / (8 * trivialMultiplier)
  };
};

export const getDangerZoneClass = (partyLevels: PartyLevels, monsterExp: number): string => {
  const threat = getThreat(partyLevels);

  if (monsterExp > threat.deadly) return 'legend-deadly';
  if (monsterExp > threat.hard) return 'legend-hard';
  if (monsterExp > threat.medium) return 'legend-medium';
  if (monsterExp > threat.easy) return 'legend-easy';
  if (monsterExp > threat.pair) return 'legend-pair';
  if (monsterExp > threat.group) return 'legend-group';
  return 'trivial';
};
