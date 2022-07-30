import discord from 'discord.js';

import { ExecuteOptions } from '../../../framework/types/Event.js';

export interface Application extends ExecuteOptions {

    event:
          discord.ChatInputCommandInteraction<discord.CacheType>
        | discord.UserContextMenuCommandInteraction<discord.CacheType>
        | discord.MessageContextMenuCommandInteraction<discord.CacheType>
};
