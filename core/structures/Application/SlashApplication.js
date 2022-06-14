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

        // Restricciones
        content.restrictions ??= [];

        // Esquema
        content.schema = new discord.SlashCommandBuilder();

        content.schema.name                       = content.name.default;
        content.schema.description                = content.description.default;
        content.schema.default_member_permissions = content.permissions.member;
        content.schema.dm_permission              = content.dm;
        content.schema.options                    = content.options;

        content.schema.name_localizations        = deleteProperty(content.name, 'default');
        content.schema.description_localizations = deleteProperty(content.description, 'default');

        Object.assign(this, content);
    };
};
