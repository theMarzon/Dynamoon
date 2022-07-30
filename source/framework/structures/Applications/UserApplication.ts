import discord from 'discord.js';

import { ApplicationType } from '../../types/Application.js';

import {

    UserApplicationData,
    UserApplicationDisplay,
    UserApplicationSchema,
    UserApplicationOptions
} from '../../types/Applications/UserApplication.js';

import deleteProperty from '../../utils/deleteProperty.js';

export default class implements UserApplicationData {

    name = 'undefined';

    type: ApplicationType = discord.ApplicationCommandType.User;

    priority = 0;
    intents  = 0;

    partials: number[] = [];

    events = {};

    display: UserApplicationDisplay = {

        dm: true,

        name: { default: 'undefined' },

        permissions: { member: null, bot: null }
    };

    schema: UserApplicationSchema = {

        type:                     this.type,
        name:                     this.display.name.default,
        defaultMemberPermissions: this.display.permissions.member,
        defaultBotPermissions:    this.display.permissions.bot,
        dmPermission:             this.display.dm,

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
            .filter((partial, ind, arr) => arr.indexOf(partial) === ind)
            .sort((a, b) => a - b);

        this.display.name = options.display.name;

        this.display.dm = options.display.dm ?? this.display.dm;

        this.display.permissions.member = options.display.permissions?.member ?? this.display.permissions.member;
        this.display.permissions.bot    = options.display.permissions?.bot    ?? this.display.permissions.bot;

        this.schema.name                     = this.display.name.default;
        this.schema.defaultMemberPermissions = this.display.permissions.member;
        this.schema.defaultBotPermissions    = this.display.permissions.bot;
        this.schema.dmPermission             = this.display.dm;

        this.schema.nameLocalizations = deleteProperty(this.display.name, 'default');
    };
};
