import discord from 'discord.js';

import { ApplicationType } from '../../types/Application.js';

import {

    ChatApplicationData,
    ChatApplicationDisplay,
    ChatApplicationSchema,
    ChatApplicationOptions
} from '../../types/Applications/ChatApplication.js';

import deleteProperty from '../../utils/deleteProperty.js';

export default class implements ChatApplicationData {

    name = 'undefined';

    type: ApplicationType = discord.ApplicationCommandType.ChatInput;

    priority = 0;
    intents  = 0;

    partials: number[] = [];

    events = {};

    display: ChatApplicationDisplay = {

        dm: true,

        options: [],

        name:        { default: 'undefined' },
        description: { default: 'Undefined' },

        permissions: { member: null, bot: null }
    };

    schema: ChatApplicationSchema = {

        type:                     this.type,
        name:                     this.display.name.default,
        description:              this.display.description.default,
        options:                  this.display.options,
        defaultMemberPermissions: this.display.permissions.member,
        defaultBotPermissions:    this.display.permissions.bot,
        dmPermission:             this.display.dm,

        nameLocalizations:        {},
        descriptionLocalizations: {}
    };

    constructor (options: ChatApplicationOptions) {

        this.name   = options.name;
        this.events = options.events;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;
        this.partials = options.partials ?? this.partials;

        // Elimina los "Partials" duplicados y los organiza
        this.partials = this.partials
            .filter((partial, ind, arr) => arr.indexOf(partial) === ind)
            .sort((a, b) => a - b);

        this.display.name        = options.display.name;
        this.display.description = options.display.description;

        this.display.dm      = options.display.dm      ?? this.display.dm;
        this.display.options = options.display.options ?? this.display.options;

        this.display.permissions.member = options.display.permissions?.member ?? this.display.permissions.member;
        this.display.permissions.bot    = options.display.permissions?.bot    ?? this.display.permissions.bot;

        this.schema.options                  = this.display.options;
        this.schema.name                     = this.display.name.default;
        this.schema.description              = this.display.description.default;
        this.schema.defaultMemberPermissions = this.display.permissions.member;
        this.schema.defaultBotPermissions    = this.display.permissions.bot;
        this.schema.dmPermission             = this.display.dm;

        this.schema.nameLocalizations        = deleteProperty(this.display.name, 'default');
        this.schema.descriptionLocalizations = deleteProperty(this.display.description, 'default');
    };
};
