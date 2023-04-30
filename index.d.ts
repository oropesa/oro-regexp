export type RegExpDateFn = ( sep?: string ) => RegExp;

export type REGEXPObject = {
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

export const REGEXP: REGEXPObject

export const REGEXP_EMAIL: RegExp;

export const REGEXP_URL_YOUTUBE: RegExp;

export const REGEXP_DATETIME_DEFAULT_STRICT: RegExp;
export const REGEXP_DATETIME_HTML_STRICT: RegExp;
export const REGEXP_DATETIME_SQL_STRICT: RegExp;
export const REGEXP_DATETIME_FN_STRICT: RegExpDateFn;

export const REGEXP_DATETIME_DEFAULT: RegExp;
export const REGEXP_DATETIME_HTML: RegExp;
export const REGEXP_DATETIME_FN: RegExpDateFn;
export const REGEXP_DATETIME_SQL: RegExp;

export const REGEXP_DATE_DEFAULT: RegExp;
export const REGEXP_DATE_HTML: RegExp;
export const REGEXP_DATE_FN: RegExpDateFn;
export const REGEXP_DATE_SQL: RegExp;