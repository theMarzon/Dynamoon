export default {

    events: {

        ready: [

            ({ client, loaded }) => {

                const slashApplications   = used.applications.slash.map((value) => value.schema);
                const userApplications    = used.applications.user.map((value) => value.schema);
                const messageApplications = used.applications.message.map((value) => value.schema);

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
