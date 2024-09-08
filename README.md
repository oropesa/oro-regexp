# Oro RegExp

- [Overview](#overview)
- [Installation](#installation)
- [Example](#example)
- [Regular Expressions](#regular-expressions)

## Overview

`REGEXP` is essentially an object that holds regular expressions.

## Installation

```shell
npm install oro-regexp
```

## Example:

```js
// js
const { REGEXP } = require( 'oro-regexp' );
// or individually
const { REGEXP_EMAIL, REGEXP_URL_YOUTUBE, ... } = require( 'oro-regexp' );

// ts
import { REGEXP } from 'oro-regexp';
// or individually
import { REGEXP_EMAIL, REGEXP_URL_YOUTUBE, ... } from 'oro-regexp';
```

```js
REGEXP_EMAIL.test('info@example');
// false

REGEXP_EMAIL.test('info@example.com');
// true
```

## Regular Expressions

<hr>

- [Emails](#emails)
- [Urls](#urls)
- [Dates](#dates)

<hr>

### Emails

```js
REGEXP.EMAIL | REGEXP_EMAIL;
// example@domain.extension
// ano_ther.example+1@subdomain.domain.extension
```

<hr>

### Urls

```js
REGEXP.URL_YOUTUBE | REGEXP_URL_YOUTUBE;
// youtube.com/watch?v=ID
// https://youtube.com/watch?v=ID
// http://youtube.com/watch?v=ID
// www.youtube.com/watch?v=ID
// m.youtube.com/watch?v=ID
// youtu.be/ID
```

<hr>

### Dates

```js
REGEXP.DATETIME_DEFAULT_STRICT | REGEXP_DATETIME_DEFAULT_STRICT;
// 30-12-2020 11:59[:59]

REGEXP.DATETIME_HTML_STRICT | REGEXP_DATETIME_HTML_STRICT;
// 30/12/2020 11:59[:59]

REGEXP.DATETIME_SQL_STRICT | REGEXP_DATETIME_SQL_STRICT;
// 2020-12-30 11:59[:59]

REGEXP.DATETIME_FN_STRICT('.') | REGEXP_DATETIME_FN_STRICT('.');
// 30.12.2020 11:59[:59]
```

```js
REGEXP.DATETIME_DEFAULT | REGEXP_DATETIME_DEFAULT;
// 30-12-2020 [11:59[:59]]

REGEXP.DATETIME_HTML | REGEXP_DATETIME_HTML;
// 30/12/2020 [11:59[:59]]

REGEXP.DATETIME_SQL | REGEXP_DATETIME_SQL;
// 2020-12-30 [11:59[:59]]

REGEXP.DATETIME_FN('.') | REGEXP_DATETIME_FN('.');
// 30.12.2020 [11:59[:59]]
```

```js
REGEXP.DATE_DEFAULT | REGEXP_DATE_DEFAULT;
// 30-12-2020

REGEXP.DATE_HTML | REGEXP_DATE_HTML;
// 30/12/2020

REGEXP.DATE_SQL | REGEXP_DATE_SQL;
// 2020-12-30

REGEXP.DATE_FN('.') | REGEXP_DATE_FN('.');
// 30.12.2020
```
