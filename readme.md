<div align="center">
    <img src="https://i.ibb.co/JFrJgNS/logo.png" width="512" />
</div>

Un proyecto para empezar a desarrollar robots con la libreria ``discord.js``

## Requisitos del proyecto

| Dependencias | Version                        |
|--------------|--------------------------------|
| discord.js   | 14.0.0-dev.1645661258.8203c5d  |
| dotenv       | 16.0.0                         |

> _Se recomienda usar ``Node.js`` en la version ``16.14.0``_

## Estructura de los directorios

> _Ejemplo de como se ven los directorios con contenido_

```
sources\
|
|__ applications\
|   |
|   |__ commands\
|   |   |
|   |   |__ example\
|   |       |
|   |       |__ main.js
|   |
|   |__ messages\
|   |   |
|   |   |__ example\
|   |       |
|   |       |__ main.js
|   |
|   |__ users\
|       |
|       |__ example\
|           |
|           |__ main.js
|
|__ services\
|   |
|   |__ example\
|       |
|       |__ main.js
|
|__ events\
    |
    |__ example\
        |
        |__ main.js
```

## Crear un evento

```js
module.exports = {

    // El nombre a usar (Automatico segun el nombre de la carpeta a demas no puede contener espacios).
    // name: 'example',

    // La prioridad del evento para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    // Los intentos necesarios.
    intents: [],

    // Los parciales necesarios.
    partials: [],

    // El evento que se va a ejecutar.
    event: function () {}
};
```

## Crear un servicio

```js
module.exports = {

    // El nombre a usar (Automatico segun el nombre de la carpeta a demas no puede contener espacios).
    // name: 'example',

    // La prioridad del servicio para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    // Los intentos necesarios.
    intents: [],

    // Los parciales necesarios.
    partials: [],

    // Los eventos necesarios.
    events: {}
};
```

## Crear una aplicacion (Comando)

```js
module.exports = {

    // El nombre a usar (Automatico segun el nombre de la carpeta a demas no puede contener espacios).
    // name: 'example',

    // El tipo de aplicacion (Automatico segun el directorio en la que se creo la carpeta).
    // type: 'command',

    // La descripcion de la aplicacion.
    description: 'Example command',

    // La prioridad del aplicacion para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    access: {

        // Si la aplicacion puede ejecutarse en MD's.
        users: true,

        // Si la aplicacion puede ejecutarse en servidores.
        servers: true
    },

    // Si la interaccion solo puede verla el autor (Ciertos eventos pueden dejar de funcionar si se activa).
    private: false,

    // Si la aplicacion esta desactivada para todos por detecto.
    disable: false,

    // Los intentos necesarios.
    intents: [],

    // Los parciales necesarios.
    partials: [],

    // El esquema de la aplicacion (Automatico segun los ajustes de la aplicacion).
    // schema: {
    //
    //  name: 'example',
    //  description: 'Example command',
    //  options: [],
    //  type: 1,
    //  defaultPermission: true
    //},

    // Los eventos necesarios.
    events: {}
};
```

## Crear una aplicacion (Mensaje)

```js
module.exports = {

    // El nombre a usar (Automatico segun el nombre de la carpeta).
    // name: 'example',

    // El tipo de aplicacion (Automatico segun el directorio en la que se creo la carpeta).
    // type: 'message',

    // La prioridad del aplicacion para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    access: {

        // Si la aplicacion puede ejecutarse en MD's.
        users: true,

        // Si la aplicacion puede ejecutarse en servidores.
        servers: true
    },

    // Si la interaccion solo puede verla el autor (Ciertos eventos pueden dejar de funcionar si se activa).
    private: false,

    // Si la aplicacion esta desactivada para todos por detecto.
    disable: false,

    // Los intentos necesarios.
    intents: [],

    // Los parciales necesarios.
    partials: [],

    // El esquema de la aplicacion (Automatico segun los ajustes de la aplicacion).
    // schema: {
    //
    //  name: 'example',
    //  type: 2,
    //  defaultPermission: true
    //},

    // Los eventos necesarios.
    events: {}
};
```

## Crear una aplicacion (Usuario)

```js
module.exports = {

    // El nombre a usar (Automatico segun el nombre de la carpeta).
    // name: 'example',

    // El tipo de aplicacion (Automatico segun el directorio en la que se creo la carpeta).
    // type: 'user',

    // La prioridad del aplicacion para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    access: {

        // Si la aplicacion puede ejecutarse en MD's.
        users: true,

        // Si la aplicacion puede ejecutarse en servidores.
        servers: true
    },

    // Si la interaccion solo puede verla el autor (Ciertos eventos pueden dejar de funcionar si se activa).
    private: false,

    // Si la aplicacion esta desactivada para todos por detecto.
    disable: false,

    // Los intentos necesarios.
    intents: [],

    // Los parciales necesarios.
    partials: [],

    // El esquema de la aplicacion (Automatico segun los ajustes de la aplicacion).
    // schema: {
    //
    //  name: 'example',
    //  type: 3,
    //  defaultPermission: true
    //},

    // Los eventos necesarios.
    events: {}
};
```

## Servicios prefabricados 

### Booster

Aumenta la velocidad de carga momentaneamente al iniciarse la ejecucion del proyecto

### Indexer

Registra y actualiza las ``Aplicaciones`` creadas, editadas y eliminadas 