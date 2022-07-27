import {

    access as verifyAccess,
    mkdir  as createDirectory
} from 'node:fs/promises';

export default async (directory: string) => {

    return verifyAccess(directory)
        .catch((err) => {

            if (err.code === 'ENOENT') createDirectory(directory);
        });
};
