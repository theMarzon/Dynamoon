<div align='center'>
    <img src='https://i.ibb.co/CKz4kQQ/logo.png' width='512' />
    <p>
        Un framework eficiente para desarrollar bots utilizando discord.js
    </p>
</div>

## Índice

- [✨ Características](https://github.com/theMarzon/Dynamoon#Características)

- [🚚 Implementaciones](https://github.com/theMarzon/Dynamoon#Implementaciones)

- [📦 Instalación](https://github.com/theMarzon/Dynamoon#Instalación-del-proyecto)

- 🧱 Crear un evento, servicio o aplicación

    > _Ejemplos basados en los eventos, servicios y aplicaciones pre-creadas_

    - [🎯 Crear un evento](https://github.com/theMarzon/Dynamoon#Crear-un-evento)

    - [📡 Crear un servicio](https://github.com/theMarzon/Dynamoon#Crear-un-servicio)

## Características

- ⚡️ Gestión de recursos eficientes 

- 🧱 Estructura de archivos modular

- 🧽 Sin código basura

- ✍ Escrito en [**TypeScript**](https://www.typescriptlang.org)

- 🌃 Utiliza las últimas versiones de las dependencias

## Implementaciones

Puede ver el estado de las implementaciones en esta [aquí](https://themarzon.notion.site/3a93960b980b484780c38e8c9aa360e1)

## Instalación

- Instale la versión ``18.6.0`` o superior de [**Node**](https://nodejs.org)

- Instale las dependencias del proyecto utilizando [**Yarn**](https://yarnpkg.com):
  
    ```sh-session
    yarn install
    ```

- Cree el archivo ``.env`` en la raíz del proyecto y agregue las siguientes llaves:

    | Nombre      | Contenido          |
    |-------------|--------------------|
    | `BOT_TOKEN` | El `Token` del bot |

## Crear un evento

Cree una carpeta en ``source ➡ events`` con el nombre del evento

> _Si la carpeta ``source ➡ events`` no existe, créela_

##

Cree el archivo ``main.js`` en la carpeta creada y luego, exporte un objeto vacío:

```js
export default {};
```

##

Define la prioridad de ejecución:

- Mientras más alta es la cifra, más prioridad tendrá

- [x] Es opcional

```js
export default {

    priority: 0
};
```

##

Define los ``Intents`` necesarios:

- [x] Es opcional

```js
export default {

    priority: 0,
    intents:  0
};
```

##

Define la función a ejecutarse:

- [x] Es opcional

```js
export default {

    priority: 0,
    intents:  0,

    execute: ({ client, file, loaded, used }) => {

        console.log('Hello world');
    }
};
```

## Crear un servicio

Cree una carpeta en ``source ➡ services`` con el nombre del servicio

> _Si la carpeta ``source ➡ services`` no existe, créela_

##

Cree el archivo ``main.js`` en la carpeta creada y luego, exporte un objeto vacío:

```js
export default {};
```

##

Define la prioridad de ejecución:

- Mientras más alta es la cifra, más prioridad tendrá

- [x] Es opcional

```js
export default {

    priority: 0
};
```

##

Define los ``Intents`` necesarios:

- [x] Es opcional

```js
export default {

    priority: 0,
    intents:  0
};
```

##

Define los eventos a utilizarse:

- [x] Es opcional

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

> _Más documentación próximamente..._
