import discord from 'discord.js';

export type ApplicationType = number;

export type ApplicationPermissions = null | bigint;

export type ApplicationOptions = discord.ApplicationCommandOptionData[];

export type ApplicationName        = Partial<Record<discord.Locale, string>> & { default: string };
export type ApplicationDescription = Partial<Record<discord.Locale, string>> & { default: string };

export interface ApplicationEvents {

    [event: PropertyKey]: (options: any) => void
};
