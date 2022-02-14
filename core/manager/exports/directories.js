const fs   = require('fs');
const path = require('path');

const directories = {

    events:    path.join(process.cwd(), 'events'),
    services:  path.join(process.cwd(), 'services'),
    databases: path.join(process.cwd(), 'databases'),

    applications: {

        commands: path.join(process.cwd(), 'applications/commands'),
        messages: path.join(process.cwd(), 'applications/messages'),
        users:    path.join(process.cwd(), 'applications/users')
    }
};

// Crea los directorios que no existan
if (!fs.existsSync(directories.events)) fs.mkdirSync(directories.events, { recursive: true });
if (!fs.existsSync(directories.services)) fs.mkdirSync(directories.services, { recursive: true });
if (!fs.existsSync(directories.databases)) fs.mkdirSync(directories.databases, { recursive: true });

if (!fs.existsSync(directories.applications.commands)) fs.mkdirSync(directories.applications.commands, { recursive: true });
if (!fs.existsSync(directories.applications.messages)) fs.mkdirSync(directories.applications.messages, { recursive: true });
if (!fs.existsSync(directories.applications.users)) fs.mkdirSync(directories.applications.users, { recursive: true });

// Exporta los directorios
module.exports = directories;