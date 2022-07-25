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

        member: null | bigint
        bot:    null | bigint
    }
};

export interface ChatApplicationSchema extends Required<discord.ChatInputApplicationCommandData> {

    defaultMemberPermissions: null | bigint
    defaultBotPermissions:    null | bigint
};

export interface ChatApplicationData {

    name: string

    priority: number
    intents:  number

    events: object

    type: discord.ApplicationCommandType.ChatInput

    show:   ChatApplicationShow
    schema: ChatApplicationSchema
};

export interface ChatApplicationOptions {

    name: string

    events: object

    priority?: number
    intents?:  number

    show: {

        name: Partial<Record<discord.Locale, string>> & {

            default: string
        }

        description: Partial<Record<discord.Locale, string>> & {

            default: string
        }

        dm?: boolean

        options?: discord.ApplicationCommandOptionData[]

        permissions?: {

            member?: null | bigint
            bot?:    null | bigint
        }
    };
};
