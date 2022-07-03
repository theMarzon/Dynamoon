import path from 'node:path';
import fs   from 'node:fs';

export const eventsDirectory   = path.join(process.cwd(), 'source', 'events');
export const servicesDirectory = path.join(process.cwd(), 'source', 'services');

export const applicationsDirectory = path.join(process.cwd(), 'source', 'applications');

export const slashApplicationsDirectory   = path.join(applicationsDirectory, 'slash');
export const userApplicationsDirectory    = path.join(applicationsDirectory, 'user');
export const messageApplicationsDirectory = path.join(applicationsDirectory, 'message');

// Crea los directorios si no existen
if (!fs.existsSync(eventsDirectory)) fs.mkdirSync(eventsDirectory, { recursive: true });
if (!fs.existsSync(servicesDirectory)) fs.mkdirSync(servicesDirectory, { recursive: true });

if (!fs.existsSync(slashApplicationsDirectory)) fs.mkdirSync(slashApplicationsDirectory, { recursive: true });
if (!fs.existsSync(userApplicationsDirectory)) fs.mkdirSync(userApplicationsDirectory, { recursive: true });
if (!fs.existsSync(messageApplicationsDirectory)) fs.mkdirSync(messageApplicationsDirectory, { recursive: true });
