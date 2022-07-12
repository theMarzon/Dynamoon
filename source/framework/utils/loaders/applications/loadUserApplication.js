import path from 'node:path';

import { userApplicationsPath } from '../../../managers/directoriesPath.js';

import UserApplication from '../../../structures/Application/UserApplication.js';

export default async (directory) => {

    const filePath = path.join(userApplicationsPath, directory, 'main.js');

    const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                       : await import(filePath);

    return new UserApplication({

        ...fileContent.default,

        name: directory
    });
};
