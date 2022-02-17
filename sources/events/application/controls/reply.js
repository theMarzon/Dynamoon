module.exports = async function ({ client, event, manager, cache, bases, utils }) {

    try {

        await event.deferReply({ ephemeral: utils.file.hide });
    } catch {

        return false;
    } finally {

        return true;
    };
};