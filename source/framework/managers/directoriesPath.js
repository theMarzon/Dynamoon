import { join as createPath } from 'node:path';

import verifyDirectory from '../utils/verifyDirectory.js';

export const eventsPath       = createPath(process.cwd(), 'source', 'events');
export const servicesPath     = createPath(process.cwd(), 'source', 'services');
export const applicationsPath = createPath(process.cwd(), 'source', 'applications');

export const slashApplicationsPath   = createPath(applicationsPath, 'slash');
export const userApplicationsPath    = createPath(applicationsPath, 'user');
export const messageApplicationsPath = createPath(applicationsPath, 'message');

// Crea los directorios en paralelo que no existan
await Promise.all([

    verifyDirectory(eventsPath),
    verifyDirectory(servicesPath),
    verifyDirectory(slashApplicationsPath),
    verifyDirectory(userApplicationsPath),
    verifyDirectory(messageApplicationsPath)
]);
