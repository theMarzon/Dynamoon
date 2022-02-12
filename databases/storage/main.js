const megadb = require('megadb');

module.exports = {

    database: {

        applications: new megadb.memoDB('applications'),
        events:       new megadb.memoDB('events'),
        services:     new megadb.memoDB('services')
    }
};