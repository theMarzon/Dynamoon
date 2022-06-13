import discord from 'discord.js';

import deletePropertyUtil from '../utils/deleteProperty.js';

import PackageBuilder from './Package.js';

export default class extends PackageBuilder {

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

        content.schema.name                       = content.name.default;
        content.schema.default_member_permissions = content.permissions.member;
        content.schema.dm_permission              = content.dm;
        content.schema.type                       = content.type;

        content.schema.name_localizations = deletePropertyUtil(content.name, 'default');

        Object.assign(this, content);
    };
};
