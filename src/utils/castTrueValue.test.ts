import { UNKNOWN } from '../constants';

import castTrueValue from './castTrueValue';

describe('castTrueValue', () => {
  it('coverts the given String into the "true" value', () => {
    expect(castTrueValue('123')).toEqual(123);
    expect(castTrueValue('true')).toBeTruthy();
    expect(castTrueValue('false')).toBeFalsy();

    expect(castTrueValue(true)).toBeTruthy();
    expect(castTrueValue(123)).toEqual(123);
    expect(castTrueValue(UNKNOWN)).toEqual(Number.MIN_SAFE_INTEGER);
  });
});