## 2.0.0 / 2023-10-05
* Refactored `*.s` to `src/*.ts`.
* Updated _package_ as `type: "module"`.
* Added `tsup` and now _package_ is compiled to `cjs` _(common)_ and `mjs` _(module)_.
* Added _github actions_:
  * `validate_pr_to_master`
  * `npm_publish_on_pr_merge_to_master`.
* Added `husky` (to ensure only valid commits).
* Added `eslint` (and applied it).
* Added `prettier` (and applied it).
* Updated _package description_
* Updated _dev_ libs:
  * `@babel/core` to `v7.23.0`.
  * `@babel/preset-env` to `v7.22.20`.
  * `@babel/preset-typescript` to `v7.23.0`.
  * `@types/jest` to `v29.5.5`.
  * `babel-jest` to `v29.7.0`.
  * `jest` to `v29.7.0`.

## 1.3.0 / 2023-04-30
* Added _ts tests_.
* Improved _tests_.
* Improved _readme_.
* Updated lib-dev `jest` to `v29.5.0`.
* Updated `REGEXP` and allow to get each `RegExp` in an individual _variable_:
  * `REGEXP` _// still being same object w/ all _regexps__
  * `REGEXP_EMAIL`
  * `REGEXP_URL_YOUTUBE`
  * `REGEXP_DATETIME_DEFAULT_STRICT`
  * `REGEXP_DATETIME_HTML_STRICT`
  * `REGEXP_DATETIME_SQL_STRICT`
  * `REGEXP_DATETIME_FN_STRICT`
  * `REGEXP_DATETIME_DEFAULT`
  * `REGEXP_DATETIME_HTML`
  * `REGEXP_DATETIME_SQL`
  * `REGEXP_DATETIME_FN`
  * `REGEXP_DATE_DEFAULT`
  * `REGEXP_DATE_HTML`
  * `REGEXP_DATE_SQL`
  * `REGEXP_DATE_FN`

## 1.2.0 / 2022-08-02
* Updated _Readme_ and `tests/`.
* Added `package-lock.json`.
* Updated lib-dev `jest` to `v28.1.3`.

## 1.1.0 / 2021-08-17
* Added _regexps_ `DATETIME_FN_STRICT`,  `DATETIME_FN`, `DATE_FN`.

## 1.0.2 & 1.0.1 / 2021-08-13
* Fixed `package.json` info.
* Added `MIT License`.
* Added _package_ in `github.com` & `npmjs.com`.

## 1.0.0 / 2021-08-13
* Added _unit testing_ `Jest`.
* Added _regexps_ `DATETIME_SQL_STRICT`,  `DATETIME_SQL`, `DATE_SQL`.
* Fixed _regexps_ `EMAIL`,  `URL_YOUTUBE`, `DATETIME_DEFAULT_STRICT`.

## 0.1.0 / 2021-04-21
* Added changelog.
* Change `class REGEXP` by `object REGEXP`.

## 0.0.1 / 2021-03-22
* Init _package_.