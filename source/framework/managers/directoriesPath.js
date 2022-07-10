import path from 'node:path';

import createDirectory from '../utils/createDirectory.js';

export const eventsPath       = path.join(process.cwd(), 'source', 'events');
export const servicesPath     = path.join(process.cwd(), 'source', 'services');
export const applicationsPath = path.join(process.cwd(), 'source', 'applications');

export const slashApplicationsPath   = path.join(applicationsPath, 'slash');
export const userApplicationsPath    = path.join(applicationsPath, 'user');
export const messageApplicationsPath = path.join(applicationsPath, 'message');

// Crea los directorios en paralelo que no existan
await Promise.all([

    createDirectory(eventsPath),
    createDirectory(servicesPath),
    createDirectory(slashApplicationsPath),
    createDirectory(userApplicationsPath),
    createDirectory(messageApplicationsPath)
]);
