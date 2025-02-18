//JSON Server nos permite crear una API se crea un archivo paratener la api lista que responde a los diferentes verbos
//actualizar un registro, enlistar, eliminar o mostrar
//Generar iformacion a la API
const url = 'http://localhost:4000/clientes';

//Cuando se crea un cliente se usa el metodo de post
export const nuevoCliente = async cliente =>{
    try {
        await fetch(url, {//Objeto de configuracion
            method: 'POST', 
            body: JSON.stringify( cliente ),//contenido de  la peticion, obj cliente se convierte a string y se envia a la url por el metodo post
            headers: {//}informacion de tipo de contenido
                'Content-type': 'application/json' //enviar la inf al servidor
            }
        });
        window.location.href = 'index.html';//manda al usuario al index una vez que se haya completa<do la ejecucion del codigo
    } catch (error) {
        console.log(error);
    }
}

//Obtiene todos los clientes
export const obtenerClientes = async () =>{
    try {
        const resultado = await fetch(url);//Por default fetch usa un get para obtener los datos almeno que especifiques
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//Eliminar clientes
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        obtenerClientes()
    } catch (error) {
        console.log(error);
    }
}

//Obtiene cliente por id
export const obtenerCliente = async id =>{
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    }catch(error){
        console.log(error);
    }
}

//Actualiza registro
export const editarCliente = async cliente =>{
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',//PUt completo, patch parcial
            body: JSON.stringify(cliente),
            headers: {'Content-Type': 'application/json'}
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}