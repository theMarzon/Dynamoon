import discord from 'discord.js';

import deleteProperty from '../../utils/deleteProperty.js';

export default class {

    type = discord.ApplicationCommandType.ChatInput;

    name = 'undefined';

    priority = 0;
    intents  = 0;

    partials = [];

    events = {};

    display = {

        dm: true,

        name:        { default: 'undefined' },
        description: { default: 'undefined' },

        options: []
    };

    permissions = {

        member: null,
        bot:    null
    };

    schema = {

        type:                       this.type,
        name:                       this.name.default,
        default_member_permissions: this.permissions.member,
        default_bot_permissions:    this.permissions.bot,
        dm_permission:              this.dm,

        name_localizations:        deleteProperty(this.name, 'default'),
        description_localizations: deleteProperty(this.description, 'default')
    };

    constructor (content) {

        this.name = content.name ?? this.name;
        this.dm   = content.dm   ?? this.dm;

        this.priority = content.priority ?? this.priority;
        this.intents  = content.intents  ?? this.intents;

        this.partials = content.partials ?? this.partials;

        this.events = content.events ?? this.events;

        // Visualizacion
        this.display.dm                  = content.display.dm                    ?? this.display.dm;
        this.display.name.default        = content.display?.name?.default        ?? this.display.name.default;
        this.display.description.default = content.display?.description?.default ?? this.display.description.default;
        this.display.options             = content.display?.options              ?? this.display.options;

        // Permisos
        this.permissions = content.permissions ?? this.permissions;

        this.permissions.member = content.permissions?.member ?? this.permissions.member;
        this.permissions.bot    = content.permissions?.bot    ?? this.permissions.bot;

        // Esquema
        this.schema = content.schema ?? this.schema;

        this.schema.name                       = this.display.name.default;
        this.schema.description                = this.display.description.default;
        this.schema.options                    = this.display.options;
        this.schema.dm_permission              = this.display.dm;
        this.schema.default_member_permissions = this.permissions.member;
        this.schema.default_bot_permissions    = this.permissions.bot;

        this.schema.name_localizations        = deleteProperty(this.display.name, 'default');
        this.schema.description_localizations = deleteProperty(this.display.description, 'default');

        // Elimina los "partials" duplicados
        this.partials = this.partials.filter((value, index, array) => array.indexOf(value) === index);
    };
};
