# Practica03-Javascript📄
a.	Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, 
fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de JavaScript se pide validar que todos los campos han sido 
ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones:

1.	Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último dígito verificador.
2.	Se debe validar qué, en el campo de los nombres, ingrese mínimo un nombre y que permita ingresar sólo letras.
3.	Se debe validar qué, en el campo de los apellidos, ingrese mínimo un apellido y que permita ingresar sólo letras.
4.	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10.
5.	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy.
6.	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza 
por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”.
7.	Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos: una letra mayúscula, una letra 
minúscula y un carácter especial (@, _, $).

b.	Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript 
se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes 
(ver ejemplo, https://gihp4c.blog.ups.edu.ec/).

![1](https://user-images.githubusercontent.com/34387442/69186615-cf021f00-0ae6-11ea-8a14-77a811318499.JPG)

# Desarrollo 🚀

## a. Desarrollo del ejercicio a) Formulario.⌨️

Codigo de los archivos que forman parte del formulario para su validacion.

* Archivo index.html

```
<!DOCTYPE html>
<html lang="es">

<head>
    <title>FORMULARIO</title>
    <meta charset="UTF-8">
    <link href="Disenio.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="JS/validacion.js"></script>
    
    <style>
        .error {
            color: red;
        }   
    </style>
</head>

<body>
    <div>
        <form id="formulario01" method="POST" action="Bienvenido.php" onsubmit="return validarCamposObligatorios();">
            <center><h1>Fromulario</h1></center>

            <label for="cedula">Cedula (*)</label>
            <input type="text" id="cedula" name="cedula" value="" placeholder="Ingrese el número de cedula ..." onkeydown="return soloNumeros(event, this.value)" 
            onkeyup="validarCedula(event)"/>
            <span id="mensajeCedula" class="error" ></span>
            <br><br>

            <label for="nombres">Nombres (*)</label>
            <input type="text" id="nombres" name="nombres" value="" placeholder="Ingrese sus dos nombres..."onkeypress="return soloLetras(event)"
            onkeyup="dosNombres(this.value, 'mensajeNombres')"/>
            <span id="mensajeNombres" class="error" ></span>
            <br><br>

            <label for="apellidos">Apellidos (*)</label>
            <input type="text" id="apellidos" name="apellidos" value="" placeholder="Ingrese sus dos apellidos..." onkeydown="return soloLetras(event)""
            onkeyup="dosNombres(this.value, 'mensajeApellidos')"/>
            <span id="mensajeApellidos" class="error"> </span>
            <br><br>

            <label for="direccion">Dirección (*)</label>
            <input type="text" id="direccion" name="direccion" value="" placeholder="Ingrese su dirección ..." />
            <span id="mensajeDireccion" class="error"> </span>
            <br><br>

            <label for="telefono">Teléfono (*)</label>
            <input type="text" id="telefono" name="telefono" value="" placeholder="Ingrese su número telefónico..." maxlength="10" onkeydown="return soloNumeros(event, this.value)" onkeyup="return numeroTelefono(this.event)"/>
            <span id="mensajeTelefono" class="error"> </span>
            <br><br>

            <label for="fecha">Fecha Nacimiento (*)</label>
            <input type="text" id="fechaNacimiento" name="fechaNacimiento" value="" placeholder="Ingrese dd/mm/aaaa ..." maxlength="10"
            onKeyUp="fecha();"/>
            <span id="mensajeFecha" class="error"></span>
            <br><br>

            <label for="correo">Correo electrónico (*)</label>
            <input type="text" id="correo" name="correo" value="" placeholder="Ingrese su correo electrónico..." onkeyup="correoU(this.value)"/>
            <span id="mensajeCorreo" class="error"></span>
            <br><br>

            <label for="correo">Contraseña (*)</label>
            <input type="password" id="contrasena" name="contrasena" value="" placeholder="Ingrese su contraseña ..."  />
            <span id="mensajeContrasena" class="error"></span>
            <br><br>

            <input type="submit" id="crear" name="crear" value="Aceptar" />
            <input type="reset" id="cancelar" name="cancelar" value="Cancelar" />
        </form>
    </div>
</body>
</html>
```

* Archivo Disenio.css

```
body { 
    padding: 10% 30% 10% 2 0%;
    background-color: rgb(13, 14, 13)
  }
  
  input,select{
    padding: 4px;
    width: 240px;
    max-width: 100%;
    font-size:1.2em;
    margin-bottom: 10px;
  }
  
  label {
    display: inline-block;
    width: 45%;
  }
  
  body, input {
    font-family: sans-serif;
  }
  
  
  div{
      width: max-content; height: 100%;
      border: 10px double white;
      margin: 0 auto;
      background-color: rgb(164, 248, 9);
      padding: 20px;
  }
  
  
  button{
      padding: 6px;
      width: 220px;
      font-size:1.2em;
      margin-left: 46%;
      border-radius:5px 0 0 0;
  }
```

* Archivo validacion.js

```
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
            document.getElementById(id).innerHTML=('Campo mal Ingresado');
        } else {
            document.getElementById(id).innerHTML=('Campo mal Ingresado');
        }
    } else {
        document.getElementById(id).innerHTML=('Campo Correcto');
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
```

* Archivo Bienvenido.php

```
<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>VALIDACION</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='Disenio.css'>
</head>

<body>
    <div>
        <?php
                echo "<p>Bienvenido, pasaste las validaciones!</p>";
        ?>

    </div>

</body>

</html>
```

## a. Desarrollo del ejercicio b) Galeria.⌨️

* Archivo index.html

```
<!DOCTYPE html>
<html>

<head>
    <script src="galeria.js"></script>
    <meta charset="utf-8" />
    <link href="estilo.css" rel="stylesheet" type="text/css"/>
    <title>Galeria</title>
</head>

<body >
    <h1>PAISAJES</h1>
    <div id="imagen" >
        <img src="images/imagen.jpeg"  width="800"; height="600";>
    </div>
    <br>
    <center>
        <button class="boton1" id="anterior" onclick="anterior();">ANTERIOR</button>
        <button class="boton2" id="inicio" onclick="inicio();">INICIO</button>
        <button class="boton3" id="siguiente" onclick="siguiente();">SIGUIENTE</button>
    </center>
</body>

</html>
```

* Archivo estilo.css

```
body { 
    background-color: #050505 ;
    border-style: inset;
}
  
input,select{
    padding: 4px;
    width: 240px;
    max-width: 100%;
    font-size:1.2em;
    margin-bottom: 10px;
}
  
body, input {
    font-family: sans-serif;
}
  
div{
    width: max-content; height: 100%;
    border: 10px double rgb(252, 252, 252);
    margin: 0 auto;
    background-color:black;   
}
    
.boton1{
    background-color: white;
    color: black;
    border-radius:10px;
    width: 10%;
    padding: 1%;
}

.boton2{
    background-color: white; 
    color: black; 
    border-radius:10px;
    width: 10%;
    padding: 1%;
  }

.boton3{
    background-color: white; 
    color: black; 
    border-radius:10px;
    width: 10%;
    padding: 1%;
}
  
h1{
    text-align: center;
    color: white;
    font-family: cursive;
    font-size: 30px;
}
```

* Archivo galeria.js

```
array = [{ "id": 1, "imagen": "images/img1.jpg" },
         { "id": 2, "imagen": "images/img2.jpg" },
         { "id": 3, "imagen": "images/img3.jpg" },
         { "id": 4, "imagen": "images/img4.jpg" },
         { "id": 5, "imagen": "images/img5.jpg" },
         { "id": 6, "imagen": "images/img6.jpg" },
         { "id": 7, "imagen": "images/img7.jpg" },
         { "id": 8, "imagen": "images/img8.jpg" },
         { "id": 9, "imagen": "images/img9.jpg" },
         { "id": 10, "imagen": "images/img10.jpg"},
         { "id": 11, "imagen": "images/img11.jpg" },
         { "id": 12, "imagen": "images/img12.jpg" },
         { "id": 13, "imagen": "images/img13.jpg" },
         { "id": 14, "imagen": "images/img14.jpg" },
         { "id": 15, "imagen": "images/img15.jpg" }];

imagenes = [1, 2, 3, 4, 5];

var pActual = 0;

function inicio() {
    for (i = 0; i < 5; i++) {
        imagenes[i] = Math.floor(Math.random() * (15));
    }
    pActual = 0;
    verificar();
    imprimir();
}

function siguiente() {
    pActual++;
    verificar();
    imprimir();
}

function imprimir() {
    console.log(imagenes);
    var texto = "<img src=" + array[imagenes[pActual]].imagen + ">";
    window.document.getElementById("imagen").innerHTML = texto;
}

function verificar() {
    if (pActual == 4) {
        window.document.getElementById("siguiente").disabled = true;
        window.document.getElementById("anterior").disabled = false;
    }
    else if (pActual == 0) {
        window.document.getElementById("anterior").disabled = true;
        window.document.getElementById("siguiente").disabled = false;
    } else {
        window.document.getElementById("siguiente").disabled = false;
        window.document.getElementById("anterior").disabled = false;
    }
}

function anterior() {
    pActual--;
    verificar();
    imprimir();
}
```

## b. La evidencia del correcto diseño de las páginas HTML usando CSS. Para lo cuál, se puede generar fotografías instantáneas (pantallazos).
## La evidencia del correcto funcionamiento de cada una de las funciones de JavaScript.
 
 Diseño final de la página del Formulario index.html y también prueba de las validaciones de la página.
 
* Diseño final de la página del Formulario index.html y también prueba de las validaciones de la página.
 
![3](https://user-images.githubusercontent.com/34387442/69186767-39b35a80-0ae7-11ea-91bd-d212df497c71.JPG)
 
* Primero probaremos la validación de los campos vacíos al dar el botón aceptar nos avisara que campos están vacíos.

![4](https://user-images.githubusercontent.com/34387442/69186829-5c457380-0ae7-11ea-81c2-86242801fcc9.JPG)

* Ahora procederemos a robar las validaciones en algunos campos y como vemos si nos lanza un aviso donde están los campos incorrectamente llenados.

![5](https://user-images.githubusercontent.com/34387442/69186915-826b1380-0ae7-11ea-8089-3d0a57add3ec.JPG)

* Ahora procedemos a llenar los campos correctamente y vemos que el aviso que la información es correcta en cada campo.

![6](https://user-images.githubusercontent.com/34387442/69186970-9b73c480-0ae7-11ea-983f-3b7fdcfdad1f.JPG)

* Una vez que ya los campos están ingresados correctamente le damos en Aceptar y nos mandara a la siguiente página.

![7](https://user-images.githubusercontent.com/34387442/69187020-b80ffc80-0ae7-11ea-8e56-ab5a5fd815f2.JPG)


Diseño de la página de la galería index.html y prueba de los botones para navegar de imagen en imagen.

![8](https://user-images.githubusercontent.com/34387442/69187150-0b824a80-0ae8-11ea-8eb8-b8be4bff205e.JPG)

* Al dar en el botón INICIO se nos seleccionara 5 imágenes aleatorias.

![9](https://user-images.githubusercontent.com/34387442/69187227-2eacfa00-0ae8-11ea-88bd-536c3ef59b80.JPG)

* Con los botones SIGUIENTE y ANTERIOR podremos navegar entre las 5 imágenes seleccionadas cabe decir que los botones se bloquearan cuando lleguen al final de la navegación.

![10](https://user-images.githubusercontent.com/34387442/69187391-85b2cf00-0ae8-11ea-89ea-d185500588e1.JPG)

## c. El informe debe incluir conclusiones apropiadas.⌨️
### Concluciones
```
•	Implementar validaciones ya en nuestras páginas ayuda a entender muchas funciones que uno ve día a día en las páginas web que uno visita al navegar en internet.
•	Las páginas web que uno encuentra en internet están bien estructuradas y al momento de realizar este tipo de trabajos nos ayuda a entender que detrás deesas paginas existen varios archivos los cuales cada uno tiene su función como la estructura, otro el diseño y otro las validaciones con la programación.
•	Al realizar este trabajo nos permite reforzar el conocimiento adquirido en clases y también ayuda a entender cómo funciona cada complemento que forma una página Web.

```
