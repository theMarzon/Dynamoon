import discord from 'discord.js';

export interface ClientOptions extends Omit<Omit<discord.ClientOptions, 'intents'>, 'partials'> {};
