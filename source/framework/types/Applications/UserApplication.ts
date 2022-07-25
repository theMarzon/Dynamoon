import discord from 'discord.js';

export interface UserApplicationShow {

    dm: boolean

    name: Partial<Record<discord.Locale, string>> & {

        default: string
    }

    permissions: {

        member: null | bigint
        bot:    null | bigint
    }
};

export interface UserApplicationSchema extends Required<discord.UserApplicationCommandData> {

    defaultMemberPermissions: null | bigint
    defaultBotPermissions:    null | bigint
};

export interface UserApplicationData {

    name: string

    priority: number
    intents:  number

    events: object

    type: discord.ApplicationCommandType.User

    show:   UserApplicationShow
    schema: UserApplicationSchema
};

export interface UserApplicationOptions {

    name: string

    priority?: number
    intents?:  number

    events?: object

    show?: {

        dm?: boolean

        name?: Partial<Record<discord.Locale, string>> & {

            default: string
        }

        permissions?: {

            member?: null | bigint
            bot?:    null | bigint
        }
    };
};
