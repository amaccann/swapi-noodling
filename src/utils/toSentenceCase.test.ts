import toSentenceCase from './toSentenceCase';

describe('toSentenceCase', () => {
  it('returns calculated sentence case', () => {
    expect(toSentenceCase('hellothere')).toEqual('Hellothere');
    expect(toSentenceCase('hello-there')).toEqual('Hello-there');
  });

  it('defaults to empty string if no args given', () => {
    expect(toSentenceCase(undefined)).toEqual('');
    expect(toSentenceCase('')).toEqual('');
    expect(toSentenceCase()).toEqual('');
  });
});