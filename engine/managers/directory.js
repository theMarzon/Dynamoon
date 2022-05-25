import fs   from 'node:fs';
import path from 'node:path';

export const eventsPath              = path.join(process.cwd(), 'events');
export const servicesPath            = path.join(process.cwd(), 'services');
export const applicationsPath        = path.join(process.cwd(), 'applications');
export const slashApplicationsPath   = path.join(process.cwd(), 'applications', 'slash');
export const messageApplicationsPath = path.join(process.cwd(), 'applications', 'message');
export const userApplicationsPath    = path.join(process.cwd(), 'applications', 'user');

// Crea las carpetas que no existan
if (!fs.existsSync(eventsPath)) fs.mkdirSync(eventsPath);
if (!fs.existsSync(servicesPath)) fs.mkdirSync(servicesPath);
if (!fs.existsSync(applicationsPath)) fs.mkdirSync(applicationsPath);
if (!fs.existsSync(slashApplicationsPath)) fs.mkdirSync(slashApplicationsPath);
if (!fs.existsSync(messageApplicationsPath)) fs.mkdirSync(messageApplicationsPath);
if (!fs.existsSync(userApplicationsPath)) fs.mkdirSync(userApplicationsPath);