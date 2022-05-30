import discord from 'discord.js';

const removeDefault = (content) => {

    content = { ...content };

    delete content.default;

    return content;
};

export default class {

    constructor (options) {

        this.type = discord.ApplicationCommandType.ChatInput;

        this.priority = options.priority ?? 0;
        
        this.public = options.public ?? false;
        this.dm     = options.dm     ?? true;

        this.options  = options.options  ?? [];
        this.intents  = options.intents  ?? [];
        this.partials = options.partials ?? [];

        this.events = options.events ?? {};

        // Nombres de la aplicacion
        this.name = options.name ?? {};

        this.name.default = options.name?.default ?? 'undefined';

        // Descripciones de la aplicacion
        this.description = options.description ?? {};

        this.description.default = options.description?.default ?? 'Undefined description';

        // Permisos de la aplicacion
        this.permissions = {};

        this.permissions.member = options.permissions?.member ?? null;

        // Restricciones de interacciones
        this.restrict = options.restrict ?? {};

        // this.restrict.invert = options.restrict?.invert ?? false;

        this.restrict.guilds   = options.restrict?.guilds   ?? [];
        this.restrict.channels = options.restrict?.channels ?? [];
        this.restrict.users    = options.restrict?.users    ?? [];

        // Esquema de la aplicacion
        this.schema = new discord.SlashCommandBuilder();

        this.schema.name                       = this.name.default;
        this.schema.description                = this.description.default;
        this.schema.default_member_permissions = this.permissions.member;
        this.schema.dm_permission              = this.dm;
        this.schema.type                       = this.type;
        this.schema.options                    = this.options;

        this.schema.name_localizations        = removeDefault(this.name);
        this.schema.description_localizations = removeDefault(this.description);    
        
        // Elimina los "intents" duplicados
        this.intents = this.intents.filter((v, i, a) => a.indexOf(v) === i);
        
        // Elimina los "partials" duplicados
        this.partials = this.partials.filter((v, i, a) => a.indexOf(v) === i);
    };

    interface (name, options) {

        return this.interfaces[name](options);
    };
};