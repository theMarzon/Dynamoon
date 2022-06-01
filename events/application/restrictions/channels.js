export default async ({ client, event, me, loadeds, groupeds, managers }) => {

    // Para evitar fetchear el canal de la interaccion, comprueba si se restringe algun canal
    if (!me.restrict.channels.length) return true;

    const interactionChannel = await client.channels.fetch(event.channelId);

    if (me.restrict.channels.includes(event.channelId)
    ||  me.restrict.channels.includes(interactionChannel.type)) return false;

    return true;
};