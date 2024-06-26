import { REGEXP, REGEXP_URL_YOUTUBE } from '../../';

describe('regexp URL_YOUTUBE', () => {
  test('regexp URL_YOUTUBE( str bad )', () => {
    expect(REGEXP.URL_YOUTUBE.test('https://google.com')).toBe(false);
    expect(REGEXP_URL_YOUTUBE.test('https://google.com')).toBe(false);
  });

  test('regexp URL_YOUTUBE( str bad2 )', () => {
    expect(REGEXP.URL_YOUTUBE.test('https://youtube.com')).toBe(false);
    expect(REGEXP_URL_YOUTUBE.test('https://youtube.com')).toBe(false);
  });

  test('regexp URL_YOUTUBE( str bad3 )', () => {
    expect(REGEXP.URL_YOUTUBE.test('youtube.com/watch?v=dQw4w9WgXc')).toBe(false);
    expect(REGEXP_URL_YOUTUBE.test('youtube.com/watch?v=dQw4w9WgXc')).toBe(false);
  });

  test('regexp URL_YOUTUBE( str )', () => {
    expect(REGEXP.URL_YOUTUBE.test('youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
    expect(REGEXP_URL_YOUTUBE.test('youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
  });

  test('regexp URL_YOUTUBE( str https )', () => {
    expect(REGEXP.URL_YOUTUBE.test('https://youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
    expect(REGEXP_URL_YOUTUBE.test('https://youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
  });

  test('regexp URL_YOUTUBE( str http )', () => {
    expect(REGEXP.URL_YOUTUBE.test('http://youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
    expect(REGEXP_URL_YOUTUBE.test('http://youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
  });

  test('regexp URL_YOUTUBE( str www )', () => {
    expect(REGEXP.URL_YOUTUBE.test('www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
    expect(REGEXP_URL_YOUTUBE.test('www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
  });

  test('regexp URL_YOUTUBE( str m )', () => {
    expect(REGEXP.URL_YOUTUBE.test('m.youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
    expect(REGEXP_URL_YOUTUBE.test('m.youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
  });

  test('regexp URL_YOUTUBE( str bad short )', () => {
    expect(REGEXP.URL_YOUTUBE.test('youtu.be')).toBe(false);
    expect(REGEXP_URL_YOUTUBE.test('youtu.be')).toBe(false);
  });

  test('regexp URL_YOUTUBE( str short )', () => {
    expect(REGEXP.URL_YOUTUBE.test('youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(REGEXP_URL_YOUTUBE.test('youtu.be/dQw4w9WgXcQ')).toBe(true);
  });
});
