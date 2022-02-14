<div align="center">
  <p>
    <img src="https://i.ibb.co/xMqSDYh/repository.png" width="546" alt="discord.js" /></a>
  </p>
</div>

Handler para crear robots con la libreria ``discord.js``

## Requisitos del proyecto

| Dependencias | Version |
|--------------|---------|
| discord.js   | 14.0.0  |
| dotenv       | 10.0.0  |
| megadb       | 3.4.0   |

> _Se recomienda utilizar ``Node.js`` en la version ``16`` como minimo_

## Estructura de los directorios

> _Ejemplo de como se ven los directorios con contenido_

```
applications\
|
|__ commands\
|   |
|   |__ test\
|       |
|       |__ main.js
|
|__ messages\
|   |
|   |__ test\
|       |
|       |__ main.js
|
|__ users\
    |
    |__ test\
        |
        |__ main.js

services\
|
|__ test\
    |
    |__ main.js

events\
|
|__ test\
    |
    |__ main.js

databases\
|
|__ test\
    |
    |__ main.js
```

## Crear un evento

> _El nombre de la carpeta sera el que utilizara el evento_

```js
module.exports = {

    // El nombre del servicio (Automatico).
    // name: 'test',

    // La prioridad del servicio ante los otros (Mientras mayor sea el numero mas alta sera).
    priority: 0,

    // Los intentos que necesite el servicio.
    intents: [],

    // Las parciales que necesite el servicio.
    partials: [],

    // El evento del evento.
    event: function () {}
};
```

## Crear un servicio

> _El nombre de la carpeta sera el que utilizara el servicio_

```js
module.exports = {

    // El nombre del servicio (Automatico).
    // name: 'test',

    // La prioridad del servicio ante los otros (Mientras mayor sea el numero mas alta sera).
    priority: 0,

    // Los intentos que necesite el servicio.
    intents: [],

    // Las parciales que necesite el servicio.
    partials: [],

    // Los eventos del servicio.
    events: {}
};
```

## Crear una base de datos

> _El nombre de la carpeta sera el que utilizara la base de datos_

```js
module.exports = {

    // El nombre de la base de datos (Automatico).
    // name: 'test',

    // la base de datos.
    database: {}
};
```

## Crear una aplicacion (Comando)

> _El nombre de la carpeta sera el que utilizara la aplicacion (No puede contener espacios)_

> _El tipo de aplicacion se obtiene dependiendo de en cual categoria se creo la carpeta de la aplicacion_

> _El esquema se genera segun los valores del archivo principal_

```js
module.exports = {

    // El nombre de la aplicacion (Automatico).
    // name: 'test',

    // El tipo de aplicacion (Automatico).
    // type: 'command',

    // La descripcion de la aplicacion.
    description: 'Hello world',

    // La prioridad del servicio ante los otros (Mientras mayor sea el numero mas alta sera).
    priority: 0,

    // Si la aplicacion puede ejecutarse por MD.
    users: true,

    // Si la aplicacion puede ejecutarse en servidores.
    servers: true,

    // Si la aplicacion puede ejecutarse de forma efimera.
    hide: false,

    // Los intentos que necesite la aplicacion.
    intents: [],

    // Las parciales que necesite la aplicacion.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    //
    //  name: 'test',
    //  description: 'Hello world',
    //  options: [],
    //  type: 'INPUT_CHAT',
    //  defaultPermission: true
    //},

    // Los eventos de la aplicacion.
    events: {}
};
```

## Crear una aplicacion (Mensaje)

> _El nombre de la carpeta sera el que utilizara la aplicacion (No puede contener espacios)_

> _El tipo de aplicacion se obtiene dependiendo de en cual categoria se creo la carpeta de la aplicacion_

> _El esquema se genera segun los valores del archivo principal_

```js
module.exports = {

    // El nombre de la aplicacion (Automatico).
    // name: 'test',

    // El tipo de aplicacion (Automatico).
    // type: 'message',

    // La prioridad del servicio ante los otros (Mientras mayor sea el numero mas alta sera).
    priority: 0,

    // Si la aplicacion puede ejecutarse por MD.
    users: true,

    // Si la aplicacion puede ejecutarse en servidores.
    servers: true,

    // Si la aplicacion puede ejecutarse de forma efimera.
    hide: false,

    // Los intentos que necesite la aplicacion.
    intents: [],

    // Las parciales que necesite la aplicacion.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    //
    //  name: 'test',
    //  type: 'MESSAGE',
    //  defaultPermission: true
    //},

    // Los eventos de la aplicacion.
    events: {}
};
```

## Crear una aplicacion (Usuario)

> _El nombre de la carpeta sera el que utilizara la aplicacion (No puede contener espacios)_

> _El tipo de aplicacion se obtiene dependiendo de en cual categoria se creo la carpeta de la aplicacion_

> _El esquema se genera segun los valores del archivo principal_

```js
module.exports = {

    // El nombre de la aplicacion (Automatico).
    // name: 'test',

    // El tipo de aplicacion (Automatico).
    // type: 'user',

    // La prioridad del servicio ante los otros (Mientras mayor sea el numero mas alta sera).
    priority: 0,

    // Si la aplicacion puede ejecutarse por MD.
    users: true,

    // Si la aplicacion puede ejecutarse en servidores.
    servers: true,

    // Si la aplicacion puede ejecutarse de forma efimera.
    hide: false,

    // Los intentos que necesite la aplicacion.
    intents: [],

    // Las parciales que necesite la aplicacion.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    //
    //  name: 'test',
    //  type: 'USER',
    //  defaultPermission: true
    //},

    // Los eventos de la aplicacion.
    events: {}
};
```

## Servicios prefabricados 

### Indexer

Registra y actualiza las ``Aplicaciones`` creadas, editadas y eliminadas 

### Task

Gestiona la prioridad del proyecto