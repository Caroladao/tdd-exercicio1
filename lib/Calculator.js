class Calculator {
  listProposes( client ) {
    const installments = [];

    switch ( true ) {
      case client.salary <= 1000 :
        installments.push( {
          total: 2 * client.value,
          installments: 2,
          installmentsValue: ( 2 * client.value ) / 2
        })
        
        installments.push( {
          total: 2 * client.value,
          installments: 3,
          installmentsValue: ( 2 * client.value ) / 3
        })
        return installments;

      case client.salary <= 5000 :
        installments.push( {
          total: 1.3 * client.value,
          installments: 2,
          installmentsValue: ( 1.3 * client.value ) / 2
        })
        
        installments.push( {
          total: 1.5 * client.value,
          installments: 4,
          installmentsValue: ( 1.5 * client.value ) / 4
        })

        installments.push( {
          total: 1.5 * client.value,
          installments: 10,
          installmentsValue: ( 1.5 * client.value ) / 10
        })
        return installments;      
    }      
  }
}

module.exports = Calculator;