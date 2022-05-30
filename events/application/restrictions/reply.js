export default async ({ client, event, me, loaders, groupers, managers }) => {
    
    // Si se permite responder automaticamente las interacciones
    if (me.reply.automatic) {

        try {

            await event.deferReply({ ephemeral: me.reply.private });
        } catch {

            return false;
        };
    };

    return true;
};