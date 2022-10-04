const user = "julieta";
const pass_comprador = "hola123";


function  solicitarDatos(){

    let usuario = prompt("Ingrese su usuario");
    let pass = prompt ("Ingrese su contraseña");


    if (validarDatos (usuario,pass)){

        iniciarCarrito();


    }else if (usuario !== user){

    
        alert("Usuario incorrecto, recargue la pagina para ingresar sus datos nuevamente");


    }else if (pass != pass_comprador){

        alert("Contraseña incorrecta, recargue la pagina para ingresar sus datos nuevamente");
    }


}



function validarDatos(usuario,pass){


    if (usuario ===  user && pass === pass_comprador ){


        return true ;

    }else {


        return false ;

    }





}


function iniciarCarrito(){


    let actividad = "Chalten Full Day";

    let finalizar_carrito = false ;


    while (!finalizar_carrito){


        let actividad = confirm ("¿Quiere comprar la actividad Chalten Full Day?");

        if (actividad){
            let personas = prompt("¿Cuantas personas son?");

            let vianda = confirm("¿Queres incluir viadas?");

            let temporada = prompt("¿Viajas en temporada alta o baja?");
    
        }else {
            alert ("Regresa en otro momento por otra actividad");
        }

    }

}






//tengo varios problemas, no puedo terminar el ciclo, se hizo un buble infinito y quiero terminarlo una vez que los tres datos fueron respondidos, como puedo hacer eso?

//luego quiero que el usuario confirme sus respuestas con respecto a la actividad, pero no puedo contatenar los datos. 

// y luego no se por que en el codigo me aparecen esas lineas debajo de personas, vianda y actividad. 