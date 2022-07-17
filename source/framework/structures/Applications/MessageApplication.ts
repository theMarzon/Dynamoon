import discord from 'discord.js';

import { MessageApplicationOptions } from '../../types/Application.js';

import deleteProperty from '../../utils/deleteProperty.js';

export default class {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    events = {};

    type = discord.ApplicationCommandType.Message;

    display: {

        dm: boolean

        name: Partial<Record<keyof typeof discord.Locale, string>> & {

            default: string
        }

        permissions: {

            member: null | discord.PermissionFlags
            bot:    null | discord.PermissionFlags
        }
    } = {

            dm: true,

            name: {

                default: 'undefined'
            },

            permissions: {

                member: null,
                bot:    null
            }
        };

    schema: {

        name: string

        dm_permission: boolean

        type: discord.ApplicationCommandType

        default_member_permissions: null | discord.PermissionFlags
        default_bot_permissions:    null | discord.PermissionFlags

        name_localizations: Partial<Record<keyof typeof discord.Locale, string>>
    } = {

            type:                       this.type,
            name:                       this.display.name.default,
            default_member_permissions: this.display.permissions.member,
            default_bot_permissions:    this.display.permissions.bot,
            dm_permission:              this.display.dm,

            name_localizations: {}
        };

    constructor (options: MessageApplicationOptions) {

        this.name = options.name;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;

        this.events = options.events ?? this.events;

        // Visualizacion
        this.display.dm = options.display?.dm ?? this.display.dm;

        this.display.name.default = options.display?.name?.default ?? this.display.name.default;

        this.display.permissions.member = options.display?.permissions?.member ?? this.display.permissions.member;
        this.display.permissions.bot    = options.display?.permissions?.bot    ?? this.display.permissions.bot;

        // Esquema
        this.schema.name                       = this.display.name.default;
        this.schema.default_member_permissions = this.display.permissions.member;
        this.schema.default_bot_permissions    = this.display.permissions.bot;
        this.schema.dm_permission              = this.display.dm;

        this.schema.name_localizations = deleteProperty(this.display.name, 'default');
    };
};
