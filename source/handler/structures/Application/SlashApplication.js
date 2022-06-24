import discord from 'discord.js';

import deleteProperty from '../../utils/deleteProperty.js';

export default class {

    constructor (content) {

        content.type = discord.ApplicationCommandType.ChatInput;

        content.dm ??= true;

        content.priority ??= 0;

        content.intents  ??= [];
        content.partials ??= [];
        content.options  ??= [];

        content.events ??= {};

        // Nombre
        content.name ??= {};

        content.name.default ??= 'undefined';

        // Descripcion
        content.description ??= {};

        content.description.default ??= 'undefined';

        // Permisos
        content.permissions ??= {};

        content.permissions.member ??= null;
        content.permissions.bot    ??= null;

        // Esquema
        content.schema = {

            type:                       content.type,
            name:                       content.name.default,
            description:                content.description.default,
            options:                    content.options,
            default_member_permissions: content.permissions.member,
            default_bot_permissions:    content.permissions.bot,
            dm_permission:              content.dm,

            name_localizations:        deleteProperty(content.name, 'default'),
            description_localizations: deleteProperty(content.description, 'default')
        };

        // Elimina los "intents" y "partials" duplicados
        content.intents  = content.intents.filter((value, index, array) => array.indexOf(value) === index);
        content.partials = content.partials.filter((value, index, array) => array.indexOf(value) === index);

        Object.assign(this, content);
    };
};
