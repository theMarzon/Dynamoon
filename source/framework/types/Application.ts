import discord from 'discord.js';

export type ApplicationType = number;

export type ApplicationPermissions = null | bigint;

export type ApplicationOptions = discord.ApplicationCommandOptionData[];

export type ApplicationLocalizations = Partial<Record<discord.Locale, string>>;

export interface ApplicationEvents {

    [event: PropertyKey]: (options: any) => void
};
