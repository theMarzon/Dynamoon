import discord from 'discord.js';

export interface UserApplicationDisplayData {

    dm: boolean

    name: Partial<Record<keyof typeof discord.Locale, string>> & {

        default: string
    }

    permissions: {

        member: null | discord.PermissionFlags
        bot:    null | discord.PermissionFlags
    }
};

export interface UserApplicationSchemaData {

    name: string

    dm_permission: boolean

    type: discord.ApplicationCommandType

    default_member_permissions: null | discord.PermissionFlags
    default_bot_permissions:    null | discord.PermissionFlags

    name_localizations: Partial<Record<keyof typeof discord.Locale, string>>
};

export interface UserApplicationData {

    name: string

    priority: number
    intents:  number

    events: object

    type: discord.ApplicationCommandType

    display: UserApplicationDisplayData
    schema:  UserApplicationSchemaData
};

export type UserApplicationOptions = Omit<Partial<UserApplicationData>, 'schema'> & {

    name: string
};
