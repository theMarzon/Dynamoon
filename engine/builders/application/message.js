import discord from 'discord.js';

const removeDefault = (content) => {

    content = { ...content };

    delete content.default;

    return content;
};

export default class {

    constructor (options) {

        this.type = discord.ApplicationCommandType.Message;

        this.priority = options.priority ?? 0;
        
        this.public = options.public ?? false;
        this.dm     = options.dm     ?? true;

        this.intents  = options.intents  ?? [];
        this.partials = options.partials ?? [];

        this.events = options.events ?? {};

        // Nombres de la aplicacion
        this.name = options.name ?? {};

        this.name.default = options.name?.default ?? 'undefined';
        
        // Permisos de la aplicacion
        this.permissions = {};

        this.permissions.member = options.permissions?.member ?? null;

        // Opciones de respuesta
        this.reply = {};

        this.reply.automatic = options.reply?.automatic ?? true;
        this.reply.private   = options.reply?.private   ?? false;

        this.reply.ignore = options.reply?.ignore ?? [];

        // Esquema de la aplicacion
        this.schema = new discord.ContextMenuCommandBuilder();

        this.schema.name                       = this.name.default;
        this.schema.default_member_permissions = this.permissions.member;
        this.schema.dm_permission              = this.dm;
        this.schema.type                       = this.type;

        this.schema.name_localizations = removeDefault(this.name);
        
        // Elimina los "intents" duplicados
        this.intents = this.intents.filter((v, i, a) => a.indexOf(v) === i);
        
        // Elimina los "partials" duplicados
        this.partials = this.partials.filter((v, i, a) => a.indexOf(v) === i);
    };
};