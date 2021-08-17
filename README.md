# oro-regexp

REGEXP is just an object with regular expressions.

```shell
npm install oro-regexp
```

### Example:
```js
const { REGEXP } = require( 'oro-regexp' );

REGEXP.EMAIL.test( 'info@example' ) // false
REGEXP.EMAIL.test( 'info@example.com' ) // true
```


### Regular Expressions
```js
//region Emails

REGEXP.EMAIL 

//region Urls

REGEXP.URL_YOUTUBE

//region Dates

REGEXP.DATETIME_DEFAULT_STRICT // 30-12-2020 11:59[:59]

REGEXP.DATETIME_HTML_STRICT // 30/12/2020 11:59[:59]

REGEXP.DATETIME_FN_STRICT( '.' ) // 30.12.2020 11:59[:59]

REGEXP.DATETIME_SQL_STRICT // 2020-12-30 11:59[:59]

REGEXP.DATETIME_DEFAULT // 30-12-2020 [11:59[:59]]

REGEXP.DATETIME_HTML // 30/12/2020 [11:59[:59]]

REGEXP.DATETIME_FN( '.' ) // 30.12.2020 [11:59[:59]]

REGEXP.DATETIME_SQL // 2020-12-30 [11:59[:59]]

REGEXP.DATE_DEFAULT // 30-12-2020

REGEXP.DATE_HTML // 30/12/2020

REGEXP.DATE_FN( '.' ) // 30.12.2020

REGEXP.DATE_SQL // 2020-12-30
```
