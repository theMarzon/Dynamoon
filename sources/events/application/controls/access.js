module.exports = function ({ client, event, loadeds, sources, managers, bases, utils }) {

    // Si la aplicacion permite ejecutarse en servidores
    if (event.inGuild()
    &&  utils.file.servers) return true;

    // Si la aplicacion permite ejecutarse en usuarios
    if (!event.inGuild()
    &&   utils.file.users) return true;

    return false;
};