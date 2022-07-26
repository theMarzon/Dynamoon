import {

    readdir as readDirectory,
    stat    as getStat
} from 'node:fs/promises';

import path, { join as createPath } from 'node:path';

import createTree from './createTree.js';

export default async (directory: string, ...files: string[]) => {

    let findedFiles: (string[])[] = [];

    let directoryItems = await readDirectory(directory);

    directoryItems = directoryItems.filter((item) => !item.startsWith('.'));

    for (const _directoryItem of directoryItems) {

        const itemPath = createPath(directory, _directoryItem);

        const itemStats = await getStat(itemPath);

        if (itemStats.isFile()) {

            if (files.includes(_directoryItem)) findedFiles.push(itemPath.split(path.sep));

            continue;
        };

        findedFiles = [ ...findedFiles, ...await createTree(itemPath, ...files) ];
    };

    return findedFiles;
};
