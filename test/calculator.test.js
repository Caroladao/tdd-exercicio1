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

  test( 'Customer earns more than 1000 and less 5000', () => {
    let client = {
      nome: 'John Doe',
      salary: 4500.07,
      age: 37,
      value: 1000.00
    }
    let props = calculator.listProposes( client );

    expect( props.length ).toBe(3);

    expect( props[0].total ).toBeCloseTo( 1300.00 );
    expect( props[0].installments ).toBe( 2 );
    expect( props[0].installmentsValue ).toBeCloseTo( 650.00 );

    expect( props[1].total ).toBeCloseTo( 1500.00 );
    expect( props[1].installments ).toBe( 4 );
    expect( props[1].installmentsValue ).toBeCloseTo( 375.00 );

    expect( props[2].total ).toBeCloseTo( 1500.00 );
    expect( props[2].installments ).toBe( 10 );
    expect( props[2].installmentsValue ).toBeCloseTo( 150.00 );
  });

  test( 'Customer earns more than 5000', () => {
    let client = {
      nome: 'John Doe',
      salary: 5500.00,
      age: 24,
      value: 1000.00
    }
    let props = calculator.listProposes( client );

    expect( props.length ).toBe(4);

    expect( props[0].total ).toBeCloseTo( 1100.00 );
    expect( props[0].installments ).toBe( 2 );
    expect( props[0].installmentsValue ).toBeCloseTo( 550.00 );

    expect( props[1].total ).toBeCloseTo( 1300.00 );
    expect( props[1].installments ).toBe( 4 );
    expect( props[1].installmentsValue ).toBeCloseTo( 325.00 );

    expect( props[2].total ).toBeCloseTo( 1300.00 );
    expect( props[2].installments ).toBe( 10 );
    expect( props[2].installmentsValue ).toBeCloseTo( 130.00 );

    expect( props[3].total ).toBeCloseTo( 1400.00 );
    expect( props[3].installments ).toBe( 20 );
    expect( props[3].installmentsValue ).toBeCloseTo( 70.00 );
  });

  
})