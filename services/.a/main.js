export default {

    events: {

        ready: [
            
            function ({ client, loaded }) {

                const slashApplications   = loaded.applications.slash.map((val) => val.schema);
                const userApplications    = loaded.applications.user.map((val) => val.schema);
                const messageApplications = loaded.applications.message.map((val) => val.schema);

                const allApplications = slashApplications.concat(userApplications)
                                                         .concat(messageApplications);

                client.application.commands.set(allApplications)
                                           .then(() => console.log('Indexed'));
            }
        ]
    }
};