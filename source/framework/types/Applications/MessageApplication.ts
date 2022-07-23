import discord from 'discord.js';

export interface MessageApplicationDisplay {

    dm: boolean

    name: Partial<Record<discord.Locale, string>> & {

        default: string
    }

    permissions: {

        member: null | discord.PermissionFlags
        bot:    null | discord.PermissionFlags
    }
};

export interface MessageApplicationSchema {

    name: string

    dm_permission: boolean

    type: discord.ApplicationCommandType

    default_member_permissions: null | discord.PermissionFlags
    default_bot_permissions:    null | discord.PermissionFlags

    name_localizations: Partial<Record<discord.Locale, string>>
};

export interface MessageApplicationData {

    name: string

    priority: number
    intents:  number

    events: object

    type: discord.ApplicationCommandType

    display: MessageApplicationDisplay
    schema:  MessageApplicationSchema
};

export interface MessageApplicationOptions extends Partial<Omit<MessageApplicationData, 'schema'>> {

    name: string
};
