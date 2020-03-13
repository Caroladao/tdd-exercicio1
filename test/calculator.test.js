const Calculator = require( '../lib/Calculator' )
const calculator = new Calculator();

describe( 'Calculator', () => {
  test( 'Customer earns less than 1000', () => {
    let client = {
      nome: 'John Doe',
      salary: 999.99,
      age: 21,
      value: 1000.00
    }
    let props = calculator.listProposes( client );

    expect( props.length ).toBe(2);

    expect( props[0].total ).toBeCloseTo( 2000.00 );
    expect( props[0].installments ).toBe( 2 );
    expect( props[0].installmentsValue ).toBeCloseTo( 1000.00 );

    expect( props[1].total ).toBeCloseTo( 2000.00 );
    expect( props[1].installments ).toBe( 3 );
    expect( props[1].installmentsValue ).toBeCloseTo( 666.666 );
  });

})