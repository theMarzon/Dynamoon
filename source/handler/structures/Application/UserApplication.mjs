import discord from 'discord.js';

import deleteProperty from '../../utils/deleteProperty.mjs';

export default class {

    type = discord.ApplicationCommandType.User;

    dm = true;

    priority = 0;

    intents  = [];
    partials = [];

    events   = {};
    features = {};

    name = { default: 'undefined' };

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

        name_localizations: deleteProperty(this.name, 'default')
    };

    constructor (content) {

        this.dm = content.dm ?? this.dm;

        this.priority = content.priority ?? this.priority;

        this.intents  = content.intents  ?? this.intents;
        this.partials = content.partials ?? this.partials;

        this.events = content.events ?? this.events;

        // Nombre
        this.name = content.name ?? this.name;

        this.name.default = content.name?.default ?? this.name.default;

        // Caracteristicas
        this.features = content.features ?? this.features;

        // Permisos
        this.permissions = content.permissions ?? this.permissions;

        this.permissions.member = content.permissions?.member ?? this.permissions.member;
        this.permissions.bot    = content.permissions?.bot    ?? this.permissions.bot;

        // Esquema
        this.schema = content.schema ?? this.schema;

        this.schema.name                       = this.name;
        this.schema.dm_permission              = this.dm;
        this.schema.default_member_permissions = this.permissions.member;
        this.schema.default_bot_permissions    = this.permissions.bot;

        this.schema.name_localizations = deleteProperty(this.name, 'default');

        // Elimina los "intents" y "partials" duplicados
        this.intents  = this.intents.filter((value, index, array) => array.indexOf(value) === index);
        this.partials = this.partials.filter((value, index, array) => array.indexOf(value) === index);
    };
};
