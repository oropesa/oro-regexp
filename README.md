# Oro RegExp

* [Overview](#overview)
* [Installation](#installation)
* [Example](#example)
* [Regular Expressions](#regular-expressions)
  * [Emails](#emails)
  * [Urls](#urls)
  * [Dates](#dates)

## Overview

RegExp is just an object with regular expressions.

## Installation

```shell
npm install oro-regexp
```

## Example:
```js
const { REGEXP } = require( 'oro-regexp' );

REGEXP.EMAIL.test( 'info@example' ) 
// false

REGEXP.EMAIL.test( 'info@example.com' ) 
// true
```

## Regular Expressions

### Emails

```js
REGEXP.EMAIL 
// example@domain.extension
// ano_ther.example+1@subdomain.domain.extension
```

### Urls

```js
REGEXP.URL_YOUTUBE
// youtube.com/watch?v=ID
// https://youtube.com/watch?v=ID
// http://youtube.com/watch?v=ID
// www.youtube.com/watch?v=ID
// m.youtube.com/watch?v=ID
// youtu.be/ID
```

### Dates

```js
REGEXP.DATETIME_DEFAULT_STRICT 
// 30-12-2020 11:59[:59]

REGEXP.DATETIME_HTML_STRICT 
// 30/12/2020 11:59[:59]

REGEXP.DATETIME_FN_STRICT( '.' ) 
// 30.12.2020 11:59[:59]

REGEXP.DATETIME_SQL_STRICT 
// 2020-12-30 11:59[:59]

REGEXP.DATETIME_DEFAULT 
// 30-12-2020 [11:59[:59]]

REGEXP.DATETIME_HTML 
// 30/12/2020 [11:59[:59]]

REGEXP.DATETIME_FN( '.' ) 
// 30.12.2020 [11:59[:59]]

REGEXP.DATETIME_SQL 
// 2020-12-30 [11:59[:59]]

REGEXP.DATE_DEFAULT 
// 30-12-2020

REGEXP.DATE_HTML 
// 30/12/2020

REGEXP.DATE_FN( '.' ) 
// 30.12.2020

REGEXP.DATE_SQL 
// 2020-12-30
```
