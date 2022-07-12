import path from 'node:path';

import { servicesPath } from '../../managers/directoriesPath.js';

import Service from '../../structures/Service.js';

export default async (directory) => {

    const filePath = path.join(servicesPath, directory, 'main.js');

    const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                       : await import(filePath);

    return new Service({

        ...fileContent.default,

        name: directory
    });
};
