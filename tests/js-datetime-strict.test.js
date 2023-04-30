const {
    REGEXP_DATETIME_DEFAULT_STRICT,
    REGEXP_DATETIME_HTML_STRICT,
    REGEXP_DATETIME_SQL_STRICT,
    REGEXP_DATETIME_FN_STRICT,
    REGEXP,
} = require( '../index' );

describe( 'regexp DATETIME_DEFAULT_STRICT', () => {
    test( 'regexp DATETIME_DEFAULT_STRICT( undefined ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( undefined ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( undefined ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str bad sep ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '05/06/2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '05/06/2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str bad 0day ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '00-02-2020' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '00-02-2020' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str bad 2day ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '5-06-2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '5-06-2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str bad 2month ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '05-6-2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '05-6-2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str bad 4year ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '05-06-19' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '05-06-19' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str date ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '05-06-2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '05-06-2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str bad 29-2 ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '29-02-2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '29-02-2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str ok 29-2 ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '29-02-2020' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '29-02-2020' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str date last ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '31-12-2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '31-12-2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str time ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '12:45:53' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '12:45:53' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str bad datetime hour ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '31-12-2019 12' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '31-12-2019 12' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str bad datetime hour2 ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '31-12-2019 2:45' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '31-12-2019 2:45' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str bad datetime min ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '31-12-2019 02:4' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '31-12-2019 02:4' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str bad datetime min2 ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '31-12-2019 12:45:' ) ).toBe( false );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '31-12-2019 12:45:' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str datetime w/o sec ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '31-12-2019 12:45' ) ).toBe( true );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '31-12-2019 12:45' ) ).toBe( true );
    } );

    test( 'regexp DATETIME_DEFAULT_STRICT( str datetime w sec   ) ', () => {
        expect( REGEXP.DATETIME_DEFAULT_STRICT.test( '31-12-2019 12:45:53' ) ).toBe( true );
        expect( REGEXP_DATETIME_DEFAULT_STRICT.test( '31-12-2019 12:45:53' ) ).toBe( true );
    } );
} );

describe( 'regexp DATETIME_HTML_STRICT', () => {
    test( 'regexp DATETIME_HTML_STRICT( undefined ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( undefined ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( undefined ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str bad sep ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '05-06-2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '05-06-2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str bad 0day ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '00/02/2020' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '00/02/2020' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str bad 2day ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '5/06/2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '5/06/2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str bad 2month ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '05/6/2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '05/6/2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str bad 4year ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '05/06/19' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '05/06/19' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str date ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '05/06/2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '05/06/2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str bad 29-2 ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '29/02/2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '29/02/2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str ok 29-2 ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '29/02/2020' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '29/02/2020' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str date last ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '31/12/2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '31/12/2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str time ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '12:45:53' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '12:45:53' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str bad datetime hour ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '31/12/2019 12' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '31/12/2019 12' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str bad datetime hour2 ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '31/12/2019 2:45' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '31/12/2019 2:45' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str bad datetime min ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '31/12/2019 02:4' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '31/12/2019 02:4' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str bad datetime min2 ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '31/12/2019 12:45:' ) ).toBe( false );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '31/12/2019 12:45:' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str datetime w/o sec ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '31/12/2019 12:45' ) ).toBe( true );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '31/12/2019 12:45' ) ).toBe( true );
    } );

    test( 'regexp DATETIME_HTML_STRICT( str datetime w sec   ) ', () => {
        expect( REGEXP.DATETIME_HTML_STRICT.test( '31/12/2019 12:45:53' ) ).toBe( true );
        expect( REGEXP_DATETIME_HTML_STRICT.test( '31/12/2019 12:45:53' ) ).toBe( true );
    } );
} );

describe( 'regexp DATETIME_SQL_STRICT', () => {
    test( 'regexp DATETIME_SQL_STRICT( undefined ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( undefined ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( undefined ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str bad sep ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019/06/05' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019/06/05' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str bad 0day ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2020-02-00' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2020-02-00' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str bad 2day ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019-06-5' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019-06-5' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str bad 2month ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019-6-05' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019-6-05' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str bad 4year ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '19-06-05' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '19-06-05' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str date ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019-06-05' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019-06-05' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str bad 29-2 ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019-02-29' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019-02-29' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str ok 29-2 ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2020-02-29' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2020-02-29' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str date last ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019-12-31' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019-12-31' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str time ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '12:45:53' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '12:45:53' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str bad datetime hour ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019-12-31 12' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019-12-31 12' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str bad datetime hour2 ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019-12-31 2:45' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019-12-31 2:45' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str bad datetime min ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019-12-31 02:4' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019-12-31 02:4' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str bad datetime min2 ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019-12-31 12:45:' ) ).toBe( false );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019-12-31 12:45:' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str datetime w/o sec ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019-12-31 12:45' ) ).toBe( true );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019-12-31 12:45' ) ).toBe( true );
    } );

    test( 'regexp DATETIME_SQL_STRICT( str datetime w sec   ) ', () => {
        expect( REGEXP.DATETIME_SQL_STRICT.test( '2019-12-31 12:45:53' ) ).toBe( true );
        expect( REGEXP_DATETIME_SQL_STRICT.test( '2019-12-31 12:45:53' ) ).toBe( true );
    } );
} );

describe( 'regexp DATETIME_FN_STRICT', () => {
    test( 'regexp DATETIME_FN_STRICT( undefined ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( undefined ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( undefined ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str bad sep ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '05-06-2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '05-06-2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str bad 0day ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '00.02.2020' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '00.02.2020' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str bad 2day ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '5.06.2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '5.06.2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str bad 2month ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '05.6.2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '05.6.2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str bad 4year ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '05.06.19' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '05.06.19' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str date ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '05.06.2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '05.06.2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str bad 29-2 ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '29.02.2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '29.02.2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str ok 29-2 ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '29.02.2020' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '29.02.2020' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str date last ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '31.12.2019' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '31.12.2019' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str time ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '12:45:53' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '12:45:53' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str bad datetime hour ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '31.12.2019 12' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '31.12.2019 12' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str bad datetime hour2 ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '31.12.2019 2:45' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '31.12.2019 2:45' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str bad datetime min ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '31.12.2019 02:4' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '31.12.2019 02:4' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str bad datetime min2 ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '31.12.2019 12:45:' ) ).toBe( false );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '31.12.2019 12:45:' ) ).toBe( false );
    } );

    test( 'regexp DATETIME_FN_STRICT( str datetime w/o sec ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '31.12.2019 12:45' ) ).toBe( true );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '31.12.2019 12:45' ) ).toBe( true );
    } );

    test( 'regexp DATETIME_FN_STRICT( str datetime w sec   ) ', () => {
        expect( REGEXP.DATETIME_FN_STRICT( '.' ).test( '31.12.2019 12:45:53' ) ).toBe( true );
        expect( REGEXP_DATETIME_FN_STRICT( '.' ).test( '31.12.2019 12:45:53' ) ).toBe( true );
    } );
} );