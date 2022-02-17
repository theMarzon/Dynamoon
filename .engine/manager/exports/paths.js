const fs   = require('fs');
const path = require('path');

const paths = {

    sources: path.join(process.cwd(), 'sources'),
    
    events:       path.join(process.cwd(), 'sources', 'events'),
    services:     path.join(process.cwd(), 'sources', 'services'),
    applications: path.join(process.cwd(), 'sources', 'applications'),

    applicationsCommands: path.join(process.cwd(), 'sources', 'applications', 'commands'),
    applicationsMessages: path.join(process.cwd(), 'sources', 'applications', 'messages'),
    applicationsUsers:    path.join(process.cwd(), 'sources', 'applications', 'users')
};

// Crea las carpetas que no existan
if (!fs.existsSync(paths.sources)) fs.mkdirSync(paths.events, { recursive: true });

if (!fs.existsSync(paths.events)) fs.mkdirSync(paths.events, { recursive: true });
if (!fs.existsSync(paths.services)) fs.mkdirSync(paths.services, { recursive: true });
if (!fs.existsSync(paths.applications)) fs.mkdirSync(paths.applications, { recursive: true });

if (!fs.existsSync(paths.applicationsCommands)) fs.mkdirSync(paths.applicationsCommands, { recursive: true });
if (!fs.existsSync(paths.applicationsMessages)) fs.mkdirSync(paths.applicationsMessages, { recursive: true });
if (!fs.existsSync(paths.applicationsUsers)) fs.mkdirSync(paths.applicationsUsers, { recursive: true });

// Exporta las rutas
module.exports = paths;