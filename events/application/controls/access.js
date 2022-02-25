module.exports = function ({ client, event, loadeds, sources, managers, bases, utils }) {

    // Si permitir ejecutarse en los servidores
    if (event.inGuild()
    &&  utils.file.access.servers) return true;

    // Si permitir ejecutarse en los usuarios
    if (!event.inGuild()
    &&   utils.file.access.users) return true;

    return false;
};