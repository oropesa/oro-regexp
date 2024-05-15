import {
  REGEXP,
  REGEXP_DATE_DEFAULT,
  REGEXP_DATE_FN,
  REGEXP_DATE_HTML,
  REGEXP_DATE_SQL,
} from '../../';

describe('regexp DATE_DEFAULT', () => {
  test('regexp DATE_DEFAULT( str bad sep )', () => {
    expect(REGEXP.DATE_DEFAULT.test('05/06/2019')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('05/06/2019')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str bad 0day )', () => {
    expect(REGEXP.DATE_DEFAULT.test('00-02-2020')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('00-02-2020')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str bad 2day )', () => {
    expect(REGEXP.DATE_DEFAULT.test('5-06-2019')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('5-06-2019')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str bad 2month )', () => {
    expect(REGEXP.DATE_DEFAULT.test('05-6-2019')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('05-6-2019')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str bad 4year )', () => {
    expect(REGEXP.DATE_DEFAULT.test('05-06-19')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('05-06-19')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str date )', () => {
    expect(REGEXP.DATE_DEFAULT.test('05-06-2019')).toBe(true);
    expect(REGEXP_DATE_DEFAULT.test('05-06-2019')).toBe(true);
  });

  test('regexp DATE_DEFAULT( str bad 29-2 )', () => {
    expect(REGEXP.DATE_DEFAULT.test('29-02-2019')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('29-02-2019')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str ok 29-2 )', () => {
    expect(REGEXP.DATE_DEFAULT.test('29-02-2020')).toBe(true);
    expect(REGEXP_DATE_DEFAULT.test('29-02-2020')).toBe(true);
  });

  test('regexp DATE_DEFAULT( str date last )', () => {
    expect(REGEXP.DATE_DEFAULT.test('31-12-2019')).toBe(true);
    expect(REGEXP_DATE_DEFAULT.test('31-12-2019')).toBe(true);
  });

  test('regexp DATE_DEFAULT( str time )', () => {
    expect(REGEXP.DATE_DEFAULT.test('12:45:53')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('12:45:53')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str bad datetime hour )', () => {
    expect(REGEXP.DATE_DEFAULT.test('31-12-2019 12')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('31-12-2019 12')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str bad datetime hour2 )', () => {
    expect(REGEXP.DATE_DEFAULT.test('31-12-2019 2:45')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('31-12-2019 2:45')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str bad datetime min )', () => {
    expect(REGEXP.DATE_DEFAULT.test('31-12-2019 02:4')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('31-12-2019 02:4')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str bad datetime min2 )', () => {
    expect(REGEXP.DATE_DEFAULT.test('31-12-2019 12:45:')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('31-12-2019 12:45:')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str datetime w/o sec )', () => {
    expect(REGEXP.DATE_DEFAULT.test('31-12-2019 12:45')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('31-12-2019 12:45')).toBe(false);
  });

  test('regexp DATE_DEFAULT( str datetime w sec )', () => {
    expect(REGEXP.DATE_DEFAULT.test('31-12-2019 12:45:53')).toBe(false);
    expect(REGEXP_DATE_DEFAULT.test('31-12-2019 12:45:53')).toBe(false);
  });
});

describe('regexp DATE_HTML', () => {
  test('regexp DATE_HTML( str bad sep )', () => {
    expect(REGEXP.DATE_HTML.test('05-06-2019')).toBe(false);
    expect(REGEXP_DATE_HTML.test('05-06-2019')).toBe(false);
  });

  test('regexp DATE_HTML( str bad 0day )', () => {
    expect(REGEXP.DATE_HTML.test('00/02/2020')).toBe(false);
    expect(REGEXP_DATE_HTML.test('00/02/2020')).toBe(false);
  });

  test('regexp DATE_HTML( str bad 2day )', () => {
    expect(REGEXP.DATE_HTML.test('5/06/2019')).toBe(false);
    expect(REGEXP_DATE_HTML.test('5/06/2019')).toBe(false);
  });

  test('regexp DATE_HTML( str bad 2month )', () => {
    expect(REGEXP.DATE_HTML.test('05/6/2019')).toBe(false);
    expect(REGEXP_DATE_HTML.test('05/6/2019')).toBe(false);
  });

  test('regexp DATE_HTML( str bad 4year )', () => {
    expect(REGEXP.DATE_HTML.test('05/06/19')).toBe(false);
    expect(REGEXP_DATE_HTML.test('05/06/19')).toBe(false);
  });

  test('regexp DATE_HTML( str date )', () => {
    expect(REGEXP.DATE_HTML.test('05/06/2019')).toBe(true);
    expect(REGEXP_DATE_HTML.test('05/06/2019')).toBe(true);
  });

  test('regexp DATE_HTML( str bad 29-2 )', () => {
    expect(REGEXP.DATE_HTML.test('29/02/2019')).toBe(false);
    expect(REGEXP_DATE_HTML.test('29/02/2019')).toBe(false);
  });

  test('regexp DATE_HTML( str ok 29-2 )', () => {
    expect(REGEXP.DATE_HTML.test('29/02/2020')).toBe(true);
    expect(REGEXP_DATE_HTML.test('29/02/2020')).toBe(true);
  });

  test('regexp DATE_HTML( str date last )', () => {
    expect(REGEXP.DATE_HTML.test('31/12/2019')).toBe(true);
    expect(REGEXP_DATE_HTML.test('31/12/2019')).toBe(true);
  });

  test('regexp DATE_HTML( str time )', () => {
    expect(REGEXP.DATE_HTML.test('12:45:53')).toBe(false);
    expect(REGEXP_DATE_HTML.test('12:45:53')).toBe(false);
  });

  test('regexp DATE_HTML( str bad datetime hour )', () => {
    expect(REGEXP.DATE_HTML.test('31/12/2019 12')).toBe(false);
    expect(REGEXP_DATE_HTML.test('31/12/2019 12')).toBe(false);
  });

  test('regexp DATE_HTML( str bad datetime hour2 )', () => {
    expect(REGEXP.DATE_HTML.test('31/12/2019 2:45')).toBe(false);
    expect(REGEXP_DATE_HTML.test('31/12/2019 2:45')).toBe(false);
  });

  test('regexp DATE_HTML( str bad datetime min )', () => {
    expect(REGEXP.DATE_HTML.test('31/12/2019 02:4')).toBe(false);
    expect(REGEXP_DATE_HTML.test('31/12/2019 02:4')).toBe(false);
  });

  test('regexp DATE_HTML( str bad datetime min2 )', () => {
    expect(REGEXP.DATE_HTML.test('31/12/2019 12:45:')).toBe(false);
    expect(REGEXP_DATE_HTML.test('31/12/2019 12:45:')).toBe(false);
  });

  test('regexp DATE_HTML( str datetime w/o sec )', () => {
    expect(REGEXP.DATE_HTML.test('31/12/2019 12:45')).toBe(false);
    expect(REGEXP_DATE_HTML.test('31/12/2019 12:45')).toBe(false);
  });

  test('regexp DATE_HTML( str datetime w sec )', () => {
    expect(REGEXP.DATE_HTML.test('31/12/2019 12:45:53')).toBe(false);
    expect(REGEXP_DATE_HTML.test('31/12/2019 12:45:53')).toBe(false);
  });
});

describe('regexp DATE_SQL', () => {
  test('regexp DATE_SQL( str bad sep )', () => {
    expect(REGEXP.DATE_SQL.test('2019/06/05')).toBe(false);
    expect(REGEXP_DATE_SQL.test('2019/06/05')).toBe(false);
  });

  test('regexp DATE_SQL( str bad 0day )', () => {
    expect(REGEXP.DATE_SQL.test('2020-02-00')).toBe(false);
    expect(REGEXP_DATE_SQL.test('2020-02-00')).toBe(false);
  });

  test('regexp DATE_SQL( str bad 2day )', () => {
    expect(REGEXP.DATE_SQL.test('2019-06-5')).toBe(false);
    expect(REGEXP_DATE_SQL.test('2019-06-5')).toBe(false);
  });

  test('regexp DATE_SQL( str bad 2month )', () => {
    expect(REGEXP.DATE_SQL.test('2019-6-05')).toBe(false);
    expect(REGEXP_DATE_SQL.test('2019-6-05')).toBe(false);
  });

  test('regexp DATE_SQL( str bad 4year )', () => {
    expect(REGEXP.DATE_SQL.test('19-06-05')).toBe(false);
    expect(REGEXP_DATE_SQL.test('19-06-05')).toBe(false);
  });

  test('regexp DATE_SQL( str date )', () => {
    expect(REGEXP.DATE_SQL.test('2019-06-05')).toBe(true);
    expect(REGEXP_DATE_SQL.test('2019-06-05')).toBe(true);
  });

  test('regexp DATE_SQL( str bad 29-2 )', () => {
    expect(REGEXP.DATE_SQL.test('2019-02-29')).toBe(false);
    expect(REGEXP_DATE_SQL.test('2019-02-29')).toBe(false);
  });

  test('regexp DATE_SQL( str ok 29-2 )', () => {
    expect(REGEXP.DATE_SQL.test('2020-02-29')).toBe(true);
    expect(REGEXP_DATE_SQL.test('2020-02-29')).toBe(true);
  });

  test('regexp DATE_SQL( str date last )', () => {
    expect(REGEXP.DATE_SQL.test('2019-12-31')).toBe(true);
    expect(REGEXP_DATE_SQL.test('2019-12-31')).toBe(true);
  });

  test('regexp DATE_SQL( str time )', () => {
    expect(REGEXP.DATE_SQL.test('12:45:53')).toBe(false);
    expect(REGEXP_DATE_SQL.test('12:45:53')).toBe(false);
  });

  test('regexp DATE_SQL( str bad datetime hour )', () => {
    expect(REGEXP.DATE_SQL.test('2019-12-31 12')).toBe(false);
    expect(REGEXP_DATE_SQL.test('2019-12-31 12')).toBe(false);
  });

  test('regexp DATE_SQL( str bad datetime hour2 )', () => {
    expect(REGEXP.DATE_SQL.test('2019-12-31 2:45')).toBe(false);
    expect(REGEXP_DATE_SQL.test('2019-12-31 2:45')).toBe(false);
  });

  test('regexp DATE_SQL( str bad datetime min )', () => {
    expect(REGEXP.DATE_SQL.test('2019-12-31 02:4')).toBe(false);
    expect(REGEXP_DATE_SQL.test('2019-12-31 02:4')).toBe(false);
  });

  test('regexp DATE_SQL( str bad datetime min2 )', () => {
    expect(REGEXP.DATE_SQL.test('2019-12-31 12:45:')).toBe(false);
    expect(REGEXP_DATE_SQL.test('2019-12-31 12:45:')).toBe(false);
  });

  test('regexp DATE_SQL( str datetime w/o sec )', () => {
    expect(REGEXP.DATE_SQL.test('2019-12-31 12:45')).toBe(false);
    expect(REGEXP_DATE_SQL.test('2019-12-31 12:45')).toBe(false);
  });

  test('regexp DATE_SQL( str datetime w sec )', () => {
    expect(REGEXP.DATE_SQL.test('2019-12-31 12:45:53')).toBe(false);
    expect(REGEXP_DATE_SQL.test('2019-12-31 12:45:53')).toBe(false);
  });
});

describe('regexp DATE_FN', () => {
  test('regexp DATE_FN( str bad sep )', () => {
    expect(REGEXP.DATE_FN('.').test('05-06-2019')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('05-06-2019')).toBe(false);
  });

  test('regexp DATE_FN( str bad 0day )', () => {
    expect(REGEXP.DATE_FN('.').test('00.02.2020')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('00.02.2020')).toBe(false);
  });

  test('regexp DATE_FN( str bad 2day )', () => {
    expect(REGEXP.DATE_FN('.').test('5.06.2019')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('5.06.2019')).toBe(false);
  });

  test('regexp DATE_FN( str bad 2month )', () => {
    expect(REGEXP.DATE_FN('.').test('05.6.2019')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('05.6.2019')).toBe(false);
  });

  test('regexp DATE_FN( str bad 4year )', () => {
    expect(REGEXP.DATE_FN('.').test('05.06.19')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('05.06.19')).toBe(false);
  });

  test('regexp DATE_FN( str date )', () => {
    expect(REGEXP.DATE_FN('.').test('05.06.2019')).toBe(true);
    expect(REGEXP_DATE_FN('.').test('05.06.2019')).toBe(true);
  });

  test('regexp DATE_FN( str date default)', () => {
    expect(REGEXP.DATE_FN().test('05062019')).toBe(true);
    expect(REGEXP_DATE_FN().test('05062019')).toBe(true);
  });

  test('regexp DATE_FN( str bad 29-2 )', () => {
    expect(REGEXP.DATE_FN('.').test('29.02.2019')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('29.02.2019')).toBe(false);
  });

  test('regexp DATE_FN( str ok 29-2 )', () => {
    expect(REGEXP.DATE_FN('.').test('29.02.2020')).toBe(true);
    expect(REGEXP_DATE_FN('.').test('29.02.2020')).toBe(true);
  });

  test('regexp DATE_FN( str date last )', () => {
    expect(REGEXP.DATE_FN('.').test('31.12.2019')).toBe(true);
    expect(REGEXP_DATE_FN('.').test('31.12.2019')).toBe(true);
  });

  test('regexp DATE_FN( str time )', () => {
    expect(REGEXP.DATE_FN('.').test('12:45:53')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('12:45:53')).toBe(false);
  });

  test('regexp DATE_FN( str bad datetime hour )', () => {
    expect(REGEXP.DATE_FN('.').test('31.12.2019 12')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('31.12.2019 12')).toBe(false);
  });

  test('regexp DATE_FN( str bad datetime hour2 )', () => {
    expect(REGEXP.DATE_FN('.').test('31.12.2019 2:45')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('31.12.2019 2:45')).toBe(false);
  });

  test('regexp DATE_FN( str bad datetime min )', () => {
    expect(REGEXP.DATE_FN('.').test('31.12.2019 02:4')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('31.12.2019 02:4')).toBe(false);
  });

  test('regexp DATE_FN( str bad datetime min2 )', () => {
    expect(REGEXP.DATE_FN('.').test('31.12.2019 12:45:')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('31.12.2019 12:45:')).toBe(false);
  });

  test('regexp DATE_FN( str datetime w/o sec )', () => {
    expect(REGEXP.DATE_FN('.').test('31.12.2019 12:45')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('31.12.2019 12:45')).toBe(false);
  });

  test('regexp DATE_FN( str datetime w sec )', () => {
    expect(REGEXP.DATE_FN('.').test('31.12.2019 12:45:53')).toBe(false);
    expect(REGEXP_DATE_FN('.').test('31.12.2019 12:45:53')).toBe(false);
  });
});
