<div align='center'>
    <img src='https://i.ibb.co/02kJWXt/logo.png' width='512' />
</div>

Un ``Handler`` para desarrollar bots utilizando [discord.js](https://discord.js.org/) de una forma rápida y modular

## 📦 Preparando el proyecto

- Instale la version ``18.4.0`` o superior de [Node](https://nodejs.org/)

- Instale la version ``1.22.19`` o superior de [Yarn](https://yarnpkg.com/) (Proyecto compatible con ``Yarn Berry``)

- Ejecute en su terminal:

    ```sh
    yarn install
    ```

## 🧰 Configurando el proyecto

### 📂 Espacios de trabajo

Especifique un nombre seguido del parámetro ``--workspace`` para crear un nuevo espacio de trabajo, ejemplo:

```sh
node ./index.mjs --workspace example
```

> Por defecto es ``none``

### 🔐 Variables de entorno

Cree un archivo ``.env`` en el espacio de trabajo utilizado, luego abra el archivo y crear las siguientes llaves:

| Nombre | Necesario | Contenido            |
|--------|-----------|----------------------|
| TOKEN  | Si        | El ``Token`` del bot |

## 🧱 Estructura de archivos

```
source\
|
|__ workspaces\
    |
    |__ example\
        |
        |__ .env
        |
        |__ applications\
        |   |
        |   |__ slash\
        |   |   |
        |   |   |__ example\
        |   |       |
        |   |       |__ main.mjs
        |   |
        |   |__ messages\
        |   |   |
        |   |   |__ example\
        |   |       |
        |   |       |__ main.mjs
        |   |
        |   |__ users\
        |       |
        |       |__ example\
        |           |
        |           |__ main.mjs
        |
        |__ services\
        |   |
        |   |__ example\
        |       |
        |       |__ main.mjs
        |
        |__ events\
            |
            |__ example\
                |
                |__ main.mjs
```
## 📦 Creando aplicaciones, eventos y archivos

### 🎯 Evento

```js
export default {

    // El nombre del evento (Automático).
    // name: 'example',

    // La prioridad del evento para cargarlo antes que al resto (Mientras mayor sea el número, más alta es).
    priority: 0,

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El evento que se va a ejecutar.
    execute: ({ client, me, loaded, grouped, directories }) => {

        // ...
    }
};
```

### 🔧 Servicio

```js
export default {

    // El nombre del servicio (Automático).
    // name: 'example',

    // La prioridad del servicio para cargarlo antes que al resto (Mientras mayor sea el número, mas alta es).
    priority: 0,

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // Los eventos necesarios.
    events: {}
};
```

### 💻 Aplicación de barra lateral

```js
export default {

    // El tipo de la aplicación (Automático).
    // type: 1,

    // La prioridad del aplicación para cargarlo antes que al resto (Mientras mayor sea el número, más alta es).
    priority: 0,
    
    // Si la aplicacion puede ejecutarse en DM's.
    dm: true,

    // Los nombres de la aplicación.
    name: {

        // El nombre por defecto de la aplicación (Automático).
        // default: 'example',

        // El nombre de la aplicacion segun la localidad.
        'es-ES': 'ejemplo',
        'en-US': 'example'
    },

    // Las descripciones de la aplicación.
    description: {
        
        // La descripcion por defecto de la aplicación.
        default: 'Example command',

        // La descripcion de la aplicacion segun la localidad.
        'es-ES': 'Comando de ejemplo',
        'en-US': 'Example command'
    },

    // Los permisos necesarios para ejecutar la aplicación.
    permissions: {

        // Los permisos que necesita un miembro para ejecutar la aplicación.
        member: null,

        // Los permisos que necesita el bot para ejecutar la aplicación.
        bot: null
    },

    // Los eventos a utilizar.
    events: {},

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El esquema de la aplicación (Automático).
    // schema: {
    // 
    //  name: 'example',
    //  description: 'Example command',
    //  type: 1,
    //  options: [],
    //  default_member_permissions: null,
    //  default_bot_permissions: null,
    //  dm_permission: true,
    //  name_localizations: {},
    //  description_localizations: {}
    // }
};
```

### 💻 Aplicación de menú contextual para usuarios

```js
export default {

    // El tipo de la aplicación (Automático).
    // type: 2,

    // La prioridad del aplicación para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    // Si la aplicación puede ejecutarse en DM's.
    dm: true,

    // Los nombres de la aplicación.
    name: {

        // El nombre por defecto de la aplicación (Automático).
        // default: 'example',

        // El nombre de la aplicacion segun la localidad.
        'es-ES': 'ejemplo',
        'en-US': 'example'
    },

    // Los permisos necesarios para ejecutar la aplicación.
    permissions: {

        // Los permisos que necesita un miembro para ejecutar la aplicación.
        member: null,

        // Los permisos que necesita el bot para ejecutar la aplicación.
        bot: null
    },

    // Los eventos a utilizar.
    events: {},

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El esquema de la aplicación (Automático).
    // schema: {
    // 
    //  name: 'example',
    //  type: 2,
    //  default_member_permissions: null,
    //  default_bot_permissions: null,
    //  dm_permission: true,
    //  name_localizations: {}
    // }
};
```

### 💻 Aplicación de menú contextual para mensajes

```js
export default {

    // El tipo de la aplicación (Automático).
    // type: 3,

    // La prioridad del aplicación para cargarlo antes que al resto (Mientras mayor sea el número, más alta es).
    priority: 0,

    // Si la aplicación puede ejecutarse en DM's.
    dm: true,

    // Los nombres de la aplicación.
    name: {

        // El nombre por defecto de la aplicación (Automático).
        // default: 'example',

        // El nombre de la aplicacion segun la localidad.
        'es-ES': 'ejemplo',
        'en-US': 'example'
    },
    
    // Los permisos necesarios para ejecutar la aplicación.
    permissions: {

        // Los permisos que necesita un miembro para ejecutar la aplicación.
        member: null,

        // Los permisos que necesita el bot para ejecutar la aplicación.
        bot: null
    },

    // Los eventos a utilizar.
    events: {},

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El esquema de la aplicación (Automático).
    // schema: {
    // 
    //  name: 'example',
    //  type: 3,
    //  default_member_permissions: null,
    //  default_bot_permissions: null,
    //  dm_permission: true,
    //  name_localizations: {}
    // }
};
```
