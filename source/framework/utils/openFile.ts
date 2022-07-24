import {

    readdir as readDirectory,
    access  as verifyAccess
} from 'node:fs/promises';

import {

    join     as createPath,
    dirname  as getDirectory,
    basename as getItem
} from 'node:path';

export default async (file: string, ...extensions: string[]) => {

    const fileName      = getItem(file);
    const directoryPath = getDirectory(file);

    for (const _extension of extensions) {

        await verifyAccess(file)
            .then(() => resolve(createPath(directoryPath, `${fileName}.${_extension}`)))
            .catch(() => {});
    };

    return null;
};
