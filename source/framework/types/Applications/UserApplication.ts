import discord from 'discord.js';

export interface UserApplicationShow {

    dm: boolean

    name: Partial<Record<discord.Locale, string>> & {

        default: string
    }

    permissions: {

        member: null | discord.PermissionFlags
        bot:    null | discord.PermissionFlags
    }
};

export interface UserApplicationSchema {

    name: string

    dm_permission: boolean

    type: discord.ApplicationCommandType

    default_member_permissions: null | discord.PermissionFlags
    default_bot_permissions:    null | discord.PermissionFlags

    name_localizations: Partial<Record<discord.Locale, string>>
};

export interface UserApplicationData {

    name: string

    priority: number
    intents:  number

    events: object

    type: discord.ApplicationCommandType

    show: UserApplicationShow
    schema:  UserApplicationSchema
};

export interface UserApplicationOptions extends Partial<Omit<UserApplicationData, 'schema'>> {

    name: string
};
