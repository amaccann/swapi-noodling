import { UNKNOWN } from '../constants';

const CHARACTER_TABLE = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

export default function romanize(num?: number): string {
  let result = '';
  let i: keyof typeof CHARACTER_TABLE;
  if (!num) {
    return UNKNOWN;
  }

  let currentValue = num;

  for (i in CHARACTER_TABLE ) {
    while ( currentValue >= CHARACTER_TABLE[i] ) {
      result += i;
      currentValue -= CHARACTER_TABLE[i];
    }
  }

  return result;
}
