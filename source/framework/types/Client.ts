import discord, { Client } from 'discord.js';

export interface ClientOptions extends Omit<discord.ClientOptions, 'intents' | 'partials'> {};

export interface ClientData extends Client {

    framework: object
};
