<div align='center'>
  <img src='https://i.ibb.co/02kJWXt/logo.png' width='512' />

  Un `Handler` eficiente para desarrollar bots utilizando [discord.js](https://discord.js.org/) de una forma rápida y modular
</div>

## 🧰 Preparando el proyecto

- Instale la versión `18.x` o superior de [Node](https://nodejs.org/)

- Instale las dependencias del proyecto

  ```sh-session
  npm install
  ```
  ```sh-session
  pnpm install
  ```
  ```sh-session
  yarn install
  ```

- Cree el archivo `.env` en la raíz del proyecto y agregue las siguientes llaves:

  | 🔐 Nombre   | 🔑 Valor           |
  |-------------|--------------------|
  | `BOT_TOKEN` | El `Token` del bot |

## 🧱 Creando los eventos, servicios y aplicaciones

### 🎯 Creando un evento

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

### 📡 Creando un servicio

```js
export default {

    // El nombre del servicio (Automático).
    // name: 'example',

    // La prioridad del servicio para cargarlo antes que al resto (Mientras mayor sea el número, más alta es).
    priority: 0,

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // Los eventos necesarios.
    events: {}
};
```

### 💻 Creando una aplicación de barra lateral

```js
export default {

    // El tipo de la aplicación (Automático).
    // type: 1,

    // La prioridad de la aplicación para cargarlo antes que al resto (Mientras mayor sea el número, más alta es).
    priority: 0,
    
    // Si la aplicacion puede ejecutarse en DM's.
    dm: true,

    // Los nombres de la aplicación.
    name: {

        // El nombre por defecto de la aplicación (Automático).
        // default: 'example',

        // El nombre de la aplicación según la localidad (Más información en https://discord.com/developers/docs/reference#locales).
        'es-ES': 'ejemplo',
        'en-US': 'example'
    },

    // Las descripciones de la aplicación.
    description: {

        // La descripción por defecto de la aplicación.
        default: 'Example command',

        // La descripción de la aplicación según la localidad (Más información en https://discord.com/developers/docs/reference#locales).
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
    //  name:        'example',
    //  description: 'Example command',
    //
    //  dm_permission: true,
    //
    //  type: 1,
    //
    //  default_member_permissions: null,
    //  default_bot_permissions:    null,
    //
    //  options: [],
    //
    //  name_localizations:        {},
    //  description_localizations: {}
    // }
};
```

### 💻 Creando una aplicación de menú contextual para usuarios

```js
export default {

    // El tipo de la aplicación (Automático).
    // type: 2,

    // La prioridad de la aplicación para cargarlo antes que al resto (Mientras mayor sea el número, más alta es).
    priority: 0,

    // Si la aplicación puede ejecutarse en DM's.
    dm: true,

    // Los nombres de la aplicación.
    name: {

        // El nombre por defecto de la aplicación (Automático).
        // default: 'example',

        // El nombre de la aplicación según la localidad (Más información en https://discord.com/developers/docs/reference#locales).
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
    //
    //  dm_permission: true,
    //
    //  type: 2,
    //
    //  default_member_permissions: null,
    //  default_bot_permissions:    null,
    //
    //  name_localizations: {}
    // }
};
```

### 💻 Creando una aplicación de menú contextual para mensajes

```js
export default {

    // El tipo de la aplicación (Automático).
    // type: 3,

    // La prioridad de la aplicación para cargarlo antes que al resto (Mientras mayor sea el número, más alta es).
    priority: 0,

    // Si la aplicación puede ejecutarse en DM's.
    dm: true,

    // Los nombres de la aplicación.
    name: {

        // El nombre por defecto de la aplicación (Automático).
        // default: 'example',

        // El nombre de la aplicación según la localidad (Más información en https://discord.com/developers/docs/reference#locales).
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
    //
    //  dm_permission: true,
    //
    //  type: 3,
    //
    //  default_member_permissions: null,
    //  default_bot_permissions:    null,
    //
    //  name_localizations: {}
    // }
};
```
