import discord from 'discord.js';

import {

    ChatApplicationData,
    ChatApplicationShow,
    ChatApplicationSchema,
    ChatApplicationOptions
} from '../../types/Applications/ChatApplication.js';

import deleteProperty from '../../utils/deleteProperty.js';

export default class implements ChatApplicationData {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    events = {};

    type = discord.ApplicationCommandType.ChatInput;

    show: ChatApplicationShow = {

        dm: true,

        options: [],

        name: {

            default: 'undefined'
        },

        description: {

            default: 'Undefined'
        },

        permissions: {

            member: null,
            bot:    null
        }
    };

    schema: ChatApplicationSchema = {

        type:                       this.type,
        options:                    this.show.options,
        name:                       this.show.name.default,
        description:                this.show.description.default,
        default_member_permissions: this.show.permissions.member,
        default_bot_permissions:    this.show.permissions.bot,
        dm_permission:              this.show.dm,

        name_localizations:        {},
        description_localizations: {}
    };

    constructor (options: ChatApplicationOptions) {

        this.name = options.name;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;

        this.events = options.events ?? this.events;

        // Visualizacion
        this.show.dm = options.show?.dm ?? this.show.dm;

        this.show.options = options.show?.options ?? this.show.options;

        this.show.name         = options.show?.name          ?? this.show.name;
        this.show.name.default = options.show?.name?.default ?? this.show.name.default;

        this.show.description         = options.show?.description          ?? this.show.description;
        this.show.description.default = options.show?.description?.default ?? this.show.description.default;

        this.show.permissions.member = options.show?.permissions?.member ?? this.show.permissions.member;
        this.show.permissions.bot    = options.show?.permissions?.bot    ?? this.show.permissions.bot;

        // Esquema
        this.schema.options                    = this.show.options;
        this.schema.name                       = this.show.name.default;
        this.schema.description                = this.show.description.default;
        this.schema.default_member_permissions = this.show.permissions.member;
        this.schema.default_bot_permissions    = this.show.permissions.bot;
        this.schema.dm_permission              = this.show.dm;

        this.schema.name_localizations        = deleteProperty(this.show.name, 'default');
        this.schema.description_localizations = deleteProperty(this.show.description, 'default');
    };
};
