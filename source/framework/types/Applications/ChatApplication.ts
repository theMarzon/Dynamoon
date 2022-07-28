import discord from 'discord.js';

export interface ChatApplicationShow {

    dm: boolean

    options: discord.ApplicationCommandOptionData[]

    name: Partial<Record<discord.Locale, string>> & {

        default: string
    }

    description: Partial<Record<discord.Locale, string>> & {

        default: string
    }

    permissions: {

        member: null | discord.PermissionFlags
        bot:    null | discord.PermissionFlags
    }
};

export interface ChatApplicationSchema extends Required<Omit<discord.ChatInputApplicationCommandData, 'defaultMemberPermissions'>> {

    defaultMemberPermissions: null | discord.PermissionFlags
    defaultBotPermissions:    null | discord.PermissionFlags
};

export interface ChatApplicationData {

    name: string

    type: discord.ApplicationCommandType.ChatInput

    priority: number
    intents:  number
    partials: number[]

    show:   ChatApplicationShow
    schema: ChatApplicationSchema

    events: {

        [event: PropertyKey]: (options: any) => void
    }
};

export interface ChatApplicationOptions extends Partial<Omit<ChatApplicationData, 'name' | 'type' | 'show' | 'events' | 'schema'>> {

    name: string

    show: Partial<Omit<ChatApplicationShow, 'name' | 'description' | 'permissions'>> & {

        name: Partial<Record<discord.Locale, string>> & {

            default: string
        }

        description: Partial<Record<discord.Locale, string>> & {

            default: string
        }

        permissions?: {

            member?: null | discord.PermissionFlags
            bot?:    null | discord.PermissionFlags
        }
    };

    events: {

        [event: PropertyKey]: (options: any) => void
    }
};
