import discord from 'discord.js';

import { ExecuteOptions } from '../Event.js';

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

    partials: number[]

    type: discord.ApplicationCommandType.Message

    show:   MessageApplicationShow
    schema: MessageApplicationSchema

    events: {

        [event: string]: ({ client, event, loaded, used }: ExecuteOptions & { event?: any }) => void
    }
};

export interface MessageApplicationOptions {

    name: string

    events: {

        [event: string]: ({ client, event, loaded, used }: ExecuteOptions & { event?: any }) => void
    }

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

    priority?: number
    intents?:  number

    partials?: number[]
};
