import { ServiceOptions   } from '../../framework/types/Service.js';
import { ClientReadyEvent } from '../../events/clientReady/types/Execution.js';

export default <Omit<ServiceOptions, 'name'>> {

    events: {

        clientReady: ({ client, loaded }: ClientReadyEvent) => {

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
