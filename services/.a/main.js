export default {

    events: {

        ready: [
            
            function ({ client, loadeds }) {

                const slashApplications   = loadeds.applications.slash.map((val) => val.schema);
                const userApplications    = loadeds.applications.user.map((val) => val.schema);
                const messageApplications = loadeds.applications.message.map((val) => val.schema);

                const allApplications = slashApplications.concat(userApplications)
                                                         .concat(messageApplications);

                client.application.commands.set(allApplications)
                                           .then(() => console.log('Indexed'));
            }
        ]
    }
};