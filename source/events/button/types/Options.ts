import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface EventOptions extends ExecuteOptions {

    event: discord.ButtonInteraction
};
