import { resolve as resolvePath } from 'node:path';

import verifyDirectory from './utils/verifyDirectory.js';

export const eventsPath       = resolvePath(process.cwd(), 'source', 'events');
export const servicesPath     = resolvePath(process.cwd(), 'source', 'services');
export const applicationsPath = resolvePath(process.cwd(), 'source', 'applications');

export const chatApplicationsPath    = resolvePath(applicationsPath, 'chat');
export const userApplicationsPath    = resolvePath(applicationsPath, 'user');
export const messageApplicationsPath = resolvePath(applicationsPath, 'message');

// Crea los directorios en paralelo que no existan
await Promise.all([

    verifyDirectory(eventsPath),
    verifyDirectory(servicesPath),

    await verifyDirectory(applicationsPath),

    verifyDirectory(chatApplicationsPath),
    verifyDirectory(userApplicationsPath),
    verifyDirectory(messageApplicationsPath)
]);
