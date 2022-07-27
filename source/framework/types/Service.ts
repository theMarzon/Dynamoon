import discord from 'discord.js';

export interface ServiceData {

    name: string

    priority: number

    intents:  discord.GatewayIntentBits
    partials: discord.Partials[]

    events: {

        [event: string | number | symbol]: (options: any) => void
    }
};

export interface ServiceOptions {

    name: string

    priority?: number

    intents?:  discord.GatewayIntentBits
    partials?: discord.Partials[]

    events: {

        [event: string | number | symbol]: (options: any) => void
    }
};
