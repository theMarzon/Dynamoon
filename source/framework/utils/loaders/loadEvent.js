import path from 'node:path';

import { eventsPath } from '../../managers/directoriesPath.js';

import Event from '../../structures/Event.js';

export default async (directory) => {

    const filePath = path.join(eventsPath, directory, 'main.js');

    const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                       : await import(filePath);

    return new Event({

        ...fileContent.default,

        name: directory
    });
};
