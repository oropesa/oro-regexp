import type { RegExpDateFn } from './regexps';
import {
  REGEXP_DATETIME_DEFAULT,
  REGEXP_DATETIME_DEFAULT_STRICT,
  REGEXP_DATETIME_FN,
  REGEXP_DATETIME_FN_STRICT,
  REGEXP_DATETIME_HTML,
  REGEXP_DATETIME_HTML_STRICT,
  REGEXP_DATETIME_SQL,
  REGEXP_DATETIME_SQL_STRICT,
  REGEXP_DATE_DEFAULT,
  REGEXP_DATE_FN,
  REGEXP_DATE_HTML,
  REGEXP_DATE_SQL,
  REGEXP_EMAIL,
  REGEXP_URL_YOUTUBE,
} from './regexps';

//

export interface REGEXPObject {
  EMAIL: RegExp;

  URL_YOUTUBE: RegExp;

  DATETIME_DEFAULT_STRICT: RegExp;
  DATETIME_HTML_STRICT: RegExp;
  DATETIME_SQL_STRICT: RegExp;
  DATETIME_FN_STRICT: RegExpDateFn;

  DATETIME_DEFAULT: RegExp;
  DATETIME_HTML: RegExp;
  DATETIME_SQL: RegExp;
  DATETIME_FN: RegExpDateFn;

  DATE_DEFAULT: RegExp;
  DATE_HTML: RegExp;
  DATE_SQL: RegExp;
  DATE_FN: RegExpDateFn;
}

export const REGEXP: REGEXPObject = {
  // region Emails

  EMAIL: REGEXP_EMAIL,

  // endregion
  // region Urls

  URL_YOUTUBE: REGEXP_URL_YOUTUBE,

  // endregion
  // region Dates

  DATETIME_DEFAULT_STRICT: REGEXP_DATETIME_DEFAULT_STRICT,
  DATETIME_HTML_STRICT: REGEXP_DATETIME_HTML_STRICT,
  DATETIME_SQL_STRICT: REGEXP_DATETIME_SQL_STRICT,
  DATETIME_FN_STRICT: REGEXP_DATETIME_FN_STRICT,

  DATETIME_DEFAULT: REGEXP_DATETIME_DEFAULT,
  DATETIME_HTML: REGEXP_DATETIME_HTML,
  DATETIME_SQL: REGEXP_DATETIME_SQL,
  DATETIME_FN: REGEXP_DATETIME_FN,

  DATE_DEFAULT: REGEXP_DATE_DEFAULT,
  DATE_HTML: REGEXP_DATE_HTML,
  DATE_SQL: REGEXP_DATE_SQL,
  DATE_FN: REGEXP_DATE_FN,

  // endregion
};
