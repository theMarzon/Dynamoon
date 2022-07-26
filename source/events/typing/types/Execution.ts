import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface TypingEvent extends ExecuteOptions {

    event: discord.Typing
};
