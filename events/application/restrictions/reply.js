export default async ({ client, event, loaders, groupers, managers, tools }) => {
    
    // Si se permite responder automaticamente las interacciones
    if (tools.file.replys.automatic) {

        try {

            await event.deferReply({ ephemeral: tools.file.replys.private });
        } catch {

            return false;
        };
    };

    return true;
};