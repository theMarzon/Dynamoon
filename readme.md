<div align="center">
    <img src="https://i.ibb.co/02kJWXt/logo.png" width="512" />
</div>

Desarrolle Bots utilizando [discord.js](https://discord.js.org/) de la forma mas fácil, rápida, modular y dinámica posible.

## Iniciando un proyecto

- Instale [Node](https://nodejs.org/) en la versión ``v18.2.0`` y ejecute ``npm init``

- Abra el archivo ``package.json`` y agregue el objeto ``"type": "module"``

- Instale las siguientes dependencias:

    | Nombre     | Versión                       |
    |------------|-------------------------------|
    | discord.js | 14.0.0-dev.1653480262-68d5169 |
    | dotenv     | 16.0.0                        |

- Cree un archivo ``.env`` (_Este archivo contendrá ``TOKEN``, ``DEVELOPMENT_TOKEN`` y ``PRODUCTION_TOKEN`` según el uso_)

    > ``TOKEN`` se utilizará al ejecutar ``node ./index.js``

    > ``DEVELOPMENT_TOKEN`` se utilizará al ejecutar ``node ./index.js --dev-mode``

    > ``PRODUCTION_TOKEN`` se utilizará al ejecutar ``node ./index.js --prod-mode``

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

    // El nombre de la carpeta (automático).
    // package: 'example',

    // La prioridad del evento para cargarlo antes que al resto (mientras mayor sea el número, más alta es).
    priority: 0,

    // Si el evento esta en desarrollo.
    developing: true,

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El evento que se va a ejecutar.
    execute: ({ client, me, loaders, groupers, managers }) => {

        // ...
    }
};
```

## Crear un servicio

```js
export default {

    // El nombre a utilizar (automático).
    // name: 'example',

    // La prioridad del servicio para cargarlo antes que al resto (mientras mayor sea el número, mas alta es).
    priority: 0,

    // Si el servicio esta en desarrollo.
    developing: true,

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // Los eventos necesarios.
    events: {}
};
```

## Crear una aplicación de barra lateral

```js
export default {

    // Los nombres de la aplicación.
    name: {

        // El nombre por defecto de la aplicación (automático).
        default: 'example',

        // 'es-ES': 'ejemplo',
        // 'en-US': 'example',
        // ...
    },

    // Las descripciones de la aplicación.
    description: {
        
        // La descripcion por defecto de la aplicación.
        default: 'Example command',

        // 'es-ES': 'Comando de ejemplo',
        // 'en-US': 'Example command',
        // ...
    },

    // El tipo de la aplicación (automático).
    // type: 1,

    // La prioridad del aplicación para cargarlo antes que al resto (mientras mayor sea el número, más alta es).
    priority: 0,


    // Si la aplicación está en desarrollo.
    developing: true,

    // Si la aplicacion puede ejecutarse en DM's.

    dm: true,

    // Los permisos necesarios para ejecutar la aplicación.
    permissions: {

        // Los permisos que necesita un miembro para ejecutar la aplicación.
        member: null
    },

    replys: {

        // Si se tiene que responder una interacción automáticamente.
        automatic: true,

        // Si la respuesta automática se tiene que responder como efímera.
        private: false,

        // Los canales a ignorar si empiezan una interacción.
        ignore: []
    },

    // Los eventos a utilizar.
    events: {},

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El esquema de la aplicación (automático).
    // schema: {
    // 
    //  name: 'example',
    //  description: 'Example command',
    //  type: 1,
    //  options: [],
    //  default_member_permissions: null,
    //  dm_permission: true,
    //  name_localizations: {},
    //  description_localizations: {}
    // }
};
```

## Crear una aplicación de menú contextual para usuarios

```js
export default {

    // Los nombres de la aplicación.
    name: {

        // El nombre por defecto de la aplicación (automático).
        default: 'example',

        // 'es-ES': 'ejemplo',
        // 'en-US': 'example',
        // ...
    },

    // El tipo de la aplicación (automático).
    // type: 2,

    // La prioridad del aplicación para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,


    // Si la aplicación está en desarrollo.
    developing: true,

    // Si la aplicación puede ejecutarse en DM's.

    dm: true,

    // Los permisos necesarios para ejecutar la aplicación.
    permissions: {

        // Los permisos que necesita un miembro para ejecutar la aplicación.
        member: null
    },

    replys: {

        // Si se tiene que responder una interaccion automáticamente.
        automatic: true,

        // Si la respuesta automática se tiene que responder como efimera.
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

    // El esquema de la aplicación (automático).
    // schema: {
    // 
    //  name: 'example',
    //  type: 2,
    //  default_member_permissions: null,
    //  dm_permission: true,
    //  name_localizations: {}
    // }
};
```

## Crear una aplicación de menú contextual para mensajes

```js
export default {

    // Los nombres de la aplicación.
    name: {

        // El nombre por defecto de la aplicación (automático).
        default: 'example',

        // 'es-ES': 'ejemplo',
        // 'en-US': 'example',
        // ...
    },

    // El tipo de la aplicación (automático).
    // type: 3,

    // La prioridad del aplicación para cargarlo antes que al resto (mientras mayor sea el número, más alta es).
    priority: 0,


    // Si la aplicación está en desarrollo.
    developing: true,

    // Si la aplicación puede ejecutarse en DM's.

    dm: true,

    // Los permisos necesarios para ejecutar la aplicación.
    permissions: {

        // Los permisos que necesita un miembro para ejecutar la aplicación.
        member: null
    },

    replys: {

        // Si se tiene que responder una interaccion automáticamente.
        automatic: true,

        // Si la respuesta automática se tiene que responder como efimera.
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

    // El esquema de la aplicación (automático).
    // schema: {
    // 
    //  name: 'example',
    //  type: 3,
    //  default_member_permissions: null,
    //  dm_permission: true,
    //  name_localizations: {}
    // }
};
```

## Servicios prefabricados 

### Indexer

Crea y actualiza las ``Aplicaciones`` creadas, editadas y eliminadas.

## Eventos prefabricados

### Application

Este evento ejecuta las ``Aplicaciones`` cuando se crea una interacción proveniente de una aplicación de barra lateral o menú contextual.

> Si el proyecto se ejecuta en modo producción las aplicaciones que estén en desarrollo no se ejecutarán.

### Button

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` cuando se crea una interaccion proveniente de un boton.

### Menu

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` cuando se crea una interaccion proveniente de un menu.

### Modal

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` cuando se crea una interaccion proveniente de un modal.

### Ready

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` al momento de establecerse la conexión.

### Boot

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` al momento de inicializarse el proyecto.
