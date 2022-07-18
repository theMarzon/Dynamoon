import discord from 'discord.js';

export type ClientOptions = Omit<discord.ClientOptions, 'intents'>;
