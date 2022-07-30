import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface Menu extends ExecuteOptions {

    event: discord.SelectMenuInteraction<discord.CacheType>
};
