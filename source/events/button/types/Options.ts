import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface Button extends ExecuteOptions {

    event: discord.ButtonInteraction<discord.CacheType>
};
