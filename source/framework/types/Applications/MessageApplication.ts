import discord from 'discord.js';

import {

    ApplicationLocalizations,
    ApplicationType,
    ApplicationPermissions,
    ApplicationEvents
} from '../Application.js';

export interface MessageApplicationDisplay {

    dm: boolean

    name: ApplicationLocalizations & { default: string }

    permissions: {

        member: ApplicationPermissions
        bot:    ApplicationPermissions
    }
};

export interface MessageApplicationSchema extends Required<discord.MessageApplicationCommandData> {

    defaultMemberPermissions: ApplicationPermissions
    defaultBotPermissions:    ApplicationPermissions
};

export interface MessageApplicationData {

    name: string

    type: ApplicationType

    priority: number
    intents:  number
    partials: number[]

    display: MessageApplicationDisplay
    schema:  MessageApplicationSchema

    events: ApplicationEvents
};

export interface MessageApplicationOptions {

    name: string

    priority?: number
    intents?:  number
    partials?: number[]

    display: {

        dm?: boolean

        name: ApplicationLocalizations & { default: string }

        permissions?: {

            member?: ApplicationPermissions
            bot?:    ApplicationPermissions
        }
    }

    events: ApplicationEvents
};
