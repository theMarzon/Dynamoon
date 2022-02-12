const loadeds = require('./loadeds.js');

let cache = {};

for (const _database of loadeds.databases) {

    // Carga el evento
    cache[_database.name] = _database.database;
};

// Exporta los eventos
module.exports = cache;