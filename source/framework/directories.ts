import { resolve as resolvePath } from 'node:path';

import verifyDirectory from './utils/verifyDirectory.js';

export const assetsPath = resolvePath(process.cwd(), 'assets');
export const sourcePath = resolvePath(process.cwd(), 'source');

export const eventsPath       = resolvePath(sourcePath, 'events');
export const servicesPath     = resolvePath(sourcePath, 'services');
export const applicationsPath = resolvePath(sourcePath, 'applications');

export const chatApplicationsPath    = resolvePath(applicationsPath, 'chat');
export const userApplicationsPath    = resolvePath(applicationsPath, 'user');
export const messageApplicationsPath = resolvePath(applicationsPath, 'message');

// Crea los directorios en paralelo que no existan
await Promise.all([

    await verifyDirectory(assetsPath),
    await verifyDirectory(sourcePath),

    verifyDirectory(eventsPath),
    verifyDirectory(servicesPath),

    await verifyDirectory(applicationsPath),

    verifyDirectory(chatApplicationsPath),
    verifyDirectory(userApplicationsPath),
    verifyDirectory(messageApplicationsPath)
]);
