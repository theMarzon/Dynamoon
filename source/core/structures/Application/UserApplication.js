import discord from 'discord.js';

import deleteProperty from '../../utils/deleteProperty.js';

import Base from '../Base.js';

export default class extends Base {

    constructor (content) {

        super(content);

        // Tipo
        content.type = discord.ApplicationCommandType.User;

        // Si se permite ejecutar la aplicacion en DM's
        content.dm ??= true;

        // Eventos
        content.events ??= {};

        // Nombres
        content.name ??= {};

        // Por defecto (Automatico)
        // content.name.default;

        // Permisos
        content.permissions ??= {};

        content.permissions.member ??= null;
        content.permissions.bot    ??= null;

        // Esquema
        content.schema = {

            type:                       content.type,
            name:                       content.name.default,
            default_member_permissions: content.permissions.member,
            // default_bot_permissions:    content.permissions.bot,
            dm_permission:              content.dm,

            name_localizations: deleteProperty(content.name, 'default')
        };

        Object.assign(this, content);
    };
};
