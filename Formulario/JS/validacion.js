function validarCamposObligatorios()
{
    var bandera = true
    
    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i]
        if(elemento.value == '' && elemento.type == 'text'){
            if(elemento.id == 'cedula'){
                document.getElementById('mensajeCedula').innerHTML = '<br>La cedula esta vacia'
            }else if (elemento.id == 'nombres') {
                document.getElementById('mensajeNombres').innerHTML = '<br>Los nombres estan vacíos'
            } else if (elemento.id == 'apellidos') {
                document.getElementById('mensajeApellidos').innerHTML = '<br>Los apellidos estan vacíos'
            } else if (elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').innerHTML = '<br>La dirección esta vacía'
            } else if (elemento.id == 'telefono') {
                document.getElementById('mensajeTelefono').innerHTML = '<br>El telefono está vacío'
            } else if (elemento.id == 'fechaNacimiento') {
                document.getElementById('mensajeFechaNacimiento').innerHTML = '<br>La fecha de nacimiento esta vacía'
            } else if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = '<br>El correo esta vacío'
            } else if (elemento.id == 'contrasena') {
                document.getElementById('mensajeContrasena').innerHTML = '<br>La contraseña esta vacía'
            }

            elemento.style.border = '1px red solid'
            elemento.className = 'error'            
            bandera = false
        }
    }
    
    if(!bandera){
        alert('Error: revisar los comentarios')
    }

    return bandera

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
