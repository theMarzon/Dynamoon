import path from 'node:path';
import fs   from 'node:fs';

export const eventsPath              = path.join(process.cwd(), 'events');
export const servicesPath            = path.join(process.cwd(), 'services');
export const applicationsPath        = path.join(process.cwd(), 'applications');
export const slashApplicationsPath   = path.join(process.cwd(), 'applications', 'slash');
export const userApplicationsPath    = path.join(process.cwd(), 'applications', 'user');
export const messageApplicationsPath = path.join(process.cwd(), 'applications', 'message');

// Crea las carpetas si no existen
if (!fs.existsSync(eventsPath)) fs.mkdirSync(eventsPath);
if (!fs.existsSync(servicesPath)) fs.mkdirSync(servicesPath);
if (!fs.existsSync(applicationsPath)) fs.mkdirSync(applicationsPath);
if (!fs.existsSync(slashApplicationsPath)) fs.mkdirSync(slashApplicationsPath);
if (!fs.existsSync(userApplicationsPath)) fs.mkdirSync(userApplicationsPath);
if (!fs.existsSync(messageApplicationsPath)) fs.mkdirSync(messageApplicationsPath);
