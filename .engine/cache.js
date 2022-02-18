const discord = require('discord.js');

// Exporta la cache
module.exports = new discord.LimitedCollection({ maxSize: 80 });