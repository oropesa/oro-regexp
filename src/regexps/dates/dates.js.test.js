const {
  REGEXP_DATE_DEFAULT,
  REGEXP_DATE_HTML,
  REGEXP_DATE_SQL,
  REGEXP_DATE_FN,
  REGEXP,
} = require('../../');

describe('regexp DATE_DEFAULT', () => {
  test('regexp DATE_DEFAULT( undefined )', () => {
    expect(REGEXP.DATE_DEFAULT.test(undefined)).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test(undefined)).toBe(false);
  });
});

describe('regexp DATE_HTML', () => {
  test('regexp DATE_HTML( undefined )', () => {
    expect(REGEXP.DATE_HTML.test(undefined)).toBe(false);
    expect(REGEXP_DATE_HTML.test(undefined)).toBe(false);
  });
});

describe('regexp DATE_SQL', () => {
  test('regexp DATE_SQL( undefined )', () => {
    expect(REGEXP.DATE_SQL.test(undefined)).toBe(false);
    expect(REGEXP_DATE_SQL.test(undefined)).toBe(false);
  });
});

describe('regexp DATE_FN', () => {
  test('regexp DATE_FN( undefined )', () => {
    expect(REGEXP.DATE_FN('.').test(undefined)).toBe(false);
    expect(REGEXP_DATE_FN('.').test(undefined)).toBe(false);
  });
});
