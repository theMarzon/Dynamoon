import discord from 'discord.js';

export interface MessageApplicationShow {

    dm: boolean

    name: Partial<Record<discord.Locale, string>> & {

        default: string
    }

    permissions: {

        member: null | bigint
        bot:    null | bigint
    }
};

export interface MessageApplicationSchema extends Required<discord.MessageApplicationCommandData> {

    defaultMemberPermissions: null | bigint
    defaultBotPermissions:    null | bigint
};

export interface MessageApplicationData {

    name: string

    priority: number
    intents:  number

    type: discord.ApplicationCommandType.Message

    show:   MessageApplicationShow
    schema: MessageApplicationSchema

    events: {

        [event: string]: unknown
    }
};

export interface MessageApplicationOptions {

    name: string

    events: object

    priority?: number
    intents?:  number

    show: {

        name: Partial<Record<discord.Locale, string>> & {

            default: string
        }

        dm?: boolean

        permissions?: {

            member?: null | bigint
            bot?:    null | bigint
        }
    };
};
