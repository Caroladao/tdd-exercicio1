const Calculator = require( '../lib/Calculator' )
const { toBeDeepCloseTo } = require( 'jest-matcher-deep-close-to' )
expect.extend({ toBeDeepCloseTo })

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
    expect( props[0] ).toBeDeepCloseTo( prepareInstallments( 2000.00, 2, 1000.00 ), 2);
    expect( props[1] ).toBeDeepCloseTo( prepareInstallments( 2000.00, 3, 666.66 ), 2);
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
    expect( props[0] ).toBeDeepCloseTo( prepareInstallments( 1300.00, 2, 650.00 ), 2);
    expect( props[1] ).toBeDeepCloseTo( prepareInstallments( 1500.00, 4, 375.00 ), 2);
    expect( props[2] ).toBeDeepCloseTo( prepareInstallments( 1500.00, 10, 150.00 ), 2);

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
    expect( props[0] ).toBeDeepCloseTo( prepareInstallments( 1100.00, 2, 550.00 ), 2);
    expect( props[1] ).toBeDeepCloseTo( prepareInstallments( 1300.00, 4, 325.00 ), 2);
    expect( props[2] ).toBeDeepCloseTo( prepareInstallments( 1300.00, 10, 130.00 ), 2);
    expect( props[3] ).toBeDeepCloseTo( prepareInstallments( 1400.00, 20, 70.00 ), 2);
  });

})

function prepareInstallments( total, installments, installmentsValue ){
  return { total, installments, installmentsValue }
}