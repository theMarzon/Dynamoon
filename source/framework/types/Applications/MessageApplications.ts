import discord from 'discord.js';

export interface MessageApplicationDisplayData {

    dm: boolean

    name: Partial<Record<keyof typeof discord.Locale, string>> & {

        default: string
    }

    permissions: {

        member: null | discord.PermissionFlags
        bot:    null | discord.PermissionFlags
    }
};

export interface MessageApplicationSchemaData {

    name: string

    dm_permission: boolean

    type: discord.ApplicationCommandType

    default_member_permissions: null | discord.PermissionFlags
    default_bot_permissions:    null | discord.PermissionFlags

    name_localizations: Partial<Record<keyof typeof discord.Locale, string>>
};

export interface MessageApplicationData {

    name: string

    priority: number
    intents:  number

    events: object

    type: discord.ApplicationCommandType

    display: MessageApplicationDisplayData
    schema:  MessageApplicationSchemaData
};

export type MessageApplicationOptions = Omit<Partial<MessageApplicationData>, 'schema'> & {

    name: string
};
