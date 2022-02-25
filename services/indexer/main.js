const discord = require('discord.js');

module.exports = {

    priority: 1,

    events: {

        ready: async function ({ client, loadeds, sources, managers, bases, utils }) {

            const loadedApplications = loadeds.applications.map((val) => val.schema);
            const botApplications    = await client.application.commands.fetch();

            function index () {

                client.application.commands.set(loadedApplications)
                .then(() => console.log('Indexacion finalizada'));
            };

            // return index ();

            function verifyChoice (fileChoice, botChoice) {

                if (fileChoice.name !== botChoice.name) return false;

                if (fileChoice.value !== botChoice.value) return false;

                return true;
            };

            function verifyOption (fileOption, botOption) {

                if (fileOption.name !== botOption.name) return false;

                if (fileOption.description !== botOption.description) return false;

                if (fileOption.type !== botOption.type) return false;
                
                switch (fileOption.type) {

                    case (discord.ApplicationCommandOptionType.Boolean): {

                        if (fileOption.required !== botOption.required) return false;

                        if (!!fileOption.choices !== !!botOption.choices) return false;

                        if (fileOption.choices.length !== botOption.choices.length) return false;

                        for (let i = 0; i < fileOption.choices.length; i++) {

                            if (!verifyChoice(fileOption.choices[i], botOption.choices[i])) return false;
                        };
                        
                        break;
                    };

                    // Channel
                    case (discord.ApplicationCommandOptionType.Channel): {

                        if (fileOption.required !== botOption.required) return false;
                        
                        break;
                    };

                    // Integer
                    case (discord.ApplicationCommandOptionType.Integer): {

                        if (fileOption.required !== botOption.required) return false;

                        if (fileOption.autocomplete !== botOption.autocomplete) return false;

                        if (!!fileOption.choices !== !!botOption.choices) return false;

                        if (fileOption.choices.length !== botOption.choices.length) return false;

                        for (let i = 0; i < fileOption.choices.length; i++) {

                            if (!verifyChoice(fileOption.choices[i], botOption.choices[i])) return false;
                        };
                        
                        break;
                    };

                    // Mentionable
                    case (discord.ApplicationCommandOptionType.Mentionable): {

                        if (fileOption.required !== botOption.required) return false;
                        
                        break;
                    };

                    // Number
                    case (discord.ApplicationCommandOptionType.Number): {

                        if (fileOption.required !== botOption.required) return false;

                        if (fileOption.autocomplete !== botOption.autocomplete) return false;

                        if (!!fileOption.choices !== !!botOption.choices) return false;

                        if (fileOption.choices.length !== botOption.choices.length) return false;

                        for (let i = 0; i < fileOption.choices.length; i++) {

                            if (!verifyChoice(fileOption.choices[i], botOption.choices[i])) return false;
                        };
                        
                        break;
                    };

                    // Role
                    case (discord.ApplicationCommandOptionType.Role): {

                        if (fileOption.required !== botOption.required) return false;
                        
                        break;
                    };

                    // String
                    case (discord.ApplicationCommandOptionType.String): {

                        if (fileOption.required !== botOption.required) return false;

                        if (fileOption.autocomplete !== botOption.autocomplete) return false;

                        if (!!fileOption.choices !== !!botOption.choices) return false;

                        if (fileOption.choices.length !== botOption.choices.length) return false;

                        for (let i = 0; i < fileOption.choices.length; i++) {

                            if (!verifyChoice(fileOption.choices[i], botOption.choices[i])) return false;
                        };
                        
                        break;
                    };
                };

                return true;
            };

            function verifyCommand (fileCommand, botCommand) {

                if (fileCommand.name !== botCommand.name) return false;

                if (fileCommand.defaultPermission !== botCommand.defaultPermission) return false;

                if (fileCommand.type !== botCommand.type) return false;
                
                switch (fileCommand.type) {

                    // ChatInput
                    case (discord.ApplicationCommandType.ChatInput): {
        
                        if (fileCommand.description !== botCommand.description) return false;

                        if (!!fileCommand.options !== !!botCommand.options) return false;

                        if (fileCommand.options.length !== botCommand.options.length) return false;

                        for (let i = 0; i < fileCommand.options.length; i++) {

                            if (!verifyOption(fileCommand.options[i], botCommand.options[i])) return false;
                        };
                        
                        break;
                    };
                };

                return true;
            };

            if (loadedApplications.length !== botApplications.size) return index();

            for (const _application of loadedApplications) {

                const findedApplication = botApplications.find((val) => val.name === _application.name && val.type === _application.type);

                if (!findedApplication) return index();

                if (!verifyCommand(_application, findedApplication)) return index();
            };  
        }
    }
};