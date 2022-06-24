import path from 'node:path';
import fs   from 'node:fs';

import usedParameters from './usedParameters.js';

export const workspaceDirectory = path.join(process.cwd(), 'source', 'workspaces', usedParameters.workspace);

export const eventsDirectory   = path.join(workspaceDirectory, 'events');
export const servicesDirectory = path.join(workspaceDirectory, 'services');

export const applicationsDirectory = path.join(workspaceDirectory, 'applications');

export const slashApplicationsDirectory   = path.join(applicationsDirectory, 'slash');
export const userApplicationsDirectory    = path.join(applicationsDirectory, 'user');
export const messageApplicationsDirectory = path.join(applicationsDirectory, 'message');

// Crea los directorios si no existen
if (!fs.existsSync(eventsDirectory)) fs.mkdirSync(eventsDirectory, { recursive: true });
if (!fs.existsSync(servicesDirectory)) fs.mkdirSync(servicesDirectory, { recursive: true });

if (!fs.existsSync(slashApplicationsDirectory)) fs.mkdirSync(slashApplicationsDirectory, { recursive: true });
if (!fs.existsSync(userApplicationsDirectory)) fs.mkdirSync(userApplicationsDirectory, { recursive: true });
if (!fs.existsSync(messageApplicationsDirectory)) fs.mkdirSync(messageApplicationsDirectory, { recursive: true });
