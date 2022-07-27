import discord from 'discord.js';

import { ChatApplicationOptions } from '../../../framework/types/Applications/ChatApplication.js';

import { EventOptions as ApplicationOptions } from '../../../events/application/types/Options.js';

export default <Omit<ChatApplicationOptions, 'name'>> {

    show: {

        name: {

            default: 'ts-latency',

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
