import discord from 'discord.js';

import deleteProperty from '../../utils/deleteProperty.mjs';

export default class {

    type = discord.ApplicationCommandType.ChatInput;

    dm = true;

    priority = 0;

    intents  = [];
    partials = [];
    options  = [];

    events = {};

    name        = { default: 'undefined' };
    description = { default: 'undefined' };

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

        this.dm = content.dm ?? this.dm;

        this.priority = content.priority ?? this.priority;

        this.intents  = content.intents  ?? this.intents;
        this.partials = content.partials ?? this.partials;
        this.options  = content.options  ?? this.options;

        this.events = content.events ?? this.events;

        // Nombre
        this.name = content.name ?? this.name;

        this.name.default = content.name?.default ?? this.name.default;

        // Descripcion
        this.description = content.description ?? this.description;

        this.description.default = content.description?.default ?? this.description.default;

        // Permisos
        this.permissions = content.permissions ?? this.permissions;

        this.permissions.member = content.permissions?.member ?? this.permissions.member;
        this.permissions.bot    = content.permissions?.bot    ?? this.permissions.bot;

        // Esquema
        this.schema = content.schema ?? this.schema;

        this.schema.name                       = this.name.default;
        this.schema.description                = this.description.default;
        this.schema.options                    = this.options;
        this.schema.dm_permission              = this.dm;
        this.schema.default_member_permissions = this.permissions.member;
        this.schema.default_bot_permissions    = this.permissions.bot;

        this.schema.name_localizations        = deleteProperty(this.name, 'default');
        this.schema.description_localizations = deleteProperty(this.description, 'default');

        // Elimina los "intents" y "partials" duplicados
        this.intents  = this.intents.filter((value, index, array) => array.indexOf(value) === index);
        this.partials = this.partials.filter((value, index, array) => array.indexOf(value) === index);
    };
};
