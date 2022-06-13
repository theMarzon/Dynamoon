import path from 'node:path';
import fs   from 'node:fs';

export const eventDirectory              = path.join(process.cwd(), 'events');
export const serviceDirectory            = path.join(process.cwd(), 'services');
export const applicationDirectory        = path.join(process.cwd(), 'applications');
export const slashApplicationDirectory   = path.join(process.cwd(), 'applications', 'slash');
export const userApplicationDirectory    = path.join(process.cwd(), 'applications', 'user');
export const messageApplicationDirectory = path.join(process.cwd(), 'applications', 'message');

// Crea los directorios si no existen
if (!fs.existsSync(eventDirectory)) fs.mkdirSync(eventDirectory);
if (!fs.existsSync(serviceDirectory)) fs.mkdirSync(serviceDirectory);
if (!fs.existsSync(applicationDirectory)) fs.mkdirSync(applicationDirectory);
if (!fs.existsSync(slashApplicationDirectory)) fs.mkdirSync(slashApplicationDirectory);
if (!fs.existsSync(userApplicationDirectory)) fs.mkdirSync(userApplicationDirectory);
if (!fs.existsSync(messageApplicationDirectory)) fs.mkdirSync(messageApplicationDirectory);
