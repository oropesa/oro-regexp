const {
  REGEXP_DATETIME_DEFAULT,
  REGEXP_DATETIME_HTML,
  REGEXP_DATETIME_SQL,
  REGEXP_DATETIME_FN,
  REGEXP,
} = require('../../');

describe('regexp DATETIME_DEFAULT', () => {
  test('regexp DATETIME_DEFAULT( undefined )', () => {
    expect(REGEXP.DATETIME_DEFAULT.test(undefined)).toBe(false);
    expect(REGEXP_DATETIME_DEFAULT.test(undefined)).toBe(false);
  });
});

describe('regexp DATETIME_HTML', () => {
  test('regexp DATETIME_HTML( undefined )', () => {
    expect(REGEXP.DATETIME_HTML.test(undefined)).toBe(false);
    expect(REGEXP_DATETIME_HTML.test(undefined)).toBe(false);
  });
});

describe('regexp DATETIME_SQL', () => {
  test('regexp DATETIME_SQL( undefined )', () => {
    expect(REGEXP.DATETIME_SQL.test(undefined)).toBe(false);
    expect(REGEXP_DATETIME_SQL.test(undefined)).toBe(false);
  });
});

describe('regexp DATETIME_FN', () => {
  test('regexp DATETIME_FN( undefined )', () => {
    expect(REGEXP.DATETIME_FN('.').test(undefined)).toBe(false);
    expect(REGEXP_DATETIME_FN('.').test(undefined)).toBe(false);
  });
});
