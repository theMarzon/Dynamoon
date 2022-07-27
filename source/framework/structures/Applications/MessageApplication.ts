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

    type: discord.ApplicationCommandType.Message = discord.ApplicationCommandType.Message;

    priority = 0;

    intents: discord.GatewayIntentBits = 0;

    partials: discord.Partials[] = [];

    events = {};

    show: MessageApplicationShow = {

        dm: true,

        name: { default: 'undefined' },

        permissions: { member: null, bot: null }
    };

    schema: MessageApplicationSchema = {

        name:                     this.show.name.default,
        defaultMemberPermissions: this.show.permissions.member,
        defaultBotPermissions:    this.show.permissions.bot,
        dmPermission:             this.show.dm,

        type: this.type,

        nameLocalizations: {}
    };

    constructor (options: MessageApplicationOptions) {

        this.name   = options.name;
        this.events = options.events;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;
        this.partials = options.partials ?? this.partials;

        // Elimina los "Partials" duplicados y los organiza
        this.partials = this.partials
            .filter((partial, ind, arr) => arr.indexOf(partial) === ind)
            .sort((a, b) => a - b);

        this.show.name = options.show.name;

        this.show.dm = options.show.dm ?? this.show.dm;

        this.show.permissions.member = options.show.permissions?.member ?? this.show.permissions.member;
        this.show.permissions.bot    = options.show.permissions?.bot    ?? this.show.permissions.bot;

        this.schema.name                     = this.show.name.default;
        this.schema.defaultMemberPermissions = this.show.permissions.member;
        this.schema.defaultBotPermissions    = this.show.permissions.bot;
        this.schema.dmPermission             = this.show.dm;

        this.schema.nameLocalizations = deleteProperty(this.show.name, 'default');
    };
};
