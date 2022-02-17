const discord = require('discord.js');

const cache = new discord.LimitedCollection({ maxSize: 32 });

// Exporta la cache
module.exports = cache;