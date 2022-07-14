import { join as createPath } from 'node:path';

export default async (directory, folder, Structure) => {

    const filePath = createPath(directory, folder, 'main.js');

    const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                       : await import(filePath);

    return new Structure({

        ...fileContent.default,

        name: folder
    });
};
