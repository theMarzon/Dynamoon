<div align='center'>
    <img src='https://i.ibb.co/CKz4kQQ/logo.png' width='512' />
    <p>
        Un framework eficiente, rápido y modular para desarrollar bots utilizando discord.js
    </p>
</div>

## Características

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
    ```
    
    ```sh-session
    pnpm install
    ```

    ```sh-session
    yarn install
    ```

- Por último, cree el archivo ``.env`` en la raíz del proyecto y agregue las siguientes claves:

    | Nombre      | Contenido          |
    |-------------|--------------------|
    | `BOT_TOKEN` | El `Token` del bot |

## Directorios

- 📂 ``sources\``

    - 📂 ``events\`` _(Para los eventos)_

    - 📂 ``services\`` _(Para los servicios)_

    - 📂 ``applications\``

        - 📂 ``chat\`` _(Para las aplicaciones de barra lateral)_

        - 📂 ``user\`` _(Para las aplicaciones en el menu contextual de usuarios)_

        - 📂 ``message\`` _(Para las aplicaciones en el menu contextual de mensajes)_


# Como crear un evento, servicio o aplicación

> Ejemplos basados en los eventos, servicios y aplicaciones que contiene el **Framework** por defecto

## Evento

- Primero debe crear una carpeta en el [directorio para los eventos](https://github.com/theMarzon/Dynamoon/#Directorios) con el nombre del evento, esta carpeta contendrá todos nuestros futuros archivos

    > Si el directorio no existe, créelo

- Cree un archivo ``main.js`` o ``main.ts`` según su preferencia, en la carpeta del evento

    > En este caso utilizaremos **JavaScript** para este ejemplo
    >
    > Si desea utilizar **TypeScript**, primero termine estos pasos y luego vaya a [Como trasladar un evento a **TypeScript**]()

- Luego, exporte un objeto vacío:

```ts
export default {};
```

#

- Para definir la prioridad de ejecución que tendrá nuestro evento, cree la siguiente propiedad:

    > Tenga en cuenta que mientras más alta es la cifra, más prioridad tendrá el evento

```ts
export default {

    priority: 0
};
```

- [x] Este paso es opcional

#

- Para definir los ``Intents`` necesarios de su evento, cree la siguiente propiedad:

    > Por favor, utilicé estos [valores para definir los ``Intents``](https://discord.com/developers/docs/topics/gateway#gateway-intents)
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

# Como trasladar un evento, servicio o aplicación a **TypeScript**

> Más documentación próximamente...
