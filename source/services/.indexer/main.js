export default {

    events: {

        ready: [

            ({ client, loaded }) => {

                const slashApplications   = loaded.applications.slash.map((value) => value.schema);
                const userApplications    = loaded.applications.user.map((value) => value.schema);
                const messageApplications = loaded.applications.message.map((value) => value.schema);

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
