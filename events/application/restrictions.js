export default async function ({ event, me }) {

    if (me.restrictions.length) {

        for (const _restriction of me.restrictions) {

            switch (_restriction.type) {

                case ('user'):

                    if (_restriction.id === event.user.id) return true;

                    break;

                case ('channel'):

                    if (_restriction.id === event.channelId) return true;

                    break;

                case ('guild'):

                    if (_restriction.id === event.guildId) return true;

                    break;
            };
        };
    };

    return false;
};
