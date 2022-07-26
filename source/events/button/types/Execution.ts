import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface ButtonEvent extends ExecuteOptions {

    event: discord.ButtonInteraction
};
