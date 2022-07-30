import discord from 'discord.js';

import { ChatApplicationOptions } from '../../../framework/types/Applications/ChatApplication.js';
import { Application            } from '../../../events/application/types/Options.js';

export default {

    display: {

        name: {

            default: 'latency',

            [discord.Locale.SpanishES]: 'latencia'
        },

        description: {

            default: 'Show bot latency',

            [discord.Locale.SpanishES]: 'Mostrar la latencia del bot'
        }
    },

    events: {

        application: ({ client, event, me, loaded, used }: Application) => {

            event.reply(`${client.ws.ping} ms`);
        }
    }
} as Omit<ChatApplicationOptions, 'name' | 'schema'>;
