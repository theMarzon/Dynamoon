import ChatApplication    from '../../framework/structures/Applications/ChatApplication.js';
import UserApplication    from '../../framework/structures/Applications/UserApplication.js';
import MessageApplication from '../../framework/structures/Applications/MessageApplication.js';

export default {

    events: {

        ready: [

            ({ client, loaded }) => {

                const chatApplications    = loaded.applications.chat.map((file: ChatApplication) => file.schema);
                const userApplications    = loaded.applications.user.map((file: UserApplication) => file.schema);
                const messageApplications = loaded.applications.message.map((file: MessageApplication) => file.schema);

                const allApplications = chatApplications
                    .concat(userApplications)
                    .concat(messageApplications);

                client.application.commands
                    .set(allApplications)
                    .then(() => console.log('Indexed applications'));
            }
        ]
    }
};
