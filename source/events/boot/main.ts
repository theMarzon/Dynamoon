import { EventOptions } from '../../framework/types/Event.js';

export default <Omit<EventOptions, 'name'>> {

    priority: 4,

    execute: ({ client, me, loaded, used }) => {

        for (const _loadedFile of used.events.get(me.name)!!.all) {

            _loadedFile.events[me.name]({

                client, loaded, used,

                me: _loadedFile
            });
        };
    }
};
