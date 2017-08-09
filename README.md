# Ejemplo REST

Éste es un ejemplo de un servicio RESTful con NodeJS, Express y Mongoose.

## Cómo ejecutarlo

* Instalar [NodeJS](https://nodejs.org/es/)
* Instalar [MongoDB](https://www.mongodb.com/es)
* Agregar la carpeta bin de Mongo a PATH
* Crear una carpeta C:\data\db (Windows)
* Iniciar servidor Mongo con `mongod`
* `cd` a este folder
* Instalar dependencias con `npm install`
* Ejecutar con `node .`

## Estructura de proyecto

* index.js: Es el punto de entrada de la aplicación. Se encarga de arrancar el servidor de Express.
* config.js: Contiene la configuración de la app.
* database.js: Se encarga de la conexión a la Base de Datos.
* middleware.js: Es un ejemplo de middleware en Express. Para habilitarlo, se debe remover el comentario en la línea de index.js que dice `app.use(middleware)`.
* router.js: Define las rutas a las que responde la aplicación.
* model/: En este folder se encuentran los modelos (o recursos) de la aplicación.
* controller/: En este folder se definen las operaciones que se pueden realizar sobre los recursos.

Para mayor referencia consulte la documentación que corresponda.