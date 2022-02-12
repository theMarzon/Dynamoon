module.exports = function ({ client, event, manager, bases, utils }) {

    // Si la aplicacion permite ejecutarse en servidores
    if (event.inGuild()
    &&  utils.file.servers) return true;

    // Si la aplicacion permite ejecutarse en usuarios
    if (!event.inGuild()
    &&   utils.file.users) return true;

    // Si la aplicacion no permite ninguna de las anteriores
    event.editReply({ content: '```Esta aplicacion no permite ejecutarse en este lugar```' }).catch(() => {});

    return false;
};