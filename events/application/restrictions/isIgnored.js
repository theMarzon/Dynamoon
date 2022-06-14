export default function ({ event, me }) {

    // Si la aplicacion no contiene restricciones
    if (!me.ignore.length) return false;

    for (const _ignored of me.ignore) {

        switch (_ignored.type) {

            case ('user'):

                if (_ignored.id === event.user.id) return true;

                break;

            case ('channel'):

                if (_ignored.id === event.channelId) return true;

                break;

            case ('guild'):

                if (_ignored.id === event.guildId) return true;

                break;
        };
    };

    return false;
};
