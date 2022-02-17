const fs = require('fs');

const paths = require('./paths.js');

const folders = {

    sources: fs.readdirSync(paths.sources).filter((val) => !val.startsWith('.')),
    
    events:       fs.readdirSync(paths.events).filter((val) => !val.startsWith('.')),
    services:     fs.readdirSync(paths.services).filter((val) => !val.startsWith('.')),
    applications: fs.readdirSync(paths.applications).filter((val) => !val.startsWith('.')),

    applicationsCommands: fs.readdirSync(paths.applicationsCommands).filter((val) => !val.startsWith('.')),
    applicationsMessages: fs.readdirSync(paths.applicationsMessages).filter((val) => !val.startsWith('.')),
    applicationsUsers:    fs.readdirSync(paths.applicationsUsers).filter((val) => !val.startsWith('.'))
};

// Exporta las carpetas
module.exports = folders;