import discord from 'discord.js';

import {

    UserApplicationData,
    UserApplicationShow,
    UserApplicationSchema,
    UserApplicationOptions
} from '../../types/Applications/UserApplication.js';

import deleteProperty from '../../utils/deleteProperty.js';

export default class implements UserApplicationData {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    events = {};

    partials: number[] = [];

    type: discord.ApplicationCommandType.User = discord.ApplicationCommandType.User;

    show: UserApplicationShow = {

        dm: true,

        name: { default: 'undefined' },

        permissions: { member: null, bot: null }
    };

    schema: UserApplicationSchema = {

        name:                     this.show.name.default,
        defaultMemberPermissions: this.show.permissions.member,
        defaultBotPermissions:    this.show.permissions.bot,
        dmPermission:             this.show.dm,

        type: this.type,

        nameLocalizations: {}
    };

    constructor (options: UserApplicationOptions) {

        this.name   = options.name;
        this.events = options.events;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;
        this.partials = options.partials ?? this.partials;

        // Elimina los "Partials" duplicados y los organiza
        this.partials = this.partials
            .filter((partial, index, array) => array.indexOf(partial) === index)
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
