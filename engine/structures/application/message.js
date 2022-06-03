import discord from 'discord.js';

const removeDefault = (content) => {

    content = { ...content };

    delete content.default;

    return content;
};

export class MessageApplicationBuilder {

    constructor (content) {

        content.type = discord.ApplicationCommandType.Message;

        content.priority ??= 0;
        
        content.dm ??= true;

        content.intents  ??= [];
        content.partials ??= [];

        content.events ??= {};

        // Nombres de la aplicacion
        content.name ??= {};

        content.name.default ??= 'undefined';
        
        // Permisos de la aplicacion
        content.permissions ??= {};

        content.permissions.member ??= null;

        // Restricciones de interacciones
        content.restrict ??= {};

        // content.restrict.invert ??= false;

        content.restrict.guilds   ??= [];
        content.restrict.channels ??= [];
        content.restrict.users    ??= [];

        // Esquema de la aplicacion
        content.schema = new discord.ContextMenuCommandBuilder();

        content.schema.name                       = content.name.default;
        content.schema.default_member_permissions = content.permissions.member;
        content.schema.dm_permission              = content.dm;
        content.schema.type                       = content.type;

        content.schema.name_localizations = removeDefault(content.name);
        
        // Elimina los "intents" y "partials" duplicados
        content.intents  = content.intents.filter((v, i, a) => a.indexOf(v) === i);
        content.partials = content.partials.filter((v, i, a) => a.indexOf(v) === i);

        Object.assign(this, content);
    };
};