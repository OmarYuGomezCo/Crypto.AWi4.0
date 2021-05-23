
//Método que se ejecuta cuando 
function ir(){

    //se toman las variables con las que esta trabajando el formilario.
    let usuario = document.getElementById("user").value; // <- usuario 
    let contra = document.getElementById("pass").value; // <- contraseña
    
    //hacemos las comprobaciones necesarias para verificar que el nombre del usuariio sea el correcto, y tambien que no este vacío.
    if(usuario != "Omar" || usuario == null){
        //informamos al usuario el error que 
        alert("Usuario incorrecto o el campo esta vacio, intentalo de nuevo");
        return ;
    }
    //comprobamos que usuario ingrese la contraseña bien, y que no este vacío.
    if(contra != "123456" || contra == null){
        //Informamos al usuario del error.
        alert("Contaseña incorrecta o el campo esta vacio, intentalo de nuevo");
        return;
    }
    //En index creamos un apartado con el id encriptado para aquí guardar la contraseña ya encriptada, mediante Crypto.MD5
    document.getElementById("encriptado").textContent =  CryptoJS.MD5(contra);

}
