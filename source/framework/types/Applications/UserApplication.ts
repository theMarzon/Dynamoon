import discord from 'discord.js';

import { ExecuteOptions } from '../Event.js';

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

    partials: number[]

    type: discord.ApplicationCommandType.User

    show:   UserApplicationShow
    schema: UserApplicationSchema

    events: {

        [event: string]: ({ client, event, loaded, used }: ExecuteOptions & { event?: any }) => void
    }
};

export interface UserApplicationOptions {

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
