class Calculator {
  listProposes( client ) {
    const installments = [];
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
  }
}

module.exports = Calculator;