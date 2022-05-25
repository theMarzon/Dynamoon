export default async ({ client, event, loaders, groupers, managers, tools }) => {

    // Si se tiene que ignora la interaccion de algun canal
    if (tools.file.replys.ignore.length) {

        const fetchedChannel = await event.guild.channels.fetch(event.channelId);

        // Si el canal de la interaccion debe ser ignorado
        if (tools.file.replys.ignore.includes(fetchedChannel.type)) return false;
    };

    return true;
};