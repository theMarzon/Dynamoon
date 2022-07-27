export default {

    events: {

        clientReady: ({ client, loaded }) => {

            const chatApplications    = loaded.applications.chat.map((file) => file.schema);
            const userApplications    = loaded.applications.user.map((file) => file.schema);
            const messageApplications = loaded.applications.message.map((file) => file.schema);

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
