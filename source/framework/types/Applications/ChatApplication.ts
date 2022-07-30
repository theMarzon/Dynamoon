import discord from 'discord.js';

import {

    ApplicationName,
    ApplicationDescription,
    ApplicationType,
    ApplicationOptions,
    ApplicationPermissions,
    ApplicationEvents
} from '../Application.js';

export interface ChatApplicationDisplay {

    dm: boolean

    name:        ApplicationName
    description: ApplicationDescription
    options:     ApplicationOptions

    permissions: {

        member: ApplicationPermissions
        bot:    ApplicationPermissions
    }
};

export interface ChatApplicationSchema extends Required<Omit<discord.ChatInputApplicationCommandData, 'defaultMemberPermissions'>> {

    defaultMemberPermissions: ApplicationPermissions
    defaultBotPermissions:    ApplicationPermissions
};

export interface ChatApplicationData {

    name: string

    type: ApplicationType

    priority: number
    intents:  number
    partials: number[]

    display: ChatApplicationDisplay
    schema:  ChatApplicationSchema

    events: ApplicationEvents
};

export interface ChatApplicationOptions {

    name: string

    priority?: number
    intents?:  number
    partials?: number[]

    display: {

        dm?: boolean

        name:        ApplicationName
        description: ApplicationDescription
        options?:    ApplicationOptions

        permissions?: {

            member?: ApplicationPermissions
            bot?:    ApplicationPermissions
        }
    }

    events: ApplicationEvents
};
