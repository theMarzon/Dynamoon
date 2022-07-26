import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface ApplicationEvent extends ExecuteOptions {

    event: discord.ChatInputCommandInteraction
};
