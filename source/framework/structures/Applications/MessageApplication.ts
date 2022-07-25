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

    type: discord.ApplicationCommandType.Message = discord.ApplicationCommandType.Message;

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

        type:                     this.type,
        name:                     this.show.name.default,
        defaultMemberPermissions: this.show.permissions.member,
        defaultBotPermissions:    this.show.permissions.bot,
        dmPermission:             this.show.dm,

        nameLocalizations: {}
    };

    constructor (options: MessageApplicationOptions) {

        this.name   = options.name;
        this.events = options.events;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;

        // Visualizacion
        this.show.name = options.show.name;

        this.show.dm = options.show.dm ?? this.show.dm;

        this.show.permissions.member = options.show.permissions?.member ?? this.show.permissions.member;
        this.show.permissions.bot    = options.show.permissions?.bot    ?? this.show.permissions.bot;

        // Esquema
        this.schema.name                     = this.show.name.default;
        this.schema.defaultMemberPermissions = this.show.permissions.member;
        this.schema.defaultBotPermissions    = this.show.permissions.bot;
        this.schema.dmPermission             = this.show.dm;

        this.schema.nameLocalizations = deleteProperty(this.show.name, 'default');
    };
};
