import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface MenuOptions extends ExecuteOptions {

    event: discord.SelectMenuInteraction
};
