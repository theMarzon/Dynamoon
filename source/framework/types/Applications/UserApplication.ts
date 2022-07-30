import discord from 'discord.js';

import {

    ApplicationName,
    ApplicationType,
    ApplicationPermissions,
    ApplicationEvents
} from '../Application.js';

export interface UserApplicationDisplay {

    dm: boolean

    name: ApplicationName

    permissions: {

        member: ApplicationPermissions
        bot:    ApplicationPermissions
    }
};

export interface UserApplicationSchema extends Required<Omit<discord.UserApplicationCommandData, 'defaultMemberPermissions'>> {

    defaultMemberPermissions: ApplicationPermissions
    defaultBotPermissions:    ApplicationPermissions
};

export interface UserApplicationData {

    name: string

    type: ApplicationType

    priority: number
    intents:  number
    partials: number[]

    display: UserApplicationDisplay
    schema:  UserApplicationSchema

    events: ApplicationEvents
};

export interface UserApplicationOptions {

    name: string

    priority?: number
    intents?:  number
    partials?: number[]

    display: {

        dm?: boolean

        name: ApplicationName

        permissions?: {

            member?: ApplicationPermissions
            bot?:    ApplicationPermissions
        }
    }

    events: ApplicationEvents
};
