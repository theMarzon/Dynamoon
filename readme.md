<div align="center">
    <img src="https://i.ibb.co/02kJWXt/logo.png" width="512" />
</div>

Desarrolla Bots utilizando [discord.js](https://discord.js.org/) de la forma mas facil, rapida, modular y dinamica posible

## Iniciando un proyecto

- Instale [Node](https://nodejs.org/) en la version ``v18.2.0`` y ejecute ``npm init``

- Abra el archivo ``package.json`` y agrege el objeto ``"type": "module"``

- Instale las siguientes dependencias

    | Nombre     | Version                       |
    |------------|-------------------------------|
    | discord.js | 14.0.0-dev.1653480262-68d5169 |
    | dotenv     | 16.0.0                        |

- Cree un archivo ``.env`` (_Este archivo contendra ``TOKEN``, ``DEVELOPMENT_TOKEN`` y ``PRODUCTION_TOKEN`` segun el uso_)

    > ``TOKEN`` se utilizara al ejecutar ``node ./index.js``

    > ``DEVELOPMENT_TOKEN`` se utilizara al ejecutar ``node ./index.js --dev-mode``

    > ``PRODUCTION_TOKEN`` se utilizara al ejecutar ``node ./index.js --prod-mode``

## Estructura de archivos

```
applications\
|
|__ slash\
|   |
|   |__ example\
|       |
|       |__ main.js
|
|__ messages\
|   |
|   |__ example\
|       |
|       |__ main.js
|
|__ users\
    |
    |__ example\
        |
        |__ main.js

services\
|
|__ example\
    |
    |__ main.js

events\
|
|__ example\
    |
    |__ main.js
```

## Crear un evento

```js
export default {

    // El nombre de la carpeta (Automatico).
    // package: 'example',

    // La prioridad del evento para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El evento que se va a ejecutar.
    execute: ({ client, loaders, groupers, managers, tools }) => {

        // ...
    }
};
```

## Crear un servicio

```js
export default {

    // El nombre a utilizar (Automatico).
    // name: 'example',

    // La prioridad del servicio para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // Los eventos necesarios.
    events: {}
};
```

## Crear una aplicacion de barra lateral

```js
export default {

    // El nombre por defecto de la aplicacion (Automatico).
    // name: 'example',

    // El nombre de la aplicacion segun el idioma.
    nameLocalizations: {

        // 'es-ES': 'ejemplo',
        // 'en-US': 'example',
        // ...
    },

    // La descripcion por defecto de la aplicacion.
    description: 'Example command',

    // La descripcion de la aplicacion segun el idioma.
    descriptionLocalizations: {

        // 'es-ES': 'Comando de ejemplo',
        // 'en-US': 'Example command',
        // ...
    },

    // El tipo de la aplicacion (Automatico).
    // type: 'message',

    // La prioridad del aplicacion para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    // Si la aplicacion puede ejecutarse en DM's.
    DMPermission: true,

    // Los permisos que un miembro necesita para poder ejecutar esta aplicacion.
    defaultMemberPermissions: null,

    replys: {

        // Si se tiene que responder una interaccion automaticamente.
        automatic: true,

        // Si la respuesta automatica se tiene que responder como efimera.
        private: false,

        // Los canales a ignorar si empiezan una interaccion.
        ignore: []
    },

    // Los eventos a utilizar.
    events: {},

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    // 
    //  name: 'example',
    //  description: 'Example command',
    //  type: 1,
    //  defaultPermission: true,
    //  nameLocalizations: {},
    //  descriptionLocalizations: {}
    // }
};
```

## Crear una aplicacion de menu contextual para mensajes

```js
export default {

    // El nombre por defecto de la aplicacion (Automatico).
    // name: 'example',

    // El nombre de la aplicacion segun el idioma.
    nameLocalizations: {

        // 'es-ES': 'ejemplo',
        // 'en-US': 'example',
        // ...
    },

    // El tipo de la aplicacion (Automatico).
    // type: 'message',

    // La prioridad del aplicacion para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    // Si la aplicacion puede ejecutarse en DM's.
    DMPermission: true,

    // Los permisos que un miembro necesita para poder ejecutar esta aplicacion.
    defaultMemberPermissions: null,

    replys: {

        // Si se tiene que responder una interaccion automaticamente.
        automatic: true,

        // Si la respuesta automatica se tiene que responder como efimera.
        private: false,

        // Los canales a ignorar si empiezan una interaccion.
        ignore: []
    },

    // Los eventos a utilizar.
    events: {},

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    // 
    //  name: 'example',
    //  type: 2,
    //  defaultPermission: true,
    //  nameLocalizations: {}
    // }
};
```

## Crear una aplicacion de menu contextual para usuarios

```js
export default {

    // El nombre por defecto de la aplicacion (Automatico).
    // name: 'example',

    // El nombre de la aplicacion segun el idioma.
    nameLocalizations: {

        // 'es-ES': 'ejemplo',
        // 'en-US': 'example',
        // ...
    },

    // El tipo de la aplicacion (Automatico).
    // type: 'user',

    // La prioridad del aplicacion para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    // Si la aplicacion puede ejecutarse en DM's.
    DMPermission: true,

    // Los permisos que un miembro necesita para poder ejecutar esta aplicacion.
    defaultMemberPermissions: null,

    replys: {

        // Si se tiene que responder una interaccion automaticamente.
        automatic: true,

        // Si la respuesta automatica se tiene que responder como efimera.
        private: false,

        // Los canales a ignorar si empiezan una interaccion.
        ignore: []
    },

    // Los eventos a utilizar.
    events: {},

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    // 
    //  name: 'example',
    //  type: 3,
    //  defaultPermission: true,
    //  nameLocalizations: {}
    // }
};
```

## Servicios prefabricados 

### Indexer

Crea y actualiza las ``Aplicaciones`` creadas, editadas y eliminadas 

## Eventos prefabricados

### Application

Este evento ejecuta las ``Aplicaciones`` cuando se crea una interaccion

### Ready

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` al momento de establecerse la conexion

### Boot

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` al momento de inicializarse el proyecto