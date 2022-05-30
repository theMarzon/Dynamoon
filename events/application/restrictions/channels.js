export default async ({ client, event, me, loaders, groupers, managers }) => {

    const interactionChannel = await client.channels.fetch(event.channelId);

    if (me.restrict.channels.length
    &&    (me.restrict.channels.includes(event.channelId) 
        || me.restrict.channels.includes(interactionChannel.type))) return false;

    return true;
};