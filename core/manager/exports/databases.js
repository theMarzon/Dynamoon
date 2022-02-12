const files = require('./files.js');

let cache = {};

for (const _database of files.databases) {

    cache[_database.name] = _database.database;
};

// Exporta los eventos
module.exports = cache;