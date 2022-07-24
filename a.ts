import {

    readdir as readDirectory,
    access  as verifyAccess
} from 'node:fs/promises';

import {

    join     as createPath,
    dirname  as getDirectory,
    basename as getItem
} from 'node:path';

const a = async (file: string, ...extensions: string[]) => {

    return new Promise(async (resolve, reject) => {

        const fileName      = getItem(file);

        const directoryPath = getDirectory(file);

        for (const _extension of extensions) {

            await verifyAccess(file)
                .then(() => resolve(createPath(directoryPath, `${fileName}.${_extension}`)))
                .catch(() => {});
        };

        reject();
    });
};

console.log(await a('./a', 'js', 'ts'));
