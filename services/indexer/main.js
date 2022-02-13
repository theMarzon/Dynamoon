const discord = require('discord.js');

module.exports = {

    priority: 1,

    events: {

        ready: async function ({ client, manager, bases, utils }) {

            const loadedApplications = manager.files.applications.map((val) => val.schema);
            const botApplications    = await client.application.commands.fetch();

            function index () {

                client.application.commands.set(loadedApplications)
                .then(() => console.log('Indexacion finalizada'))
                .catch((err) => console.log('Indexacion fallida', err));
            };

            // return index ();

            function verifyChoice (fileChoice, botChoice) {

                // Si el nombre es diferente
                if (fileChoice.name !== botChoice.name) return false;

                // Si el valor es diferente
                if (fileChoice.value !== botChoice.value) return false;

                // Si todo coincide
                return true;
            };

            function verifyOption (fileOption, botOption) {

                // Si el nombre es diferente
                if (fileOption.name !== botOption.name) return false;

                // Si la descripcion es diferente
                if (fileOption.description !== botOption.description) return false;

                // Si el tipo es diferente
                if (fileOption.type !== botOption.type) return false;
                
                // Comprueba segun el tipo
                switch (fileOption.type) {

                    // Si es un Boolean
                    case (discord.ApplicationCommandOptionType.Boolean): {

                        // Si el requerido es diferente
                        if (fileOption.required !== botOption.required) return false;

                        // Si la cantidad de selecciones son diferentes
                        if (fileOption.choices.length !== botOption.choices.length) return false;

                        for (let i = 0; i < fileOption.choices.length; i++) {

                            // Si la opcion es diferente
                            if (!verifyChoice(fileOption.choices[i], botOption.choices[i])) return false;
                        };
                        
                        break;
                    };

                    // Si es un Channel
                    case (discord.ApplicationCommandOptionType.Channel): {

                        // Si el requerido es diferente
                        if (fileOption.required !== botOption.required) return false;
                        
                        break;
                    };

                    // Si es un Integer
                    case (discord.ApplicationCommandOptionType.Integer): {

                        // Si el requerido es diferente
                        if (fileOption.required !== botOption.required) return false;

                        // Si el autocompletado es diferente
                        if (fileOption.autocomplete !== botOption.autocomplete) return false;

                        // Si la cantidad de selecciones son diferentes
                        if (fileOption.choices.length !== botOption.choices.length) return false;

                        for (let i = 0; i < fileOption.choices.length; i++) {

                            // Si la opcion es diferente
                            if (!verifyChoice(fileOption.choices[i], botOption.choices[i])) return false;
                        };
                        
                        break;
                    };

                    // Si es un Mentionable
                    case (discord.ApplicationCommandOptionType.Mentionable): {

                        // Si el requerido es diferente
                        if (fileOption.required !== botOption.required) return false;
                        
                        break;
                    };

                    // Si es un Number
                    case (discord.ApplicationCommandOptionType.Number): {

                        // Si el requerido es diferente
                        if (fileOption.required !== botOption.required) return false;

                        // Si el autocompletado es diferente
                        if (fileOption.autocomplete !== botOption.autocomplete) return false;

                        // Si la cantidad de selecciones son diferentes
                        if (fileOption.choices.length !== botOption.choices.length) return false;

                        for (let i = 0; i < fileOption.choices.length; i++) {

                            // Si la opcion es diferente
                            if (!verifyChoice(fileOption.choices[i], botOption.choices[i])) return false;
                        };
                        
                        break;
                    };

                    // Si es un Role
                    case (discord.ApplicationCommandOptionType.Role): {

                        // Si el requerido es diferente
                        if (fileOption.required !== botOption.required) return false;
                        
                        break;
                    };

                    // Si es un String
                    case (discord.ApplicationCommandOptionType.String): {

                        // Si el requerido es diferente
                        if (fileOption.required !== botOption.required) return false;

                        // Si el autocompletado es diferente
                        if (fileOption.autocomplete !== botOption.autocomplete) return false;

                        // Si la cantidad de selecciones son diferentes
                        if (fileOption.choices.length !== botOption.choices.length) return false;

                        for (let i = 0; i < fileOption.choices.length; i++) {

                            // Si la opcion es diferente
                            if (!verifyChoice(fileOption.choices[i], botOption.choices[i])) return false;
                        };
                        
                        break;
                    };
                };

                // Si todo coincide
                return true;
            };

            function verifyCommand (fileCommand, botCommand) {

                // Si el nombre es diferente
                if (fileCommand.name !== botCommand.name) return false;

                // Si los permisos son diferentes
                if (fileCommand.defaultPermission !== botCommand.defaultPermission) return false;

                // Si el tipo es diferente
                if (fileCommand.type !== botCommand.type) return false;
                
                // Comprueba segun el tipo
                switch (fileCommand.type) {

                    case (discord.ApplicationCommandType.ChatInput): {
        
                        // Si la descripcion es diferente
                        if (fileCommand.description !== botCommand.description) return false;

                        // Si la cantidad de opciones es diferente
                        if (fileCommand.options.length !== botCommand.options.length) return false;

                        for (let i = 0; i < fileCommand.options.length; i++) {

                            // Si la opcion es diferente
                            if (!verifyOption(fileCommand.options[i], botCommand.options[i])) return false;
                        };
                        
                        break;
                    };
                };

                // Si todo coincide
                return true;
            };

            // Si las opciones son iguales
            if (loadedApplications.length !== botApplications.size) return index();

            // Verifica si los arrays son iguales
            for (const _application of loadedApplications) {

                // Obtiene la applicacion
                const findedApplication = botApplications.find((val) => val.name === _application.name && val.type === _application.type);

                // Si no se obtuvo la applicacion
                if (!findedApplication) return index();

                // Si las opciones son diferentes
                if (!verifyCommand(_application, findedApplication)) return index();
            };  
        }
    }
};