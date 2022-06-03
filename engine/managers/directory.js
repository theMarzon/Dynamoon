import fs   from 'node:fs';
import path from 'node:path';

export const eventsDirectory              = path.join(process.cwd(), 'events');
export const servicesDirectory            = path.join(process.cwd(), 'services');
export const applicationsDirectory        = path.join(process.cwd(), 'applications');
export const slashApplicationsDirectory   = path.join(process.cwd(), 'applications', 'slash');
export const userApplicationsDirectory    = path.join(process.cwd(), 'applications', 'user');
export const messageApplicationsDirectory = path.join(process.cwd(), 'applications', 'message');

// Crea los directorios si no existen
if (!fs.existsSync(eventsDirectory)) fs.mkdirSync(eventsDirectory);
if (!fs.existsSync(servicesDirectory)) fs.mkdirSync(servicesDirectory);
if (!fs.existsSync(applicationsDirectory)) fs.mkdirSync(applicationsDirectory);
if (!fs.existsSync(slashApplicationsDirectory)) fs.mkdirSync(slashApplicationsDirectory);
if (!fs.existsSync(userApplicationsDirectory)) fs.mkdirSync(userApplicationsDirectory);
if (!fs.existsSync(messageApplicationsDirectory)) fs.mkdirSync(messageApplicationsDirectory);