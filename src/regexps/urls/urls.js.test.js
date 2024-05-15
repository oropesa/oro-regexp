const { REGEXP_URL_YOUTUBE, REGEXP } = require('../../');

describe('regexp URL_YOUTUBE', () => {
  test('regexp URL_YOUTUBE( undefined )', () => {
    expect(REGEXP.URL_YOUTUBE.test()).toBe(false);
    expect(REGEXP_URL_YOUTUBE.test()).toBe(false);
  });
});
