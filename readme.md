<div align='center'>
    <img src='https://i.ibb.co/CKz4kQQ/logo.png' width='512' />
    <p>
        Un framework eficiente, rápido y modular para desarrollar bots utilizando discord.js
    </p>
</div>

## Características

- ⚡️ Gestión eficiente.

- 🧱 Estructura modular.

- 🧽 Código limpio.

- ✍ Hecho en **TypeScript**.

- 🌃 Actualizado a lo último.

- 🛡 Sin dependencias de terceros.

## Implementaciones

Puedes ver el estado actual de las implementaciones [aquí.](https://themarzon.notion.site/3a93960b980b484780c38e8c9aa360e1)

## Instalación

1. Instale **Node** ``v18.7.0`` o superior [aquí.](https://nodejs.org)

2. Instale las dependencias del proyecto:
  
    ```sh-session
    npm install
    ```
    
    ```sh-session
    pnpm install
    ```

    ```sh-session
    yarn install
    ```

3. Cree un archivo llamado ``.env`` en la raíz del proyecto y agregue las siguientes claves:

    | Nombre      | Contenido        |
    |-------------|------------------|
    | `BOT_TOKEN` | La firma del bot |

## Directorios

- 📂 ``sources\``

    - 📂 ``events\`` _(Eventos)_

    - 📂 ``services\`` _(Servicios)_

    - 📂 ``applications\``

        - 📂 ``chat\`` _(Aplicaciones de barra lateral)_

        - 📂 ``user\`` _(Aplicaciones en el menú contextual de usuarios)_

        - 📂 ``message\`` _(Aplicaciones en el menú contextual de mensajes)_


# Como crear eventos, servicios y aplicaciones

> Ejemplos creados a partir de los eventos, servicios y aplicaciones que contiene el **Framework** por defecto.

## Eventos

1. Cree una carpeta en el [directorio de eventos](https://github.com/theMarzon/Dynamoon/#Directorios) con el nombre del evento, esta carpeta contendrá todos los archivos del evento.

    > Si el directorio no existe, créelo.

2. Cree un archivo llamado ``main.js`` en la carpeta del evento.

3. Exporte un objeto vacío:

```js
export default {};
```

#

4. Para definir la prioridad de ejecución del evento, cree la siguiente propiedad:

    > Tenga en cuenta que mientras más alta es la cifra, más prioridad tendrá el evento.

```js
export default {

    priority: 0
};
```

- [x] Este paso es opcional.

#

5. Para definir los ``Intents`` necesarios del evento, cree la siguiente propiedad:

    > Por favor, utilicé estos [valores para definir los ``Intents``.](https://discord.com/developers/docs/topics/gateway#gateway-intents)
    > 
    > En este ejemplo, no serán necesarios.

```js
export default {

    priority: 0,
    intents:  0
};
```

- [x] Este paso es opcional.

#

6. Para definir los ``Partials`` necesarios del evento, cree la siguiente propiedad:

    > En este ejemplo, no serán necesarios.

```js
export default {

    priority: 0,
    intents:  0,

    partials: []
};
```

- [x] Este paso es opcional.

#

7. Para definir la función a ejecutar por el **Framework**:

```js
export default {

    priority: 0,
    intents:  0,

    partials: [],

    execute: ({ client, file, loaded, used }) => {

        console.log('Hello world');
    }
};
```

> Más documentación próximamente...
