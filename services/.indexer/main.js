const commandsVerifier = require('./verifiers/commands.js');

module.exports = {

    priority: 1,

    events: {

        ready: async ({ client, loaders, sources, managers, builders, tools }) => {

            const loadedApplications = loaders.applications.map((val) => val.schema);
            const botApplications    = await client.application.commands.fetch();

            function index () {
/*
                client.application.commands.set(loadedApplications)
                .then(() => console.log('Indexacion finalizada'));*/

                console.log('Indexados');
            };

            // return index ();

            if (loadedApplications.length !== botApplications.size) {
                
                index();

                return;
            };

            for (const _application of loadedApplications) {
                
                const findedApplication = botApplications.find((val) => val.name === _application.name && val.type === _application.type);

                if (!findedApplication
                ||  !commandsVerifier(_application, findedApplication)) {
                    
                    index();

                    return;
                };
            };  
        }
    }
};