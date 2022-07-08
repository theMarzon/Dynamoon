import fs   from 'node:fs/promises';
import path from 'node:path';

export const eventsPath       = path.join(process.cwd(), 'source', 'events');
export const servicesPath     = path.join(process.cwd(), 'source', 'services');
export const applicationsPath = path.join(process.cwd(), 'source', 'applications');

export const slashApplicationsPath   = path.join(applicationsPath, 'slash');
export const userApplicationsPath    = path.join(applicationsPath, 'user');
export const messageApplicationsPath = path.join(applicationsPath, 'message');

// Crea las carpetas si no existan en paralelo
await Promise.all([

    (async () => {

        await fs
            .access(eventsPath)
            .catch((error) => {

                if (error.code === 'ENOENT') fs.mkdir(eventsPath, { recursive: true });
            });
    })(),

    (async () => {

        await fs
            .access(servicesPath)
            .catch((error) => {

                if (error.code === 'ENOENT') fs.mkdir(servicesPath, { recursive: true });
            });
    })(),

    (async () => {

        await fs
            .access(slashApplicationsPath)
            .catch((error) => {

                if (error.code === 'ENOENT') fs.mkdir(slashApplicationsPath, { recursive: true });
            });
    })(),

    (async () => {

        await fs
            .access(userApplicationsPath)
            .catch((error) => {

                if (error.code === 'ENOENT') fs.mkdir(userApplicationsPath, { recursive: true });
            });
    })(),

    (async () => {

        await fs
            .access(messageApplicationsPath)
            .catch((error) => {

                if (error.code === 'ENOENT') fs.mkdir(messageApplicationsPath, { recursive: true });
            });
    })()
]);
