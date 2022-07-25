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

    type: discord.ApplicationCommandType.ChatInput = discord.ApplicationCommandType.ChatInput;

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

        type:                     this.type,
        options:                  this.show.options,
        name:                     this.show.name.default,
        description:              this.show.description.default,
        defaultMemberPermissions: this.show.permissions.member,
        defaultBotPermissions:    this.show.permissions.bot,
        dmPermission:             this.show.dm,

        nameLocalizations:        {},
        descriptionLocalizations: {}
    };

    constructor (options: ChatApplicationOptions) {

        this.name   = options.name;
        this.events = options.events;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;

        // Visualizacion
        this.show.name        = options.show.name;
        this.show.description = options.show.description;

        this.show.dm = options.show.dm ?? this.show.dm;

        this.show.options = options.show.options ?? this.show.options;

        this.show.permissions.member = options.show.permissions?.member ?? this.show.permissions.member;
        this.show.permissions.bot    = options.show.permissions?.bot    ?? this.show.permissions.bot;

        // Esquema
        this.schema.options                  = this.show.options;
        this.schema.name                     = this.show.name.default;
        this.schema.description              = this.show.description.default;
        this.schema.defaultMemberPermissions = this.show.permissions.member;
        this.schema.defaultBotPermissions    = this.show.permissions.bot;
        this.schema.dmPermission             = this.show.dm;

        this.schema.nameLocalizations        = deleteProperty(this.show.name, 'default');
        this.schema.descriptionLocalizations = deleteProperty(this.show.description, 'default');
    };
};
