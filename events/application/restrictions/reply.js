export default async ({ client, event, me, loaders, groupers, managers }) => {
    
    // Si se permite responder automaticamente las interacciones
    if (me.replys.automatic) {

        try {

            await event.deferReply({ ephemeral: me.replys.private });
        } catch {

            return false;
        };
    };

    return true;
};