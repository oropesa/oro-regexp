const { REGEXP_EMAIL, REGEXP } = require('../../');

describe('regexp EMAIL', () => {
  test('regexp EMAIL( undefined )', () => {
    expect(REGEXP.EMAIL.test(undefined)).toBe(false);
    expect(REGEXP_EMAIL.test(undefined)).toBe(false);
  });
});
