/* Ejercicio N°1 */



/* Ejercicio N°2 */ 

const verificar = document.querySelector(".verificar")


verificar.addEventListener('click' , ()=>{

const numero1 = document.querySelector(".s1").value;
const numero2 = document.querySelector(".s2").value;
const numero3 = document.querySelector(".s3").value;

let suma = Number(numero1) + Number(numero2) + Number(numero3);

    if(suma <= 10 && suma > 0){

        respuesta = document.querySelector(".respuesta");
        respuesta.innerHTML = "Llevas " + suma + " Stikers !!!" ;
    }
        else if (suma > 10){
            respuesta = document.querySelector(".respuesta");
            respuesta.innerHTML = "Puedes llevar maximo 10 Stikers!!" ;
        }
        else if (suma < 0 ){
            respuesta = document.querySelector(".respuesta");
            respuesta.innerHTML = "No puede ser valores negativos !!!";
        }
            else{

                respuesta = document.querySelector(".respuesta");
                respuesta.innerHTML = "Error en algun dato ingresado. Solo se puede ingresar numeros validos";
            }
    
})


/* Ejercicio N°3 */

const select1 = document.querySelector("#digito1")
const select2 = document.querySelector("#digito2")
const select3 = document.querySelector("#digito3")



const btn = document.querySelector(".ingresar");

btn.addEventListener('click' , ()=>{
    const valor1 = select1.value;
    const valor2 = select2.value;
    const valor3 = select3.value;

    if(valor1 == 9 && valor2 == 1 && valor3 == 1){
        const resp = document.querySelector(".mensaje2");
        resp.innerHTML = "Password 1 Correcto";
    }

    else if(valor1 == 7 && valor2 == 1 && valor3 == 4){
        const resp = document.querySelector(".mensaje2");
        resp.innerHTML = "Password 2 Correcto";
    }

    else{
        const resp = document.querySelector(".mensaje2");
        resp.innerHTML = "Password incorrecto";
    }
    
})






