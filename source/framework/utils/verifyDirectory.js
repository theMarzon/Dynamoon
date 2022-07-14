import {

    access as verifyAccess,
    mkdir  as createDirectory
} from 'node:fs/promises';

export default async (directory) => {

    return verifyAccess(directory)
        .catch((error) => {

            if (error.code === 'ENOENT') createDirectory(directory, { recursive: true });
        });
};
