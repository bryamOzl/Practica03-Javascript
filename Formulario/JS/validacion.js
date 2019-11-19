function validarCamposObligatorios(){
    var bandera = false
    var bvalidacion = true
    var bcedula = true
    var bcorreo = true
    var bfecha = true
    
    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i]
        if(elemento.value == '' && elemento.type == 'text'){
            if(elemento.id == 'cedula'){
                document.getElementById('mensajeCedula').innerHTML = '<br>El campo cedula esta vacio'
            }else if (elemento.id == 'nombres') {
                document.getElementById('mensajeNombres').innerHTML = '<br>El campo nombre esta vacío'
            } else if (elemento.id == 'apellidos') {
                document.getElementById('mensajeApellidos').innerHTML = '<br>El campo apellido esta vacio'
            } else if (elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').innerHTML = '<br>El campo direccion esta vacio'
            } else if (elemento.id == 'telefono') {
                document.getElementById('mensajeTelefono').innerHTML = '<br>El campo telefono esta vacio'
            } else if (elemento.id == 'fechaNacimiento') {
                document.getElementById('mensajeFechaNacimiento').innerHTML = '<br>El campo de la fecha esta vacio'
            } else if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = '<br>El campo del correo esta vacio'
            } else if (elemento.id == 'contrasena') {
                document.getElementById('mensajeContrasena').innerHTML = '<br>El campo de la contrasenia esta vacia'
            }
            elemento.style.border = "3px red solid"
            bvalidacion = false
        }

        if (elemento.id == "cedula"){

        }

    }
}

function validarLetras(elemento)
{    
    if(elemento.value.length > 0){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        console.log(miAscii)
        
        if(miAscii >= 97 && miAscii <= 122){
            return true
        }else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false
        }
    }else{
        return true
    }
    
}
