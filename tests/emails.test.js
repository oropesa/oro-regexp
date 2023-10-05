const { REGEXP_EMAIL, REGEXP } = require('../dist/index');

describe('regexp EMAIL', () => {
  test('regexp EMAIL( undefined )', () => {
    expect(REGEXP.EMAIL.test(undefined)).toBe(false);
    expect(REGEXP_EMAIL.test(undefined)).toBe(false);
  });

  test('regexp EMAIL( bad str no @ )', () => {
    expect(REGEXP.EMAIL.test('chacho.com')).toBe(false);
    expect(REGEXP_EMAIL.test('chacho.com')).toBe(false);
  });

  test('regexp EMAIL( bad str no dot )', () => {
    expect(REGEXP.EMAIL.test('chacho@chacho')).toBe(false);
    expect(REGEXP_EMAIL.test('chacho@chacho')).toBe(false);
  });

  test('regexp EMAIL( bad str @ )', () => {
    expect(REGEXP.EMAIL.test('chacho@cha@cho.com')).toBe(false);
    expect(REGEXP_EMAIL.test('chacho@cha@cho.com')).toBe(false);
  });

  test('regexp EMAIL( str )', () => {
    expect(REGEXP.EMAIL.test('chacho@chacho.com')).toBe(true);
    expect(REGEXP_EMAIL.test('chacho@chacho.com')).toBe(true);
  });

  test('regexp EMAIL( str dots )', () => {
    expect(REGEXP.EMAIL.test('chacho@chacho.com.ar.es')).toBe(true);
    expect(REGEXP_EMAIL.test('chacho@chacho.com.ar.es')).toBe(true);
  });

  test('regexp EMAIL( str dots plus )', () => {
    expect(REGEXP.EMAIL.test('ano_ther.example+1@subdomain.domain.extension')).toBe(true);
    expect(REGEXP_EMAIL.test('ano_ther.example+1@subdomain.domain.extension')).toBe(true);
  });
});
