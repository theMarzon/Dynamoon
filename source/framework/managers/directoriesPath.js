import fs   from 'node:fs/promises';
import path from 'node:path';

export const eventsPath       = path.join(process.cwd(), 'source', 'events');
export const servicesPath     = path.join(process.cwd(), 'source', 'services');
export const applicationsPath = path.join(process.cwd(), 'source', 'applications');

export const slashApplicationsPath   = path.join(applicationsPath, 'slash');
export const userApplicationsPath    = path.join(applicationsPath, 'user');
export const messageApplicationsPath = path.join(applicationsPath, 'message');

// Crea las carpetas en paralelo que no existan
await Promise.all([

    fs
        .access(eventsPath)
        .catch((error) => {

            if (error.code === 'ENOENT') fs.mkdir(eventsPath, { recursive: true });
        }),

    fs
        .access(servicesPath)
        .catch((error) => {

            if (error.code === 'ENOENT') fs.mkdir(servicesPath, { recursive: true });
        }),

    fs
        .access(slashApplicationsPath)
        .catch((error) => {

            if (error.code === 'ENOENT') fs.mkdir(slashApplicationsPath, { recursive: true });
        }),

    fs
        .access(userApplicationsPath)
        .catch((error) => {

            if (error.code === 'ENOENT') fs.mkdir(userApplicationsPath, { recursive: true });
        }),

    fs
        .access(messageApplicationsPath)
        .catch((error) => {

            if (error.code === 'ENOENT') fs.mkdir(messageApplicationsPath, { recursive: true });
        })
]);
