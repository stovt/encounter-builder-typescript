/* eslint-disable @typescript-eslint/camelcase */
import { CR_INFO } from 'shared/constants';
import { Difficulty } from './RandomGenerator.types';

export const LEVEL_TYPES: Difficulty[] = ['easy', 'medium', 'hard', 'deadly'];
export const DEFAULT_RANDOM_DIFFICULTY: Difficulty = 'medium';
export const MAX_MOSTERS_COUNT = 10;
export const FUDGE_FACTOR = 1.1; // The algorithm is conservative in spending exp, so this tries to get it closer to the actual medium value

export const CR_LIST = [
  CR_INFO['0'],
  CR_INFO['1/8'],
  CR_INFO['1/4'],
  CR_INFO['1/2'],
  CR_INFO['1'],
  CR_INFO['2'],
  CR_INFO['3'],
  CR_INFO['4'],
  CR_INFO['5'],
  CR_INFO['6'],
  CR_INFO['7'],
  CR_INFO['8'],
  CR_INFO['9'],
  CR_INFO['10'],
  CR_INFO['11'],
  CR_INFO['12'],
  CR_INFO['13'],
  CR_INFO['14'],
  CR_INFO['15'],
  CR_INFO['16'],
  CR_INFO['17'],
  CR_INFO['18'],
  CR_INFO['19'],
  CR_INFO['20'],
  CR_INFO['21'],
  CR_INFO['22'],
  CR_INFO['23'],
  CR_INFO['24'],
  CR_INFO['25'],
  CR_INFO['26'],
  CR_INFO['27'],
  CR_INFO['28'],
  CR_INFO['29'],
  CR_INFO['30']
];
