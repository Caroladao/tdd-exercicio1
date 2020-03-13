class Calculator {
  listProposes( client ) {
    const installments = [];

    switch ( true ) {
      case client.salary <= 1000 :
        installments.push( 
          this.makeInstallments( 2, client.value, 2 ), 
          this.makeInstallments( 2, client.value, 3 ) 
        )
        return installments;

      case client.salary <= 5000 :
        installments.push( 
          this.makeInstallments( 1.3, client.value, 2 ), 
          this.makeInstallments( 1.5, client.value, 4 ), 
          this.makeInstallments( 1.5, client.value, 10 ) 
        )
        return installments;   

      case client.salary > 5000 :
        installments.push( 
          this.makeInstallments( 1.1, client.value, 2 ), 
          this.makeInstallments( 1.3, client.value, 4 ),
          this.makeInstallments( 1.3, client.value, 10 ),
          this.makeInstallments( 1.4, client.value, 20 )
        )
        return installments;    
    }      
  }

  makeInstallments( percentage, value, installments ){
    return {
      total: percentage * value,
      installments,
      installmentsValue: ( percentage * value ) / installments
    }
  }
}

module.exports = Calculator;