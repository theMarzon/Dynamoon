module.exports = async function ({ client, event, loadeds, sources, managers, bases, utils }) {

    try {

        await event.deferReply({ ephemeral: utils.file.private });
    } catch {

        return false;
    } finally {

        return true;
    };
};