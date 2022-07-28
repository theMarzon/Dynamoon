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

export interface UserApplicationSchema extends Required<Omit<discord.UserApplicationCommandData, 'defaultMemberPermissions'>> {

    defaultMemberPermissions: null | discord.PermissionFlags
    defaultBotPermissions:    null | discord.PermissionFlags
};

export interface UserApplicationData {

    name: string

    type: discord.ApplicationCommandType.User

    priority: number
    intents:  number
    partials: number[]

    show:   UserApplicationShow
    schema: UserApplicationSchema

    events: {

        [event: PropertyKey]: (options: any) => void
    }
};

export interface UserApplicationOptions extends Partial<Omit<UserApplicationData, 'name' | 'type' | 'show' | 'events' | 'schema'>> {

    name: string

    show: Partial<Omit<UserApplicationShow, 'name' | 'permissions'>> & {

        name: Partial<Record<discord.Locale, string>> & {

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
