import { obtenerCliente, editarCliente } from './API.js'
import { mostrarAlerta, validar } from './funciones.js'

(function (){

    //Campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);//Buscar parametros en el url(ventana actual)

        const idCliente = parametrosURL.get('id');//regresa el id del cliente
        console.log(typeof(idCliente));//typeof regresa el tipo de dato
        console.log(idCliente);

        //await Para que se espere a ejecutar el otro codigo
       const cliente = await obtenerCliente(idCliente);//obtener cliente refresa un obj 
       
       console.log(cliente);

       mostrarCliente(cliente);

       //submit al formulario
       const formulario = document.querySelector('#formulario');

       formulario.addEventListener('submit', validarCliente);

    });

    //Rellenar input con informacion del cliente para editar
    function mostrarCliente(cliente){
        const { nombre, email, telefono, empresa, id  } = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }



    function validarCliente(e){
        e.preventDefault();

        //Actualizar onj
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value, 
            id: idInput.value
        }

        console.log(cliente);

        if(validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        //Reescribe los valores en el form
        editarCliente(cliente);
    }
})();