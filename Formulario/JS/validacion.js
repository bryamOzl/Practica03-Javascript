//Funcion para validar campos vacios
function validarCamposObligatorios() {
    // arreglos
    var bandera = true
    for (var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value == '' && elemento.type == 'text') {
            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').innerHTML = '<br> La cedula no esta ingresada'
            }else if (elemento.id == 'nombres') {
                document.getElementById('mensajeNombres').innerHTML = '<br> Los nombres no estan ingresados'
            }else if (elemento.id == 'apellidos') {
                document.getElementById('mensajeApellidos').innerHTML = '<br> Los apellidos no estan ingresados'
            }else if (elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').innerHTML = '<br> La direccion no esta ingresada'
            }else if (elemento.id == 'telefono') {
                document.getElementById('mensajeTelefono').innerHTML = '<br> El telefono no estan ingresado'
            }else if (elemento.id == 'fechaNacimiento') {
                document.getElementById('mensajeFecha').innerHTML = '<br> El telefono no esta ingresado'
            }else if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = '<br> El correo no esta ingresado'
            }
            elemento.style.border = '1px red solid'
            bandera = false
        }
    }
    if (!bandera) {
        alert('Existen campos vacios')
    }
    return bandera
}

//Funcion para validar que los campos solo acepten letras
function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

//Funcio para validar el numero de celdula del Ecuador
function validarCedula() {
    var cad = document.getElementById("cedula").value;
    var total = 0;
    var longitud = cad.length;
    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longitud - 1; i++) {
            //verifica los salto pares para la validacion
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); 
                //parsea o concatanara la cadena
            }
        }
        total = total % 10 ? 10 - total % 10 : 0;
        var aux = cad.charAt(9);
        if (cad.charAt(9) == total) {
            //si se cumple la validacion muestra esto
            document.getElementById("mensajeCedula").innerText = 'La cedula es correcta';
        } else {
            document.getElementById("mensajeCedula").innerHTML = 'La cedula es incorrecta';
        }

    } else {
        document.getElementById("mensajeCedula").innerHTML = 'La cedula incorrecta';
    }
}

//Funcion para validar que ingrese dos nombres y dos apellidos
function dosNombres(txt, id) {
    palabras = txt.split(' ');
    if (palabras.length == 2) {
        p1 = palabras[0].trim();
        p2 = palabras[1].trim();
        if (p1 != '' && p2.length >= 2) {
            document.getElementById(id).innerHTML=('Requerimientos Cumplidos');
        } else {
            document.getElementById(id).innerHTML=('Requerimientos no Cumplidos');
        }
    } else {
        document.getElementById(id).innerHTML=('Requerimientos no Cumplidos');
    }
}

//Funcion que permita validar solo numeros
function soloNumeros(e, c) {
    var key = window.Event ? e.which : e.keyCode
    return ((key >= 48) && (key <= 57) && (c.length + 1 <= 10) || (key == 8))
}

//Funcion par que lel numero telefonico acepte solo numeros y hasta 10 digitos
function numeroTelefono(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum < 48) || (keynum >57)) {
		document.getElementById("mensajeTelefono").innerHTML = ("Ingrese solo numeros ");
		return true;
	}
}

//Funcion para validar el formato de la fecha
function fecha(){
	var Fecha = document.getElementById('fechaNacimiento').value;
    var Mensaje = '';
    document.getElementById('mensajeFecha').className = '';
    if (Fecha.length == 10 ){
        fe =Fecha.split('/');
        var Anio = fe[2];
        var Mes = fe[1] - 1;
        var Dia = fe[0];
        var VFecha = new Date(Anio, Mes, Dia);
        if ((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia)) {
            Mensaje = 'Fecha correcta';
            document.getElementById('mensajeFecha').innerHTML = 'Fecha correcta';
        }
        else {
            Mensaje = 'Fecha incorrecta';
            document.getElementById('mensajeFecha').innerText = 'Fecha incorrecta';
        }
    }
    document.getElementById('mensajeFecha').innerHTML = Mensaje;
}

//Funcion para validar el correo institucionale de la universidad
function correoU(txt) {
    f = txt.split('@');
    if (f.length >= 2) {
        if (f[0].length >= 1) {
            if (f[1] == 'ups.edu.ec' || f[1] == 'est.ups.edu.ec') {
                document.getElementById("mensajeCorreo").innerHTML = 'El correo es correcto';
            } else {
                document.getElementById("mensajeCorreo").innerHTML = 'El correo es correcto';
            }
        } else {
            document.getElementById("mensajeCorreo").innerHTML = 'El correo no es correcto';
        }
    } else {
        document.getElementById("mensajeCorreo").innerHTML = 'El correo no es correcto';
    }
}