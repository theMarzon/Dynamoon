import fs from 'node:fs/promises';

export default async (dircetory) => {

    return fs
        .access(dircetory)
        .catch((error) => {

            if (error.code === 'ENOENT') fs.mkdir(dircetory, { recursive: true });
        });
};
