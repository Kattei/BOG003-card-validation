const validator = {
  
  isValid : function isValid(creditCardNumber) {
     let par = [];
     let imPar =  [];
     let resultado = 0;

     creditCardNumber = Array.from(creditCardNumber).reverse();
     for(let i in creditCardNumber){
       creditCardNumber[i] = parseInt(creditCardNumber[i]);
       if (i % 2 !==0) {
        par.push(creditCardNumber[i]*2);
        for(let c in par){
          if(par[c] >9){
            par[c] = (parseInt(par[c] % 10)) + (parseInt(par[c] / 10));
          }
        }
       }
       else {
         imPar.push(creditCardNumber[i]);
       }
     }
        const suma = (total,creditCardNumber) => {
          return total+creditCardNumber;
        };
        resultado = par.reduce(suma,1)+imPar.reduce(suma,0);
        if (resultado % 10 == 0){
          return false;
        }
         else{
           return true;
          }
         
          
         },
        

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
