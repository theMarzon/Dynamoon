module.exports = async function ({ client, event, loadeds, sources, managers, bases, utils }) {

    if (event.inGuild()
    &&  utils.file.access.servers) {

        if (!event.member.permissions.has(utils.file.permissions.member)
        ||  !event.channel.permissionsFor(event.user.id).has(utils.file.permissions.member)
        ||  !event.guild.me.permissions.has(utils.file.permissions.bot)
        ||  !event.channel.permissionsFor(client.user.id).has(utils.file.permissions.bot)) return false;
    };

    return true;
};