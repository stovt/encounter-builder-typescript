export type MonsterSize = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gargantuan';
export type MonsterCR =
  | '0'
  | '1/8'
  | '1/4'
  | '1/2'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30';
export type MonsterType =
  | 'aberration'
  | 'beast'
  | 'celestial'
  | 'construct'
  | 'dragon'
  | 'elemental'
  | 'fey'
  | 'fiend'
  | 'giant'
  | 'humanoid'
  | 'monstrosity'
  | 'ooze'
  | 'plant'
  | 'undead'
  | 'swarm'
  | 'titan';
export type MonsterAlignment =
  | 'lg'
  | 'ln'
  | 'le'
  | 'ng'
  | 'nn'
  | 'ne'
  | 'cg'
  | 'cn'
  | 'ce'
  | 'al'
  | 'ae'
  | 'ac'
  | 'ag'
  | 'nl'
  | 'ng'
  | 'ne'
  | 'nc';
export interface MonsterSkills {
  acrobatics: number;
  animalHandling: number;
  arcana: number;
  athletics: number;
  deception: number;
  history: number;
  insight: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  perception: number;
  performance: number;
  persuasion: number;
  religion: number;
  sleightOfHand: number;
  stealth: number;
  survival: number;
}

export interface MonsterAction {
  name: string;
  desc: string;
}
export interface MonsterSpeed {
  walk?: number;
  burrow?: number;
  fly?: number;
  swim?: number;
  climb?: number;
}
export type MonsterActions = MonsterAction[];

export interface MonsterStateValue {
  label: string;
  value: string;
}
export type MonsterState = MonsterStateValue[];

export interface MonsterBase {
  id: string;
  name: string;
  type: MonsterType;
  challengeRating: MonsterCR;
  size: MonsterSize;
}

export type MonstersBase = MonsterBase[];

export interface Monster extends MonsterBase {
  hitPoints: number;
  subtype: string;
  alignment: MonsterAlignment;
  damageImmunities?: string;
  damageResistances?: string;
  conditionImmunities?: string;
  damageVulnerabilities?: string;
  armorClass: number;
  armorDesc: string;
  hitDice: string;
  speed: MonsterSpeed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  strengthSave: number;
  dexteritySave: number;
  constitutionSave: number;
  intelligenceSave: number;
  wisdomSave: number;
  charismaSave: number;
  senses: string;
  languages: string;
  skills: MonsterSkills;
  specialAbilities: MonsterActions;
  actions: MonsterActions;
  legendaryActions: MonsterActions;
  reactions: MonsterActions;
}

export type Monsters = Monster[];

export interface BattleMonster extends Monster {
  initiative: number;
  state: MonsterState;
}

export interface BattleMonsterRow {
  rowID: string;
  monster: BattleMonster;
}
export type BattleMonsterRows = BattleMonsterRow[];
