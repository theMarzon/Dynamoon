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

        permissions: {

            member: null,
            bot:    null
        },

        options: []
    };

    schema = {

        type:                       this.type,
        options:                    this.display.options,
        name:                       this.display.name.default,
        description:                this.display.description.default,
        default_member_permissions: this.display.permissions.member,
        default_bot_permissions:    this.display.permissions.bot,
        dm_permission:              this.display.dm,

        name_localizations:        {},
        description_localizations: {}
    };

    constructor (content) {

        this.name = content.name ?? this.name;
        this.dm   = content.dm   ?? this.dm;

        this.priority = content.priority ?? this.priority;
        this.intents  = content.intents  ?? this.intents;

        this.partials = content.partials ?? this.partials;

        this.events = content.events ?? this.events;

        // Visualizacion
        this.display.dm      = content.display?.dm      ?? this.display.dm;
        this.display.options = content.display?.options ?? this.display.options;

        this.display.name         = content.display?.name          ?? this.display.name;
        this.display.name.default = content.display?.name?.default ?? this.display.name.default;

        this.display.description         = content.display?.description          ?? this.display.description;
        this.display.description.default = content.display?.description?.default ?? this.display.description.default;

        this.display.permissions        = content.display?.permissions         ?? this.display.permissions;
        this.display.permissions.member = content.display?.permissions?.member ?? this.display.permissions.member;
        this.display.permissions.bot    = content.display?.permissions?.bot    ?? this.display.permissions.bot;

        // Esquema
        this.schema = content.schema ?? this.schema;

        this.schema.options                    = this.display.options;
        this.schema.name                       = this.display.name.default;
        this.schema.description                = this.display.description.default;
        this.schema.default_member_permissions = this.display.permissions.member;
        this.schema.default_bot_permissions    = this.display.permissions.bot;
        this.schema.dm_permission              = this.display.dm;

        this.schema.name_localizations        = deleteProperty(this.display.name, 'default');
        this.schema.description_localizations = deleteProperty(this.display.description, 'default');

        // Elimina los partials duplicados
        this.partials = this.partials.filter((value, index, array) => array.indexOf(value) === index);
    };
};
