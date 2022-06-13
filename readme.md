<div align="center">
    <img src="https://i.ibb.co/02kJWXt/logo.png" width="512" />
</div>

Desarrolle Bots utilizando [discord.js](https://discord.js.org/) de la forma mas fácil, rápida, modular y dinámica posible

## Iniciando un proyecto

- Instale [Node](https://nodejs.org/) en la versión ``v18.3.0`` o superior y ejecute ``npm init``

- Abra el archivo ``package.json`` y agregue ``"type": "module"`` para usar modulos ``ECMAScript``

- Instale las siguientes dependencias:

    | Nombre     | Versión                       |
    |------------|-------------------------------|
    | discord.js | 14.0.0-dev.1654430643-7a1095b |
    | dotenv     | 16.0.0                        |

- Cree un archivo ``.env``, ``.env.development`` o ``.env.production`` segun su preferencia:

    > ``.env`` se utilizará al ejecutar ``node ./index.js``

    > ``.env.development`` se utilizará al ejecutar ``node ./index.js --development``

    > ``.env.production`` se utilizará al ejecutar ``node ./index.js --production``

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

## Estructura de un evento

```js
export default {

    // El nombre del evento (automático).
    // name: 'example',

    // La prioridad del evento para cargarlo antes que al resto (mientras mayor sea el número, más alta es).
    priority: 0,

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El evento que se va a ejecutar.
    execute: ({ client, me, loadeds, groupeds, managers }) => {

        // ...
    }
};
```

## Estructura de un servicio

```js
export default {

    // El nombre del servicio (automático).
    // name: 'example',

    // La prioridad del servicio para cargarlo antes que al resto (mientras mayor sea el número, mas alta es).
    priority: 0,

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // Los eventos necesarios.
    events: {}
};
```

## Estructura de una aplicación de barra lateral

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
    
    // Si la aplicacion puede ejecutarse en DM's.
    dm: true,

    // Los permisos necesarios para ejecutar la aplicación.
    permissions: {

        // Los permisos que necesita un miembro para ejecutar la aplicación.
        member: null
    },

    // Las restricciones para las interacciones de gremios, canales y usuarios.
    restrict: {

        // Invierte la gestion de las restricciones.
        // invert: false (Pendiente),

        // Gremios a restringir.
        guilds: [

            // ID's...
        ],

        // Canales a restringir.
        channels: [

            // ID's o tipos...     
        ],

        // Usuarios a restringir.
        users: [

            // ID's...
        ]
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

## Estructura de una aplicación de menú contextual para usuarios

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

    // Si la aplicación puede ejecutarse en DM's.
    dm: true,

    // Los permisos necesarios para ejecutar la aplicación.
    permissions: {

        // Los permisos que necesita un miembro para ejecutar la aplicación.
        member: null
    },

    // Las restricciones para las interacciones de gremios, canales y usuarios.
    restrict: {

        // Invierte la gestion de las restricciones.
        // invert: false (Pendiente),

        // Gremios a restringir.
        guilds: [

            // ID's...
        ],

        // Canales a restringir.
        channels: [

            // ID's o tipos...     
        ],

        // Usuarios a restringir.
        users: [

            // ID's...
        ]
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

## Estructura de una aplicación de menú contextual para mensajes

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

    // Si la aplicación puede ejecutarse en DM's.
    dm: true,

    // Los permisos necesarios para ejecutar la aplicación.
    permissions: {

        // Los permisos que necesita un miembro para ejecutar la aplicación.
        member: null
    },

    // Las restricciones para las interacciones de gremios, canales y usuarios.
    restrict: {

        // Invierte la gestion de las restricciones.
        // invert: false (Pendiente),

        // Gremios a restringir.
        guilds: [

            // ID's...
        ],

        // Canales a restringir.
        channels: [

            // ID's o tipos...     
        ],

        // Usuarios a restringir.
        users: [

            // ID's...
        ]
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

Crea y actualiza las ``Aplicaciones`` creadas, editadas y eliminadas

## Eventos prefabricados

### Application

Este evento ejecuta las ``Aplicaciones`` cuando se crea una interacción proveniente de una aplicación de barra lateral o menú contextual

### Button

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` cuando se crea una interaccion proveniente de un boton

### Menu

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` cuando se crea una interaccion proveniente de un menu

### Modal

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` cuando se crea una interaccion proveniente de un modal

### Ready

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` al momento de que el cliente establezca la conexión

### Boot

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` al momento de inicializarse el proyecto