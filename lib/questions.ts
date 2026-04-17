import { questionsPart1 } from './questions-part1';
import { questionsPart2 } from './questions-part2';
import { questionsPart3 } from './questions-part3';
import { questionsPart4 } from './questions-part4';
import { Question } from './types';

export const questions: Question[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
  ...questionsPart4,
];

export type { Question };
