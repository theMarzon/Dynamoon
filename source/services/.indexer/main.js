export default {

    events: {

        ready: [

            ({ client, loaded }) => {

                const slashApplications   = loaded.applications.slash.map((file) => file.schema);
                const userApplications    = loaded.applications.user.map((file) => file.schema);
                const messageApplications = loaded.applications.message.map((file) => file.schema);

                const allApplications = slashApplications
                    .concat(userApplications)
                    .concat(messageApplications);

                client.application.commands
                    .set(allApplications)
                    .then(() => console.log('Indexed applications'));
            }
        ]
    }
};
