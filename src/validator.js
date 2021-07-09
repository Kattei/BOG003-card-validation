const validator = {
  // Esta funcion valida el numero segun el algoritmo de luhn
  isValid : function (creditCardNumber) {
  let par = 0;
  let impar = 0;
  
// Convirtiendo a array y reversando
  creditCardNumber = creditCardNumber.split("").reverse();
  for (let i = 0; i < creditCardNumber.length; i++){
    //posiciones pares
    if(i % 2 === 1){
      //multiplicar la posicion por 2
      creditCardNumber[i]= (creditCardNumber[i]*2);
      //si es mayor que 10
      if (creditCardNumber[i] >=10){
        //convertir a string y nuevamenta a array
        par = creditCardNumber[i].toString().split("");
        //se suma la posicion 0 y 1
        creditCardNumber[i] = parseInt(par[0])+parseInt(par[1]);
      }
    }
    impar= impar+parseInt(creditCardNumber[i]);
  }
   let resultado = impar % 10 == 0 ? true : false;
   return resultado;


         },
        
// Esta funcion enmascara los  numeros y solo permite ver los 4 ultimos
            maskify : function maskify(creditCardNumber){  
              if (creditCardNumber.length<4) {
                return creditCardNumber;
              }                                  
              let lastFour = creditCardNumber.substr(-4);
              let firstnNumber = creditCardNumber.slice(0, creditCardNumber.length-4).replace(/./g, "#");
              return firstnNumber+lastFour;
            }

           
            
          };
           
          
  

export default validator;
