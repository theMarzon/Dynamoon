import discord from 'discord.js';

import deleteTool from '../../tools/delete.js';

import Package from '../Package.js';

export default class extends Package {

    constructor (content) {

        super(content);

        // El tipo de aplicacion
        content.type = discord.ApplicationCommandType.User;

        // Si se permite ejecutar la aplicacion en DM's
        content.dm ??= true;

        // Los eventos de la aplicacion
        content.events ??= {};

        // Los nombres de la aplicacion
        content.name ??= {};

        content.name.default ??= 'undefined';

        // Los permisos de la aplicacion
        content.permissions ??= {};

        content.permissions.member ??= null;

        // Las restricciones de interacciones
        content.restrictions ??= [];

        // El esquema de la aplicacion
        content.schema = new discord.ContextMenuCommandBuilder();

        content.schema.type                       = content.type;
        content.schema.name                       = content.name.default;
        content.schema.default_member_permissions = content.permissions.member;
        content.schema.dm_permission              = content.dm;

        content.schema.name_localizations = deleteTool(content.name, 'default');

        Object.assign(this, content);
    };
};
