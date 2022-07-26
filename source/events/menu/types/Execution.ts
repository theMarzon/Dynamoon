import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface MenuEvent extends ExecuteOptions {

    event: discord.SelectMenuInteraction
};
