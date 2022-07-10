import discord from 'discord.js';

export default {

    display: {

        name: {

            default: 'Show avatar',

            [discord.Locale.SpanishES]: 'Mostrar su avatar'
        }
    },

    events: {

        application: [

            ({ client, event, me, loaded, used, directories }) => {

                const userOption = event.options.getUser('user');

                const avatarURL = userOption.avatarURL({ format: 'png', dynamic: true, size: 2048 });

                if (!avatarURL) {

                    event.reply({

                        ephemeral: true,

                        content: 'No tienes un avatar en tu **Perfil de usuario**'
                    });

                    return;
                };

                const messageEmbed = new discord.EmbedBuilder({

                    description: 'Tu avatar de tu **Perfil de usuario**',

                    color: discord.Colors.White,

                    image: { url: avatarURL }
                });

                event.reply({

                    ephemeral: true,

                    embeds: [ messageEmbed ]
                });
            }
        ]
    }
};
