export type MonsterSize = 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge' | 'Gargantuan';
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
export interface MonsterStateValue {
  label: string;
  value: string;
}
export type MonsterState = MonsterStateValue[];

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

export interface MonsterBase {
  id: string;
  name: string;
  type: MonsterType;
  challenge_rating: MonsterCR;
  size: MonsterSize;
  hit_points: number;
}

export type MonstersBase = MonsterBase[];

export interface Monster extends MonsterBase {
  subtype: string;
  alignment: string;
  armor_class: number;
  armor_desc: string;
  hit_dice: string;
  speed: MonsterSpeed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  strength_save: number;
  dexterity_save: number;
  constitution_save: number;
  intelligence_save: number;
  wisdom_save: number;
  charisma_save: number;
  perception: number;
  senses: string;
  languages: string;
  acrobatics: number;
  animal_handling: number;
  arcana: number;
  athletics: number;
  deception: number;
  history: number;
  insight: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  performance: number;
  persuasion: number;
  religion: number;
  sleight_of_hand: number;
  stealth: number;
  survival: number;
  special_abilities: MonsterActions;
  actions: MonsterActions;
  legendary_actions: MonsterActions;
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
