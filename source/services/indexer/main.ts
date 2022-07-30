import discord from 'discord.js';

import indexApplications        from './utils/indexApplications.js';
import verifyChatApplication    from './utils/verifyChatApplication.js';
import verifyUserApplication    from './utils/verifyUserApplication.js';
import verifyMessageApplication from './utils/verifyMessageApplication.js';

import ChatApplication    from '../../framework/structures/Applications/ChatApplication.js';
import UserApplication    from '../../framework/structures/Applications/UserApplication.js';
import MessageApplication from '../../framework/structures/Applications/MessageApplication.js';

import { ServiceOptions } from '../../framework/types/Service.js';
import { ClientReady    } from '../../events/clientReady/types/Options.js';

export default <Omit<ServiceOptions, 'name'>> {

    events: {

        clientReady: async ({ client, loaded }: ClientReady) => {

            const botApplications = await client.application!!.commands.fetch();

            const chatApplications    = loaded.applications.chat.map((file: ChatApplication) => file.schema);
            const userApplications    = loaded.applications.user.map((file: UserApplication) => file.schema);
            const messageApplications = loaded.applications.message.map((file: MessageApplication) => file.schema);

            const loadedApplications = [

                ...chatApplications,
                ...userApplications,
                ...messageApplications
            ];

            // Forzar indexacion
            // indexApplications(client, loadedApplications);

            // Verifica si el tamaño de las aplicaciones del bot y las cargadas por el "Framework" son iguales
            if (botApplications.size !== loadedApplications.length) {

                indexApplications(client, loadedApplications);

                return;
            };

            // Verifica si en las aplicaciones del bot y las cargadas por el "Framework" tienen algun cambio
            for (const _botApplication of botApplications.values()) {

                switch (_botApplication.type) {

                    case (discord.ApplicationCommandType.ChatInput):

                        for (const _frameworkApplication of chatApplications) {

                            if (!verifyChatApplication(_botApplication, _frameworkApplication)) {

                                indexApplications(client, loadedApplications);

                                return;
                            };
                        };

                        break;

                    case (discord.ApplicationCommandType.User):

                        for (const _frameworkApplication of userApplications) {

                            if (!verifyUserApplication(_botApplication, _frameworkApplication)) {

                                indexApplications(client, loadedApplications);

                                return;
                            };
                        };

                        break;

                    case (discord.ApplicationCommandType.Message):

                        for (const _frameworkApplication of messageApplications) {

                            if (!verifyMessageApplication(_botApplication, _frameworkApplication)) {

                                indexApplications(client, loadedApplications);

                                return;
                            };
                        };

                        break;
                };
            };

            // Verifica si en las aplicaciones cargadas por el "Framework" y las aplicaciones del bot tienen algun cambio
            for (const _frameworkApplication of loadedApplications) {

                switch (_frameworkApplication.type) {

                    case (discord.ApplicationCommandType.ChatInput):

                        for (const _botApplication of botApplications.values()) {

                            if (!verifyChatApplication(_botApplication, _frameworkApplication)) {

                                indexApplications(client, loadedApplications);

                                return;
                            };
                        };

                        break;

                    case (discord.ApplicationCommandType.User):

                        for (const _botApplication of botApplications.values()) {

                            if (!verifyUserApplication(_botApplication, _frameworkApplication)) {

                                indexApplications(client, loadedApplications);

                                return;
                            };
                        };

                        break;

                    case (discord.ApplicationCommandType.Message):

                        for (const _botApplication of botApplications.values()) {

                            if (!verifyMessageApplication(_botApplication, _frameworkApplication)) {

                                indexApplications(client, loadedApplications);

                                return;
                            };
                        };

                        break;
                };
            };

            // @OLD_CODE
            /*
            const chatApplications    = loaded.applications.chat.map((file: ChatApplication) => file.schema);
            const userApplications    = loaded.applications.user.map((file: UserApplication) => file.schema);
            const messageApplications = loaded.applications.message.map((file: MessageApplication) => file.schema);

            const allApplications = [

                ...chatApplications,
                ...userApplications,
                ...messageApplications
            ];

            client.application.commands
                .set(allApplications)
                .then(() => console.log('Applications indexed'));
            */
        }
    }
};
