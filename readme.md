<div align="center">
    <img src="https://i.ibb.co/02kJWXt/logo.png" width="512" />
</div>

Un ``Handler`` para desarrollar bots utilizando [discord.js](https://discord.js.org/) de una forma rápida y modular

## 📦 Preparando el proyecto

- Instale [Node](https://nodejs.org/) (Se recomienda la v18.4.0 o superior)

- Ejecute:

    ```sh
    npm init --yes
    ```

- Abra el archivo ``package.json`` y agregue ``"type": "module"``

- Instale las siguientes dependencias:

    | Nombre     | Versión                       |
    |------------|-------------------------------|
    | discord.js | 14.0.0-dev.1656158629-c4653f9 |
    | dotenv     | 16.0.1                        |

## 🧰 Configurando el proyecto

### 📂 Espacios de trabajo

Utilice el parámetro ``--workspace`` seguido el nombre del espacio de trabajo a utilizar, ejemplo:

```sh
node ./index.js --workspace example
```

> Por defecto es ``none``

### 🔐 Variables de entorno

Cree un archivo ``.env`` en el espacio de trabajo utilizado, luego abra el archivo y crear las siguientes llaves:

| Nombre | Obligatorio | Contenido            |
|--------|-------------|----------------------|
| TOKEN  | Si          | El ``Token`` del bot |

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
## 📦 Creando aplicaciones, eventos y archivos

### 🎯 Evento

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
    execute: ({ client, me, loaded, grouped, directories }) => {

        // ...
    }
};
```

### 🔧 Servicio

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

### 💻 Aplicación de barra lateral

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

### 💻 Aplicación de menú contextual para usuarios

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

### 💻 Aplicación de menú contextual para mensajes

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
