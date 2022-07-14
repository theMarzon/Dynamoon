import fsp from 'node:fs/promises';

export default async (directoryPath) => {

    return fsp
        .access(directoryPath)
        .catch((error) => {

            if (error.code === 'ENOENT') fsp.mkdir(directoryPath, { recursive: true });
        });
};
