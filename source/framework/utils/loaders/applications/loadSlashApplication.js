import path from 'node:path';

import { slashApplicationsPath } from '../../../managers/directoriesPath.js';

import SlashApplications from '../../../structures/Application/SlashApplication.js';

export default async (directory) => {

    const filePath = path.join(slashApplicationsPath, directory, 'main.js');

    const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                       : await import(filePath);

    return new SlashApplications({

        ...fileContent.default,

        name: directory
    });
};
