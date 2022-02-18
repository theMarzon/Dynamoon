const discord = require('discord.js');

const cache = new discord.LimitedCollection({ maxSize: 32 });

// Limpia la cache cada semana
setInterval(() => cache.clear(), 7 * 24 * 60 * 60 * 1000);

// Exporta la cache
module.exports = cache;