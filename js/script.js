



const verificar = document.querySelector(".verificar")


verificar.addEventListener('click' , ()=>{

const numero1 = document.querySelector(".s1").value;
const numero2 = document.querySelector(".s2").value;
const numero3 = document.querySelector(".s3").value;

let suna = 0

    if(Number(numero1) + Number(numero2) + Number(numero3) <= 10){
        suma =Number(numero1) + Number(numero2) + Number(numero3);
        respuesta = document.querySelector(".respuesta");
        respuesta.innerHTML = "Llevas " + suma + " Stikers !!!" ;
    }
        else{
            respuesta = document.querySelector(".respuesta");
            respuesta.innerHTML = "Puedes llevar maximo 10 Stikers!!" ;
        }
    
})
