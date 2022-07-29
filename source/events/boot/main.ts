import { EventOptions } from '../../framework/types/Event.js';

export default <Omit<EventOptions, 'name'>> {

    priority: 4,

    execute: ({ client, file, loaded, used }) => {

        for (const _loadedFile of used.events.get(file.name)!!.all) {

            _loadedFile.events[file.name]({

                client, loaded, used,

                file: _loadedFile
            });
        };
    }
};
