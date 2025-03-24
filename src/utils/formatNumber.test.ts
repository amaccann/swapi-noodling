import formatNumber from './formatNumber';

describe('formatNumber', () => {
  it('returns formatted value', () => {
    expect(formatNumber(123456)).toEqual('123,456');
    expect(formatNumber('123456')).toEqual('123,456');
    expect(formatNumber('UNKNOWN')).toEqual('UNKNOWN');
  });
});