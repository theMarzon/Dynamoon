import { ServiceOptions } from '../../framework/types/Service.js';

import { EventOptions as ClientReadyOptions } from '../../events/clientReady/types/Options.js';

export default <ServiceOptions> {

    events: {

        clientReady: ({ client, loaded }: ClientReadyOptions) => {

            const chatApplications    = loaded.applications.chat.map((file) => file.schema);
            const userApplications    = loaded.applications.user.map((file) => file.schema);
            const messageApplications = loaded.applications.message.map((file) => file.schema);

            const allApplications = [

                ...chatApplications,
                ...userApplications,
                ...messageApplications
            ];

            client.application?.commands
                .set(allApplications)
                .then(() => console.log('Applications indexed'));
        }
    }
};
