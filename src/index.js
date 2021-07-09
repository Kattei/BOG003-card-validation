import validator from './validator.js';

// Esta funcion oculta y deja ver la pag principal y la segundaria
document.getElementById("validar").addEventListener("click", () => {
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("principal").style.display = "none";

});

// Esta funcion nos ayuda a vilidar el numero
let creditCardNumber = document.getElementById("card_number").value;

document.getElementById("card_number").addEventListener("input", function(event){
    const inserteNumero = event.target.value;

     if (creditCardNumber.length < inserteNumero.length) {
        creditCardNumber = creditCardNumber + inserteNumero.slice();
    }else{
        creditCardNumber = creditCardNumber.slice(0)
}

// Esta parte se encarga de llamar el maskify para enmascarar el numero
let salidaNumber = validator.maskify(creditCardNumber);
document.getElementById("card_number").value=salidaNumber;

});  


//Esta funcion  ayuda a dar las alertas y a llamar a isValid
document.getElementById("validar1").addEventListener("click", function() {
    let validatedTarjeta = validator.isValid(creditCardNumber);

    if (validatedTarjeta == true) {
        alert("su tarjeta es válida");

    }  else if( document.getElementById("card_number").value === "") {
        alert ( "Campo vacio" ); 
    } else {
        alert ( "Su tarjeta es invalida" );
    }       
    

});


// Esta funcion nos permite borrar la informacion 
document.getElementById("validar2").addEventListener("click", () => { 
    document.getElementById("newForm").reset();
    
   
});
// Agregar los meses
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement("option");
	opcion.value = i;
	opcion.innerText = i;
	document.getElementById("date").appendChild(opcion);
}
 //Agregar años
 //Hacerle saber en que año nos encontramos
 const yearActual = new Date().getFullYear();
 //Creacion del bucle a 8 años
 for(let i = yearActual; i <= yearActual + 8; i++){
    let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	document.getElementById("date1").appendChild(opcion);
}
 
 
