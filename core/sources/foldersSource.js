const fs = require('fs');

const pathsSource = require('./pathsSource.js');

const folders = {
    
    events:       fs.readdirSync(pathsSource.events).filter((val) => !val.startsWith('.')),
    services:     fs.readdirSync(pathsSource.services).filter((val) => !val.startsWith('.')),
    applications: fs.readdirSync(pathsSource.applications).filter((val) => !val.startsWith('.')),

    applicationsCommands: fs.readdirSync(pathsSource.applicationsCommands).filter((val) => !val.startsWith('.')),
    applicationsMessages: fs.readdirSync(pathsSource.applicationsMessages).filter((val) => !val.startsWith('.')),
    applicationsUsers:    fs.readdirSync(pathsSource.applicationsUsers).filter((val) => !val.startsWith('.'))
};

// Exporta las carpetas
module.exports = folders;