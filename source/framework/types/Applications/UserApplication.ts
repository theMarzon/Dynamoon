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

    intents:  discord.GatewayIntentBits
    partials: discord.Partials[]

    show:   UserApplicationShow
    schema: UserApplicationSchema

    events: {

        [event: string | number | symbol]: (options: any) => void
    }
};

export interface UserApplicationOptions {

    name: string

    priority?: number

    intents?:  discord.GatewayIntentBits
    partials?: discord.Partials[]

    show: {

        dm?: boolean

        name: Partial<Record<discord.Locale, string>> & {

            default: string
        }

        permissions?: {

            member?: null | discord.PermissionFlags
            bot?:    null | discord.PermissionFlags
        }
    };

    events: {

        [event: string | number | symbol]: (options: any) => void
    }
};
