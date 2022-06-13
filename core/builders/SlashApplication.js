import discord from 'discord.js';

const deleteDefault = function (content) {

    content = { ...content };

    delete content.default;

    return content;
};

export default class {

    constructor (content) {

        content.type = discord.ApplicationCommandType.ChatInput;

        content.priority ??= 0;

        content.dm ??= true;

        content.options  ??= [];
        content.intents  ??= [];
        content.partials ??= [];

        content.events ??= {};

        // Nombres de la aplicacion
        content.name ??= {};

        content.name.default ??= 'undefined';

        // Descripciones de la aplicacion
        content.description ??= {};

        content.description.default ??= 'undefined';

        // Permisos de la aplicacion
        content.permissions ??= {};

        content.permissions.member ??= null;

        // Restricciones de interacciones
        content.restrictions ??= [];

        // Esquema de la aplicacion
        content.schema = new discord.SlashCommandBuilder();

        content.schema.name                       = content.name.default;
        content.schema.description                = content.description.default;
        content.schema.default_member_permissions = content.permissions.member;
        content.schema.dm_permission              = content.dm;
        content.schema.type                       = content.type;
        content.schema.options                    = content.options;

        content.schema.name_localizations        = deleteDefault(content.name);
        content.schema.description_localizations = deleteDefault(content.description);

        // Elimina los "intents" y "partials" duplicados
        content.intents  = content.intents.filter((v, i, a) => a.indexOf(v) === i);
        content.partials = content.partials.filter((v, i, a) => a.indexOf(v) === i);

        Object.assign(this, content);
    };
};