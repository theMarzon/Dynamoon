<div align='center'>
    <img src='https://i.ibb.co/CKz4kQQ/logo.png' width='512' />
    <p>
        Un framework eficiente para desarrollar bots utilizando discord.js de una forma rápida y sencilla
    </p>
</div>

## Tabla de recursos

- [📦 Instalación del proyecto](https://github.com/theMarzon/Dynamoon#Instalación-del-proyecto)

- [🧱 Creando los eventos, servicios y aplicaciones](https://github.com/theMarzon/Dynamoon#Creando-los-eventos-servicios-y-aplicaciones)

    - [🎯 Creando un evento](https://github.com/theMarzon/Dynamoon#Creando-un-evento)

    - [📡 Creando un servicio](https://github.com/theMarzon/Dynamoon#Creando-un-servicio)

## Instalación del proyecto

- Instale la versión `18.x` o superior de [Node](https://nodejs.org)

- Instale las dependencias del proyecto utilizando `Yarn`
  
    ```sh-session
    yarn install
    ```

- Cree el archivo `.env` en la raíz del proyecto y agregue las siguientes llaves:

    | Nombre      | Contenido          |
    |-------------|--------------------|
    | `BOT_TOKEN` | El `Token` del bot |

## Creando los eventos, servicios y aplicaciones

> Estos ejemplos fueron hechos basándose en los eventos, servicios y aplicaciones pre-creados

### Creando un evento

- Cree una carpeta en `source ➡ events` con el nombre del evento

    > Si la carpeta `source ➡ events` no existe, créela

- Cree el archivo `main.js` en la raíz de la carpeta del evento

- Abra el archivo `main.js` y exporte un objeto vacío:

    ```js
    export default {};
    ```

- Establezca la prioridad de ejecución:

    ```js
    export default {

        priority: 0
    };
    ```

- Establezca los `Intents` necesarios:

    ```js
    export default {

        priority: 0,
        intents:  0
    };
    ```

- Establezca la función que se ejecutara al ejecutarse el proyecto:

    ```js
    export default {

        priority: 0,
        intents:  0,

        execute: ({ client, file, loaded, used }) => {

            console.log('Hello world');
        }
    };
    ```

### Creando un servicio

- Cree una carpeta en `source ➡ services` con el nombre del servicio

    > Si la carpeta `source ➡ services` no existe, créela

- Cree el archivo `main.js` en la raíz de la carpeta del servicio

- Abra el archivo `main.js` y exporte un objeto vacío:

    ```js
    export default {};
    ```

- Establezca la prioridad de ejecución:

    ```js
    export default {

        priority: 0
    };
    ```

- Establezca los `Intents` necesarios:

    ```js
    export default {

        priority: 0,
        intents:  0
    };
    ```

- Establezca un objeto llamado `events` que contendrá los eventos a utilizar:

    ```js
    export default {

        priority: 0,
        intents:  0,

        events: {}
    };

- Establezca en el objeto `events`, un `Array` con el nombre del evento a utilizar y que este contenga las funciones a ejecutarse:

    ```js
    export default {

        priority: 0,
        intents:  0,

        events: {

            boot: [
                
                ({ client, file, loaded, used }) => {

                    console.log('Hello world');
                }
            ]
        }
    };
    ```
> Más documentación próximamente
