<div align='center'>
    <div>
        <img src='https://i.ibb.co/CKz4kQQ/logo.png' width='512' />
        <p>
            <a href='https://github.com/theMarzon/Dynamoon/actions/workflows/tester.yml'><img src='https://github.com/theMarzon/Dynamoon/actions/workflows/tester.yml/badge.svg?branch=main' alt='Discord' /></a>
        </p>
    </div>
    <p>
        Un gestor eficiente para desarrollar bots utilizando discord.js de una forma rápida y modular
    </p>
</div>

## Índice

- [📦 Instalación del proyecto](https://github.com/theMarzon/Dynamoon#Instalación-del-proyecto)

- [🧱 Creando los eventos, servicios y aplicaciones](https://github.com/theMarzon/Dynamoon#Creando-los-eventos-servicios-y-aplicaciones)

    - [🎯 Creando un evento](https://github.com/theMarzon/Dynamoon#Creando-un-evento)

        - [📦 Preparando el evento](https://github.com/theMarzon/Dynamoon#Preparando-el-evento)

        - [💻 Programando el evento](https://github.com/theMarzon/Dynamoon#Programando-el-evento)

    - [📡 Creando un servicio](https://github.com/theMarzon/Dynamoon#Creando-un-servicio)

        - [📦 Preparando el servicio](https://github.com/theMarzon/Dynamoon#Preparando-el-servicio)

        - [💻 Programando el servicio](https://github.com/theMarzon/Dynamoon#Programando-el-servicio)

    - [💻 Creando una aplicación de barra lateral](https://github.com/theMarzon/Dynamoon#Creando-una-aplicación-de-barra-lateral)

        - [📦 Preparando la aplicación de barra lateral](https://github.com/theMarzon/Dynamoon#Preparando-la-aplicación-de-barra-lateral)

        - [💻 Programando la aplicación de barra lateral](https://github.com/theMarzon/Dynamoon#Programando-la-aplicación-de-barra-lateral)

    - [💻 Creando una aplicación de menú contextual para usuarios](https://github.com/theMarzon/Dynamoon#Creando-una-aplicación-de-menú-contextual-para-usuarios)

        - [📦 Preparando la aplicación de menú contextual para usuarios](https://github.com/theMarzon/Dynamoon#Preparando-la-aplicación-de-menú-contextual-para-usuarios)

        - [💻 Programando la aplicación de menú contextual para usuarios](https://github.com/theMarzon/Dynamoon#Programando-la-aplicación-de-menú-contextual-para-usuarios)

    - [💻 Creando una aplicación de menú contextual para mensajes](https://github.com/theMarzon/Dynamoon#Creando-una-aplicación-de-menú-contextual-para-mensajes)

        - [📦 Preparando la aplicación de menú contextual para mensajes](https://github.com/theMarzon/Dynamoon#Preparando-la-aplicación-de-menú-contextual-para-mensajes)

        - [💻 Programando la aplicación de menú contextual para mensajes](https://github.com/theMarzon/Dynamoon#Programando-la-aplicación-de-menú-contextual-para-mensajes)

- [📚 Acerca de los eventos, servicios y aplicaciones predefinidos](https://github.com/theMarzon/Dynamoon#Acerca-de-los-eventos-servicios-y-aplicaciones-predefinidos)

## Instalación del proyecto

- Instale la versión `18.x` o superior de [Node](https://nodejs.org/)

- Instale las dependencias del proyecto utilizando `Yarn`
  
    ```sh-session
    yarn install
    ```

- Cree el archivo `.env` en la raíz del proyecto y agregue las siguientes llaves:

    | Nombre      | Contenido          |
    |-------------|--------------------|
    | `BOT_TOKEN` | El `Token` del bot |

## Creando los eventos, servicios y aplicaciones

### Creando un evento

#### Preparando el evento

- Cree una carpeta en `source -> events` con el nombre del evento

    > Si la carpeta `source -> events` no existe, créela

- Cree el archivo `main.js` en la carpeta del evento

#### Programando el evento

- Exportamos un objeto vacío:

    ```mjs
    export default {};
    ```

- Establecemos la prioridad de ejecución a nuestro evento _(Esto es opcional)_:

    ```mjs
    export default {

        priority: 0
    };
    ```

- Establecemos los `intents` que sean necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        priority: 0,

        intents: []
    };
    ```

- Establecemos los `partials` que sean necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        priority: 0,

        intents:  [],
        partials: []
    };
    ```

- Establecemos la función que va a ejecutar el evento:

    ```mjs
    export default {

        priority: 0,

        intents:  [],
        partials: [],

        execute: ({ client, me, loaded, grouped, directories }) => {

            console.log('Hello world');
        }
    };
    ```

### Creando un servicio

#### Preparando el servicio

- Cree una carpeta en `source -> services` con el nombre del servicio

    > Si la carpeta `source -> services` no existe, créela

- Cree el archivo `main.js` en la carpeta del servicio

#### Programando el servicio

- Exportamos un objeto vacío:

    ```mjs
    export default {};
    ```

- Establecemos la prioridad de ejecución a nuestro servicio _(Esto es opcional)_:

    ```mjs
    export default {

        priority: 0
    };
    ```

- Establecemos los `intents` que sean necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        priority: 0,

        intents: []
    };
    ```

- Establecemos los `partials` que sean necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        priority: 0,

        intents:  [],
        partials: []
    };
    ```

- Establecemos un objeto que contendrá los eventos necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        priority: 0,

        intents:  [],
        partials: [],

        events: {

            boot: [
                
                ({ client, me, loaded, grouped, directories }) => {

                    console.log('Hello world');
                }
            ]
        }
    };
    ```

### Creando una aplicación de barra lateral

#### Preparando la aplicación de barra lateral

- Cree una carpeta en `source -> applications -> slash` con el nombre de la aplicación sin espacios y en minúsculas

    > Si la carpeta `source -> applications -> slash` no existe, créela

- Cree el archivo `main.js` en la carpeta de la aplicación

#### Programando la aplicación de barra lateral

- Exportamos un objeto vacío:

    ```mjs
    export default {};
    ```

- Establecemos el nombre de la aplicación según la localidad _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        }
    };
    ```

- Establecemos la descripción de la aplicación por defecto:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        description: {

            default: 'Example command'
        }
    };
    ```

- Establecemos la descripción de la aplicación según la localidad _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        description: {
            
            default: 'Example command',

            'es-ES': 'Comando de ejemplo',
            'en-US': 'Example command'
        }
    };
    ```

- Establecemos los permisos necesarios para ejecutar la aplicación _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        description: {
            
            default: 'Example command',

            'es-ES': 'Comando de ejemplo',
            'en-US': 'Example command'
        },

        permissions: {

            member: null,
            bot:    null
        }
    };
    ```

- Establecemos las opciones de la aplicación _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        description: {
            
            default: 'Example command',

            'es-ES': 'Comando de ejemplo',
            'en-US': 'Example command'
        },

        permissions: {

            member: null,
            bot:    null
        },

        options: []
    };
    ```

- Establecemos la prioridad de ejecución a nuestra aplicación _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        description: {
            
            default: 'Example command',

            'es-ES': 'Comando de ejemplo',
            'en-US': 'Example command'
        },

        permissions: {

            member: null,
            bot:    null
        },

        options: [],

        priority: 0
    };
    ```

- Establecemos si la aplicación puede ejecutarse en DM _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        description: {
            
            default: 'Example command',

            'es-ES': 'Comando de ejemplo',
            'en-US': 'Example command'
        },

        permissions: {

            member: null,
            bot:    null
        },

        options: [],

        priority: 0,

        dm: true
    };
    ```

- Establecemos los `intents` que sean necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        description: {
            
            default: 'Example command',

            'es-ES': 'Comando de ejemplo',
            'en-US': 'Example command'
        },

        permissions: {

            member: null,
            bot:    null
        },

        options: [],

        priority: 0,

        dm: true,

        intents: []
    };
    ```

- Establecemos los `partials` que sean necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        description: {
            
            default: 'Example command',

            'es-ES': 'Comando de ejemplo',
            'en-US': 'Example command'
        },

        permissions: {

            member: null,
            bot:    null
        },

        options: [],

        priority: 0,

        dm: true,

        intents:  [],
        partials: []
    };
    ```

- Establecemos un objeto que contendrá los eventos necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        description: {
            
            default: 'Example command',

            'es-ES': 'Comando de ejemplo',
            'en-US': 'Example command'
        },

        permissions: {

            member: null,
            bot:    null
        },

        options: [],

        priority: 0,

        dm: true,

        intents:  [],
        partials: [],

        events: {

            boot: [
                
                ({ client, me, loaded, grouped, directories }) => {

                    console.log('Hello world');
                }
            ]
        }
    };
    ```

### Creando una aplicación de menú contextual para usuarios

#### Preparando la aplicación de menú contextual para usuarios

- Cree una carpeta en `source -> applications -> user` con el nombre de la aplicación

    > Si la carpeta `source -> applications -> user` no existe, créela

- Cree el archivo `main.js` en la carpeta de la aplicación

#### Programando la aplicación de menú contextual para usuarios

- Exportamos un objeto vacío:

    ```mjs
    export default {};
    ```

- Establecemos el nombre de la aplicación según la localidad _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        }
    };
    ```

- Establecemos los permisos necesarios para ejecutar la aplicación _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        }
    };
    ```

- Establecemos la prioridad de ejecución a nuestra aplicación _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        },

        priority: 0
    };
    ```

- Establecemos si la aplicación puede ejecutarse en DM _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        },

        priority: 0,

        dm: true
    };
    ```

- Establecemos los `intents` que sean necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        },

        priority: 0,

        dm: true,

        intents: []
    };
    ```

- Establecemos los `partials` que sean necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        },

        priority: 0,

        dm: true,

        intents:  [],
        partials: []
    };
    ```

- Establecemos un objeto que contendrá los eventos necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        },

        priority: 0,

        dm: true,

        intents:  [],
        partials: [],

        events: {

            boot: [
                
                ({ client, me, loaded, grouped, directories }) => {

                    console.log('Hello world');
                }
            ]
        }
    };
    ```

### Creando una aplicación de menú contextual para mensajes

#### Preparando la aplicación de menú contextual para mensajes

- Cree una carpeta en `source -> applications -> message` con el nombre de la aplicación sin espacios

    > Si la carpeta `source -> applications -> message` no existe, créela

- Cree el archivo `main.js` en la carpeta de la aplicación

#### Programando la aplicación de menú contextual para mensajes

- Exportamos un objeto vacío:

    ```mjs
    export default {};
    ```

- Establecemos el nombre de la aplicación según la localidad _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        }
    };
    ```

- Establecemos los permisos necesarios para ejecutar la aplicación _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        }
    };
    ```

- Establecemos la prioridad de ejecución a nuestra aplicación _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        },

        priority: 0
    };
    ```

- Establecemos si la aplicación puede ejecutarse en DM _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        },

        priority: 0,

        dm: true
    };
    ```

- Establecemos los `intents` que sean necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        },

        priority: 0,

        dm: true,

        intents: []
    };
    ```

- Establecemos los `partials` que sean necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        },

        priority: 0,

        dm: true,

        intents:  [],
        partials: []
    };
    ```

- Establecemos un objeto que contendrá los eventos necesarios _(Esto es opcional)_:

    ```mjs
    export default {

        name: {

            'es-ES': 'ejemplo',
            'en-US': 'example'
        },

        permissions: {

            member: null,
            bot:    null
        },

        priority: 0,

        dm: true,

        intents:  [],
        partials: [],

        events: {

            boot: [
                
                ({ client, me, loaded, grouped, directories }) => {

                    console.log('Hello world');
                }
            ]
        }
    };
    ```

## Acerca de los eventos, servicios y aplicaciones predefinidos

> Apartado próximamente