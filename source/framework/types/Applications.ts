import discord from 'discord.js';

export type ChatApplicationOptions = {

    name: string

    priority?: number
    intents?:  number

    events?: object

    display?: {

        dm?: boolean

        options?: discord.ApplicationCommandOptionData[]

        name?: Partial<Record<keyof typeof discord.Locale, string>> & {

            default?: string
        }

        description?: Partial<Record<keyof typeof discord.Locale, string>> & {

            default?: string
        }

        permissions?: {

            member?: null | discord.PermissionFlags
            bot?:    null | discord.PermissionFlags
        }
    }
};

export interface ChatApplicationData {

    name: string

    priority: number
    intents:  number

    events: object

    type: discord.ApplicationCommandType

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
    }

    schema: {

        name:        string
        description: string

        dm_permission: boolean

        type: discord.ApplicationCommandType

    display: ChatApplicatioDisplayData
    schema:  ChatApplicatioSchemaData
};

export type ChatApplicationOptions = {

    name: string

    priority?: number
    intents?:  number

        default_member_permissions: null | discord.PermissionFlags
        default_bot_permissions:    null | discord.PermissionFlags

        name_localizations:        Partial<Record<keyof typeof discord.Locale, string>>
        description_localizations: Partial<Record<keyof typeof discord.Locale, string>>
    }
};

export type UserApplicationOptions = {

    name: string

    priority?: number
    intents?:  number

    events?: object

    type?: discord.ApplicationCommandType

    display?: {

        dm?: boolean

        name?: Partial<Record<keyof typeof discord.Locale, string>> & {

            default?: string
        }

        permissions?: {

            member?: null | discord.PermissionFlags
            bot?:    null | discord.PermissionFlags
        }
    }
};

export interface UserApplicationData {

    name: string

    priority: number
    intents:  number

    events: object

    type: discord.ApplicationCommandType

    display: {

        dm: boolean

        name: Partial<Record<keyof typeof discord.Locale, string>> & {

            default: string
        }

        permissions: {

            member: null | discord.PermissionFlags
            bot:    null | discord.PermissionFlags
        }
    }

    schema: {

        name: string

        dm_permission: boolean

        type: discord.ApplicationCommandType

        default_member_permissions: null | discord.PermissionFlags
        default_bot_permissions:    null | discord.PermissionFlags

        name_localizations: Partial<Record<keyof typeof discord.Locale, string>>
    }
};

export type MessageApplicationOptions = {

    name: string

    priority?: number
    intents?:  number

    events?: object

    type?: discord.ApplicationCommandType

    display?: {

        dm?: boolean

        name?: Partial<Record<keyof typeof discord.Locale, string>> & {

            default?: string
        }

        permissions?: {

            member?: null | discord.PermissionFlags
            bot?:    null | discord.PermissionFlags
        }
    }
};

export interface MessageApplicationData {

    name: string

    priority: number
    intents:  number

    events: object

    type: discord.ApplicationCommandType

    display: {

        dm: boolean

        name: Partial<Record<keyof typeof discord.Locale, string>> & {

            default: string
        }

        permissions: {

            member: null | discord.PermissionFlags
            bot:    null | discord.PermissionFlags
        }
    }

    schema: {

        name: string

        dm_permission: boolean

        type: discord.ApplicationCommandType

        default_member_permissions: null | discord.PermissionFlags
        default_bot_permissions:    null | discord.PermissionFlags

        name_localizations: Partial<Record<keyof typeof discord.Locale, string>>
    }
};
