import discord from 'discord.js';

import deleteProperty from '../../utils/deleteProperty.js';

import Base from '../Base.js';

export default class extends Base {

    constructor (content) {

        super(content);

        // Tipo (Automatico)
        // content.type;

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

        // Restricciones
        content.restrictions ??= [];

        // Esquema
        content.schema = new discord.ContextMenuCommandBuilder();

        content.schema.type                       = content.type;
        content.schema.name                       = content.name.default;
        content.schema.default_member_permissions = content.permissions.member;
        content.schema.dm_permission              = content.dm;

        content.schema.name_localizations = deleteProperty(content.name, 'default');

        Object.assign(this, content);
    };
};
