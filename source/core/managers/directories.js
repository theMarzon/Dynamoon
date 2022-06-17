import path from 'node:path';
import fs   from 'node:fs';

import usedParameters from './usedParameters.js';

export const sourcesPath = path.join(process.cwd(), 'source');

export const eventsPath = (usedParameters.environment === 'development') ? path.join(sourcesPath, 'events', 'development')
                        : (usedParameters.environment === 'production')  ? path.join(sourcesPath, 'events', 'production')
                        :                                                  path.join(sourcesPath, 'events', 'standard');

export const servicesPath = (usedParameters.environment === 'development') ? path.join(sourcesPath, 'services', 'development')
                          : (usedParameters.environment === 'production')  ? path.join(sourcesPath, 'services', 'production')
                          :                                                  path.join(sourcesPath, 'services', 'standard');

export const applicationsPath = (usedParameters.environment === 'development') ? path.join(sourcesPath, 'applications', 'development')
                              : (usedParameters.environment === 'production')  ? path.join(sourcesPath, 'applications', 'production')
                              :                                                  path.join(sourcesPath, 'applications', 'standard');

export const slashApplicationsPath   = path.join(applicationsPath, 'slash');
export const userApplicationsPath    = path.join(applicationsPath, 'user');
export const messageApplicationsPath = path.join(applicationsPath, 'message');

// Crea las carpetas si no existen
if (!fs.existsSync(sourcesPath)) fs.mkdirSync(sourcesPath, { recursive: true });

if (!fs.existsSync(eventsPath)) fs.mkdirSync(eventsPath, { recursive: true });
if (!fs.existsSync(servicesPath)) fs.mkdirSync(servicesPath, { recursive: true });
if (!fs.existsSync(applicationsPath)) fs.mkdirSync(applicationsPath, { recursive: true });

if (!fs.existsSync(slashApplicationsPath)) fs.mkdirSync(slashApplicationsPath, { recursive: true });
if (!fs.existsSync(userApplicationsPath)) fs.mkdirSync(userApplicationsPath, { recursive: true });
if (!fs.existsSync(messageApplicationsPath)) fs.mkdirSync(messageApplicationsPath, { recursive: true });
