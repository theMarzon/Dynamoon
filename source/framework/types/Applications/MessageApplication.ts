import discord from 'discord.js';

export interface MessageApplicationShow {

    dm: boolean

    name: Partial<Record<discord.Locale, string>> & {

        default: string
    }

    permissions: {

        member: null | discord.PermissionFlags
        bot:    null | discord.PermissionFlags
    }
};

export interface MessageApplicationSchema extends Required<Omit<discord.MessageApplicationCommandData, 'defaultMemberPermissions'>> {

    defaultMemberPermissions: null | discord.PermissionFlags
    defaultBotPermissions:    null | discord.PermissionFlags
};

export interface MessageApplicationData {

    name: string

    type: discord.ApplicationCommandType.Message

    priority: number
    intents:  number
    partials: number[]

    show:   MessageApplicationShow
    schema: MessageApplicationSchema

    events: {

        [event: PropertyKey]: (options: any) => void
    }
};

export interface ChatApplicationOptions extends Partial<Omit<MessageApplicationData, 'name' | 'type' | 'show' | 'events' | 'schema'>> {

    name: string

    show: Partial<Omit<MessageApplicationShow, 'name' | 'permissions'>> & {

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
