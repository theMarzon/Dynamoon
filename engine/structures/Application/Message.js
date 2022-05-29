import discord from 'discord.js';

const removeDefaultObject = (content) => {

    content = { ...content };

    delete content.default;

    return content;
};

export class MessageApplicationBuilder {

    constructor (options) {

        this.type = discord.ApplicationCommandType.Message;

        this.priority = options.priority ?? 0;
        
        this.developing = options.developing ?? true;
        this.dm         = options.dm         ?? true;

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
        this.replys = {};

        this.replys.automatic = options.replys?.automatic ?? true;
        this.replys.private   = options.replys?.private   ?? false;

        this.replys.ignore = options.replys?.ignore ?? [];

        // Esquema de la aplicacion
        this.schema = new discord.ContextMenuCommandBuilder();

        this.schema.name                       = this.name.default;
        this.schema.default_member_permissions = this.permissions.member;
        this.schema.dm_permission              = this.dm;
        this.schema.type                       = this.type;

        this.schema.name_localizations = removeDefaultObject(this.name);
        
        // Elimina los "intents" duplicados
        this.intents = this.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);
        
        // Elimina los "partials" duplicados
        this.partials = this.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);
    };
};