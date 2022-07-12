import path from 'node:path';

import { messageApplicationsPath } from '../../../managers/directoriesPath.js';

import MessageApplication from '../../../structures/Application/MessageApplication.js';

export default async (directory) => {

    const filePath = path.join(messageApplicationsPath, directory, 'main.js');

    const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                       : await import(filePath);

    return new MessageApplication({

        ...fileContent.default,

        name: directory
    });
};
