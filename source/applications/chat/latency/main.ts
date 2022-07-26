import discord from 'discord.js';

import { ChatApplicationOptions } from '../../../framework/types/Applications/ChatApplication.js';
import { ApplicationOptions     } from '../../../events/application/types/Event.js';

export default <Omit<ChatApplicationOptions, 'name'>> {

    show: {

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

        application: ({ client, event, file, loaded, used }: ApplicationOptions) => {

            event.reply({ content: `${client.ws.ping} ms`, ephemeral: true });
        }
    }
};