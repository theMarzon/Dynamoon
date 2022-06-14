export default async function ({ client, event, me }) {

    // Si la aplicacion no contiene restricciones
    if (!me.restrictions.length) return false;

    for (const _restriction of me.restrictions) {

        switch (_restriction.type) {

            case ('user'):

                if (_restriction.id === event.user.id) return true;

                break;

            case ('channel'):

                if (_restriction.id
                &&  _restriction.id === event.channelId) return true;

                if (_restriction.format) {

                    const fetchedChannel = await client.channels.fetch(event.channelId);

                    if (_restriction.format === fetchedChannel.type) return true;
                };

                break;

            case ('guild'):

                if (_restriction.id === event.guildId) return true;

                break;
        };
    };

    return false;
};
