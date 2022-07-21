import discord from 'discord.js';

export interface ClientOptions extends Omit<discord.ClientOptions, 'intents'> {

};
