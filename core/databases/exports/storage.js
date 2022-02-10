const megadb = require('megadb');

module.exports = {

    applications: new megadb.crearDB('applications'),
    events:       new megadb.crearDB('events'),
    services:     new megadb.crearDB('services')
};