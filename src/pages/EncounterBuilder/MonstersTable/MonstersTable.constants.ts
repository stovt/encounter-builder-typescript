import { CR_INFO } from 'shared/constants';

export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS: number[] = [10, 25, 50, 100, 250, 500, 1000];
export const CR_VALUES_STR: string[] = [
  '0',
  '1/8',
  '1/4',
  '1/2',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30'
];
export const CR_VALUES_NUMB: number[] = CR_VALUES_STR.map(cr => CR_INFO[cr].numeric);
export const SIZES: string[] = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];
export const TYPES: string[] = [
  'aberration',
  'beast',
  'celestial',
  'construct',
  'dragon',
  'elemental',
  'fey',
  'fiend',
  'giant',
  'humanoid',
  'monstrosity',
  'ooze',
  'plant',
  'undead',
  'swarm',
  'titan'
];
