import discord from 'discord.js';

import { ChatApplicationOptions } from '../../types/Applications.js';

import deleteProperty from '../../utils/deleteProperty.js';

export default class {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    events = {};

    type = discord.ApplicationCommandType.ChatInput;

    display: {

        dm: boolean

        options: discord.ApplicationCommandOptionData[]

        name: Partial<Record<keyof typeof discord.Locale, string>> & {

            default: string
        }

        description: Partial<Record<keyof typeof discord.Locale, string>> & {

            default: string
        }

        permissions: {

            member: null | discord.PermissionFlags
            bot:    null | discord.PermissionFlags
        }
    } = {

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

    schema: {

        name:        string
        description: string

        dm_permission: boolean

        type: discord.ApplicationCommandType

        options: discord.ApplicationCommandOptionData[]

        default_member_permissions: null | discord.PermissionFlags
        default_bot_permissions:    null | discord.PermissionFlags

        name_localizations:        Partial<Record<keyof typeof discord.Locale, string>>
        description_localizations: Partial<Record<keyof typeof discord.Locale, string>>
    } = {

            type:                       this.type,
            options:                    this.display.options,
            name:                       this.display.name.default,
            description:                this.display.description.default,
            default_member_permissions: this.display.permissions.member,
            default_bot_permissions:    this.display.permissions.bot,
            dm_permission:              this.display.dm,

            name_localizations:        {},
            description_localizations: {}
        };

    constructor (options: ChatApplicationOptions) {

        this.name = options.name;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;

        this.events = options.events ?? this.events;

        // Visualizacion
        this.display.dm      = options.display?.dm      ?? this.display.dm;
        this.display.options = options.display?.options ?? this.display.options;

        this.display.name.default = options.display?.name?.default ?? this.display.name.default;

        this.display.description.default = options.display?.description?.default ?? this.display.description.default;

        this.display.permissions.member = options.display?.permissions?.member ?? this.display.permissions.member;
        this.display.permissions.bot    = options.display?.permissions?.bot    ?? this.display.permissions.bot;

        // Esquema
        this.schema.options                    = this.display.options;
        this.schema.name                       = this.display.name.default;
        this.schema.description                = this.display.description.default;
        this.schema.default_member_permissions = this.display.permissions.member;
        this.schema.default_bot_permissions    = this.display.permissions.bot;
        this.schema.dm_permission              = this.display.dm;

        this.schema.name_localizations        = deleteProperty(this.display.name, 'default');
        this.schema.description_localizations = deleteProperty(this.display.description, 'default');
    };
};
