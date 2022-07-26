import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface InteractionCreateOptions extends ExecuteOptions {

    event: discord.Interaction
};
