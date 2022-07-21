import discord from 'discord.js';

export interface ChatApplicationDisplay {

    dm: boolean

    parameters: discord.ApplicationCommandOptionData[]

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
};

export interface ChatApplicationSchema {

    name:        string
    description: string

    dm_permission: boolean

    options: discord.ApplicationCommandOptionData[]

    type: discord.ApplicationCommandType

    default_member_permissions: null | discord.PermissionFlags
    default_bot_permissions:    null | discord.PermissionFlags

    name_localizations:        Partial<Record<keyof typeof discord.Locale, string>>
    description_localizations: Partial<Record<keyof typeof discord.Locale, string>>
};

export interface ChatApplicationData {

    name: string

    priority: number
    intents:  number

    events: object

    type: discord.ApplicationCommandType

    display: ChatApplicationDisplay
    schema:  ChatApplicationSchema
};

export interface ChatApplicationOptions extends Partial<Omit<ChatApplicationData, 'schema'>> {

    name: string
};
