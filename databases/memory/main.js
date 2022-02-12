const megadb = require('megadb');

module.exports = {

    database: {

        applications: new megadb.crearDB('applications'),
        events:       new megadb.crearDB('events'),
        services:     new megadb.crearDB('services')
    }
};