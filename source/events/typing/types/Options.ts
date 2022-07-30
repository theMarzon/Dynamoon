import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface Typing extends ExecuteOptions {

    event: discord.Typing
};
