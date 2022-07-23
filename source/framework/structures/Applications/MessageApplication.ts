import discord from 'discord.js';

import {

    MessageApplicationData,
    MessageApplicationShow,
    MessageApplicationSchema,
    MessageApplicationOptions
} from '../../types/Applications/MessageApplication.js';

import deleteProperty from '../../utils/deleteProperty.js';

export default class implements MessageApplicationData {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    events = {};

    type = discord.ApplicationCommandType.Message;

    show: MessageApplicationShow = {

        dm: true,

        name: {

            default: 'undefined'
        },

        permissions: {

            member: null,
            bot:    null
        }
    };

    schema: MessageApplicationSchema = {

        type:                       this.type,
        name:                       this.show.name.default,
        default_member_permissions: this.show.permissions.member,
        default_bot_permissions:    this.show.permissions.bot,
        dm_permission:              this.show.dm,

        name_localizations: {}
    };

    constructor (options: MessageApplicationOptions) {

        this.name = options.name;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;

        this.events = options.events ?? this.events;

        // Visualizacion
        this.show.dm = options.show?.dm ?? this.show.dm;

        this.show.name         = options.show?.name          ?? this.show.name;
        this.show.name.default = options.show?.name?.default ?? this.show.name.default;

        this.show.permissions.member = options.show?.permissions?.member ?? this.show.permissions.member;
        this.show.permissions.bot    = options.show?.permissions?.bot    ?? this.show.permissions.bot;

        // Esquema
        this.schema.name                       = this.show.name.default;
        this.schema.default_member_permissions = this.show.permissions.member;
        this.schema.default_bot_permissions    = this.show.permissions.bot;
        this.schema.dm_permission              = this.show.dm;

        this.schema.name_localizations = deleteProperty(this.show.name, 'default');
    };
};
