import { UNKNOWN } from '../constants';
import romanize from './romanize';

describe('romanize a given number', () => {
  it('returns the Roman Numeral for a given number', () => {
    expect(romanize(1)).toEqual('I');
    expect(romanize(6)).toEqual('VI');
    expect(romanize(100)).toEqual('C');
    expect(romanize(117)).toEqual('CXVII');
    expect(romanize()).toEqual(UNKNOWN);
  });
});