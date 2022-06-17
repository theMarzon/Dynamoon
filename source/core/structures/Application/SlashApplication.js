import discord from 'discord.js';

import deleteProperty from '../../utils/deleteProperty.js';

import Base from '../Base.js';

export default class extends Base {

    constructor (content) {

        super(content);

        // Tipo
        content.type = discord.ApplicationCommandType.ChatInput;

        // Si se permite ejecutar la aplicacion en DM's
        content.dm ??= true;

        // Opciones
        content.options ??= [];

        // Eventos
        content.events ??= {};

        // Nombres
        content.name ??= {};

        // Por defecto (Automatico)
        // content.name.default;

        // Descripciones
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
            default_member_permissions: content.permissions.member,
            // default_bot_permissions:    content.permissions.bot,
            dm_permission:              content.dm,
            options:                    content.options,

            name_localizations:        deleteProperty(content.name, 'default'),
            description_localizations: deleteProperty(content.description, 'default')
        };

        Object.assign(this, content);
    };
};
