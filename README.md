# Administrador de Clientes

## Descripción

El proyecto es un Administrador de Clientes que permite gestionar información de clientes en un archivo JSON utilizando JSON Server.
Incluye funcionalidades para agregar, editar y eliminar clientes mediante una interfaz intuitiva y responsive construida con Tailwind CSS.
El sistema valida los datos de entrada y evita duplicados de correo electrónico. La lógica está completamente manejada con JavaScript, 
distribuyendo las responsabilidades en varios archivos para un código limpio.

La aplicación cuenta con tres vistas principales:
  - Clientes: Muestra una tabla con los clientes registrados, incluyendo opciones para editar o eliminar.
  - Nuevo Cliente: Permite agregar un nuevo cliente mediante un formulario.
  - Editar Cliente: Carga los datos de un cliente existente para su edición.

## Características
- Registro de clientes: Formulario para agregar clientes con validaciones en los campos.
- Edición de clientes: Actualización de información con datos precargados en el formulario.
- Eliminación segura: Confirmación antes de eliminar un registro.
- Prevención de duplicados: No se permite agregar clientes con el mismo correo electrónico.
- Responsive: Diseño adaptado a dispositivos móviles gracias a Tailwind CSS.
 -Persistencia local: Uso de JSON Server para almacenar y gestionar los datos de los clientes.
- Modularidad: Lógica dividida en varios archivos JavaScript para mayor organización.

## Tecnologías utilizadas

- HTML: Estructura de las páginas.
- CSS (Tailwind): Estilos y diseño responsive.
- JavaScript: Manejo de la lógica y la interacción con JSON Server.
- JSON Server: Simulación de una API REST para almacenar datos en un archivo JSON.

## Estructura de archivos
- index.html: Página principal con la lista de clientes.
- nuevo-cliente.html: Página con el formulario para agregar nuevos clientes.
- editar-cliente.html: Página con el formulario para editar clientes.
- css/:
  - Archivo de estilos personalizados con Tailwind CSS.

js/
  - API.js crea la conexio a la api y donde se manejan los diferentes verbos
  - app.js: Manejo de la tabla y la impresión de registros.
  - nuevoCliente.js: Lógica para agregar nuevos clientes.
  - editarCliente.js: Lógica para editar clientes existentes.
  - funciones.js: Funciones reutilizables.

## Uso
- Iniciar JSON Server:
- Instala JSON Server si no lo tienes:
  - npm install -g json-server
- Inicia JSON Server con el archivo db.json:
  -json-server --watch db.json --port 5000
- Abrir la aplicación en un servidor local:
- Se recomienda utilizar extensiones como Live Server en Visual Studio Code para evitar problemas con CORS.

Agregar cliente:
- Haz clic en la opción 'Nuevo Cliente'.
- Llena el formulario con nombre, correo, teléfono y empresa.
- Haz clic en "Agregar Cliente". Serás redirigido automáticamente a la lista de clientes.

Editar cliente:
- En la tabla de clientes, haz clic en "Editar".
- Los datos del cliente se cargarán automáticamente en el formulario.
- Realiza las modificaciones necesarias y guarda los cambios.

Eliminar cliente:
- En la tabla de clientes, haz clic en "Eliminar".
- Confirma la acción para borrar el registro del archivo JSON.

Validaciones:
- Todos los campos son obligatorios.
- No se permiten duplicados por correo electrónico.
- Confirmación antes de eliminar un cliente.

## Instalación
- Clona este repositorio:
  - git clone https://github.com/Hugo9591/CRM-async-await.git

- Instala las dependencias necesarias:
  - npm install

- Inicia JSON Server:
  - json-server --watch db.json --port 4000

Abre el archivo index.html en un servidor local (como Live Server en VS Code) para evitar problemas de CORS.

## Notas
No abrir directamente los archivos HTML en el navegador, ya que puede haber problemas con las solicitudes fetch debido a restricciones de seguridad (CORS).
JSON Server debe estar ejecutándose para que la aplicación funcione correctamente.
Puedes modificar el puerto del servidor JSON si lo necesitas, pero asegúrate de actualizar las URLs en los archivos JavaScript.
