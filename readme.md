<div align='center'>
    <img src='https://i.ibb.co/CKz4kQQ/logo.png' width='512' />
    <p>
        Un framework eficiente, rápido y modular para desarrollar bots utilizando discord.js
    </p>
</div>

## Índice

- [✨ Características](https://github.com/theMarzon/Dynamoon/#Características)

- [🚚 Implementaciones](https://github.com/theMarzon/Dynamoon/#Implementaciones)

- [📦 Preparación](https://github.com/theMarzon/Dynamoon/#Preparación)

- [🧱 Estructuras](https://github.com/theMarzon/Dynamoon/#Estructuras)

- 🏗 Como crear un evento, servicio o aplicación

    > _Ejemplos basados en los eventos, servicios y aplicaciones que contiene el **Framework** por defecto_

    - [🎯 Como crear un evento]()

    - [📡 Como crear un servicio]()

- 🚧 Como trasladar un evento, servicio o aplicación a **TypeScript**

    > _Ejemplos basados en los eventos, servicios y aplicaciones que contiene el **Framework** por defecto_

    - [🎯 Como trasladar un evento a **TypeScript**]()

    - [📡 Como trasladar un servicio a **TypeScript**]()

## ✨ Características

- ⚡️ Gestión de recursos eficiente

- 🧱 Estructura de archivos modular

- 🧽 Sin código basura

- ✍ Escrito en **TypeScript**

- 🌃 Actualizado a las últimas versiones

- 🛡 Sin dependencias de terceros

## Implementaciones

Puede ver el estado actual de las implementaciones [aquí](https://themarzon.notion.site/3a93960b980b484780c38e8c9aa360e1)

## Preparación

- Primero instale **Node** en la versión ``18.6.0`` o superior [aquí](https://nodejs.org)

- Luego, instale las dependencias:
  
    ```sh-session
    npm install
    pnpm install
    yarn install
    ```

- Por último, cree el archivo ``.env`` en la raíz del proyecto y agregue las siguientes claves:

    | Nombre      | Contenido          |
    |-------------|--------------------|
    | `BOT_TOKEN` | El `Token` del bot |

## Estructuras

- Directorio para los eventos

```
sources\
|
|__ events\
```

#

- Directorio para los servicios


```
sources\
|
|__ services\
```

#

- Directorio para las aplicaciones de barra lateral


```
sources\
|
|__ applications\
    |
    |__ chat\
```

#

- Directorio para las aplicaciones de menú contextual para usuarios


```
sources\
|
|__ applications\
    |
    |__ user\
```

#

- Directorio para las aplicaciones de menú contextual para mensajes

```
sources\
|
|__ applications\
    |
    |__ message\
```

## Como crear un evento

- Primero debe crear una carpeta en el directorio ``source ➡ events`` con el nombre del evento, esta carpeta contendrá todos nuestros futuros archivos

    > _Si el directorio ``source ➡ events`` no existe, créelo_

- Cree un archivo ``main.js`` o ``main.ts`` según su preferencia, en la carpeta del evento

    > _En este caso utilizaremos **JavaScript** para este ejemplo_
    >
    > Si desea utilizar **TypeScript**, primero termine estos pasos y luego vaya a [Como trasladar un evento a **TypeScript**]()

- Luego, exporte un objeto vacío:

```ts
export default {};
```

#

- Para definir la prioridad de ejecución que tendrá nuestro evento, cree la siguiente propiedad:

    > _Tenga en cuenta que mientras más alta es la cifra, más prioridad tendrá el evento_

```ts
export default {

    priority: 0
};
```

- [x] Este paso es opcional

#

- Para definir los ``Intents`` necesarios de su evento, cree la siguiente propiedad:

    > _Por favor, utilicé estos [valores para definir los ``Intents``](https://discord.com/developers/docs/topics/gateway#gateway-intents)_
    > 
    > En este ejemplo, no serán necesarios

```ts
export default {

    priority: 0,
    intents:  0
};
```

- [x] Este paso es opcional

#

- Para definir los ``Partials`` necesarios de su evento, cree la siguiente propiedad:

    > En este ejemplo, no serán necesarios

```ts
export default {

    priority: 0,
    intents:  0,

    partials: []
};
```

- [x] Este paso es opcional

#

- Y por último, para definir la función a ejecutar cuando el **Framework** sea ejecutado:

```ts
export default {

    priority: 0,
    intents:  0,

    partials: [],

    execute: ({ client, file, loaded, used }) => {

        console.log('Hello world');
    }
};
```

> _Más documentación próximamente..._
