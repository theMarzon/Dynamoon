import discord from 'discord.js';

import deletePropertyUtil from '../utils/deleteProperty.js';

import PackageBuilder from './Package.js';

export default class extends PackageBuilder {

    constructor (content) {

        super(content);

        // El tipo de aplicacion
        content.type = discord.ApplicationCommandType.ChatInput;

        // Si se permite ejecutar la aplicacion en DM's
        content.dm ??= true;

        // Las opciones de la aplicacion
        content.options ??= [];

        // Los eventos de la aplicacion
        content.events ??= {};

        // Los nombres de la aplicacion
        content.name ??= {};

        content.name.default ??= 'undefined';

        // Las descripciones de la aplicacion
        content.description ??= {};

        content.description.default ??= 'undefined';

        // Los permisos de la aplicacion
        content.permissions ??= {};

        content.permissions.member ??= null;

        // Las restricciones de interacciones
        content.restrictions ??= [];

        // El esquema de la aplicacion
        content.schema = new discord.SlashCommandBuilder();

        content.schema.name                       = content.name.default;
        content.schema.description                = content.description.default;
        content.schema.default_member_permissions = content.permissions.member;
        content.schema.dm_permission              = content.dm;
        content.schema.type                       = content.type;
        content.schema.options                    = content.options;

        content.schema.name_localizations        = deletePropertyUtil(content.name, 'default');
        content.schema.description_localizations = deletePropertyUtil(content.description, 'default');

        Object.assign(this, content);
    };
};
