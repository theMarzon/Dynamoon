import path from 'node:path';
import fs   from 'node:fs';

import usedParameters from './usedParameters.js';

export const sourcesPath = path.join(process.cwd(), 'source');

export const workspacesPath = path.join(sourcesPath, 'workspaces');

export const eventsPath       = path.join(workspacesPath, usedParameters.workspace, 'events');
export const servicesPath     = path.join(workspacesPath, usedParameters.workspace, 'services');
export const applicationsPath = path.join(workspacesPath, usedParameters.workspace, 'applications');

export const slashApplicationsPath   = path.join(applicationsPath, 'slash');
export const userApplicationsPath    = path.join(applicationsPath, 'user');
export const messageApplicationsPath = path.join(applicationsPath, 'message');

// Crea las carpetas si no existen
if (!fs.existsSync(sourcesPath)) fs.mkdirSync(sourcesPath, { recursive: true });
if (!fs.existsSync(workspacesPath)) fs.mkdirSync(sourcesPath, { recursive: true });

if (!fs.existsSync(eventsPath)) fs.mkdirSync(eventsPath, { recursive: true });
if (!fs.existsSync(servicesPath)) fs.mkdirSync(servicesPath, { recursive: true });
if (!fs.existsSync(applicationsPath)) fs.mkdirSync(applicationsPath, { recursive: true });

if (!fs.existsSync(slashApplicationsPath)) fs.mkdirSync(slashApplicationsPath, { recursive: true });
if (!fs.existsSync(userApplicationsPath)) fs.mkdirSync(userApplicationsPath, { recursive: true });
if (!fs.existsSync(messageApplicationsPath)) fs.mkdirSync(messageApplicationsPath, { recursive: true });
