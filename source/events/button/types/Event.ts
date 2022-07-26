import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface ButtonOptions extends ExecuteOptions {

    event: discord.ButtonInteraction
};
