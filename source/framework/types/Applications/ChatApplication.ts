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

    intents:  discord.GatewayIntentBits
    partials: discord.Partials[]

    show:   ChatApplicationShow
    schema: ChatApplicationSchema

    events: {

        [event: string | number | symbol]: (options: any) => void
    }
};

export interface ChatApplicationOptions {

    name: string

    priority?: number

    intents?:  discord.GatewayIntentBits
    partials?: discord.Partials[]

    show: {

        dm?: boolean

        options?: discord.ApplicationCommandOptionData[]

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

        [event: string | number | symbol]: (options: any) => void
    }
};
