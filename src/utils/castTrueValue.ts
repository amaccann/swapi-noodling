import { UNKNOWN } from '../constants';

/**
 * 
 * @param rawValue The original value given
 * @description Checks the "true" typeof the argument, catching number strings to be converted to actual Number types.
 * @returns string|number|boolean
 */
export default function castTrueValue<T>(rawValue: string | number | boolean | T[keyof T]) {
  if (typeof rawValue !== 'string') {
    return rawValue;
  }

  switch (true) {
  case /^\d+$/.test(rawValue):
    return Number(rawValue);
  case rawValue === UNKNOWN:
    return Number.MIN_SAFE_INTEGER;
  case rawValue === 'true' || rawValue === 'false':
    return rawValue === 'true';
  default:
    return rawValue;
  }
}