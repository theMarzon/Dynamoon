import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface InteractionCreate extends ExecuteOptions {

    event: discord.Interaction<discord.CacheType>
};
