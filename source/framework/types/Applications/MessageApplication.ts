import discord from 'discord.js';

export interface MessageApplicationShow {

    dm: boolean

    name: Partial<Record<discord.Locale, string>> & { default: string }

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
    partials: number[]

    events: object

    type: discord.ApplicationCommandType.Message

    show:   MessageApplicationShow
    schema: MessageApplicationSchema
};

export interface MessageApplicationOptions {

    name: string

    priority?: number
    intents?:  number
    partials?: number[]

    events: object

    show: {

        dm?: boolean

        name: Partial<Record<discord.Locale, string>> & { default: string }

        permissions?: {

            member?: null | bigint
            bot?:    null | bigint
        }
    };
};
