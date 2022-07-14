import path from 'node:path';

export default async (directoryPath, folderName, Structure) => {

    const filePath = path.join(directoryPath, folderName, 'main.js');

    const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                       : await import(filePath);

    return new Structure({

        ...fileContent.default,

        name: folderName
    });
};
