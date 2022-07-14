import fsp from 'node:fs/promises';

export default async (directory) => {

    return fsp
        .access(directory)
        .catch((error) => {

            if (error.code === 'ENOENT') fsp.mkdir(directory, { recursive: true });
        });
};
