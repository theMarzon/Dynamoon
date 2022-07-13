import path from 'node:path';

export default async (directory, name, Structure) => {

    const filePath = path.join(directory, name, 'main.js');

    const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                       : await import(filePath);

    return new Structure({ ...fileContent.default, name });
};
