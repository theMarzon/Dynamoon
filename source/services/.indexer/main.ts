import ChatApplication    from '../../framework/structures/Applications/ChatApplication.js';
import UserApplication    from '../../framework/structures/Applications/UserApplication.js';
import MessageApplication from '../../framework/structures/Applications/MessageApplication.js';

import { ServiceOptions } from '../../framework/types/Service.js';

export default <Omit<ServiceOptions, 'name'>> {

    events: {

        clientReady: ({ client, loaded }) => {

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
        }
    }
};
