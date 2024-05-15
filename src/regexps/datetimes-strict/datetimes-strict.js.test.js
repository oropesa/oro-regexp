const {
  REGEXP_DATETIME_DEFAULT_STRICT,
  REGEXP_DATETIME_HTML_STRICT,
  REGEXP_DATETIME_SQL_STRICT,
  REGEXP_DATETIME_FN_STRICT,
  REGEXP,
} = require('../../');

describe('regexp DATETIME_DEFAULT_STRICT', () => {
  test('regexp DATETIME_DEFAULT_STRICT( undefined )', () => {
    expect(REGEXP.DATETIME_DEFAULT_STRICT.test(undefined)).toBe(false);
    expect(REGEXP_DATETIME_DEFAULT_STRICT.test(undefined)).toBe(false);
  });
});

describe('regexp DATETIME_HTML_STRICT', () => {
  test('regexp DATETIME_HTML_STRICT( undefined )', () => {
    expect(REGEXP.DATETIME_HTML_STRICT.test(undefined)).toBe(false);
    expect(REGEXP_DATETIME_HTML_STRICT.test(undefined)).toBe(false);
  });
});

describe('regexp DATETIME_SQL_STRICT', () => {
  test('regexp DATETIME_SQL_STRICT( undefined )', () => {
    expect(REGEXP.DATETIME_SQL_STRICT.test(undefined)).toBe(false);
    expect(REGEXP_DATETIME_SQL_STRICT.test(undefined)).toBe(false);
  });
});

describe('regexp DATETIME_FN_STRICT', () => {
  test('regexp DATETIME_FN_STRICT( undefined )', () => {
    expect(REGEXP.DATETIME_FN_STRICT('.').test(undefined)).toBe(false);
    expect(REGEXP_DATETIME_FN_STRICT('.').test(undefined)).toBe(false);
  });
});
