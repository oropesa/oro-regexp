const { REGEXP } = require( '../index' );

describe('regexp EMAIL', () => {
    test( 'regexp EMAIL( undefined )'      , () => { expect( REGEXP.EMAIL.test() ).toBe( false ) });
    test( 'regexp EMAIL( str bad no @ )'   , () => { expect( REGEXP.EMAIL.test( 'chacho.com' ) ).toBe( false ) });
    test( 'regexp EMAIL( str bad no dot )' , () => { expect( REGEXP.EMAIL.test( 'chacho@chacho' ) ).toBe( false ) });
    test( 'regexp EMAIL( str bad @ )'      , () => { expect( REGEXP.EMAIL.test( 'chacho@cha@cho.com' ) ).toBe( false ) });
    test( 'regexp EMAIL( str )'            , () => { expect( REGEXP.EMAIL.test( 'chacho@chacho.com' ) ).toBe( true ) });
    test( 'regexp EMAIL( str dots )'       , () => { expect( REGEXP.EMAIL.test( 'chacho@chacho.com.ar.es' ) ).toBe( true ) });
    test( 'regexp EMAIL( str dots plus )'  , () => { expect( REGEXP.EMAIL.test( 'ano_ther.example+1@subdomain.domain.extension' ) ).toBe( true ) });
});