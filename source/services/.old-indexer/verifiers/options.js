const discord = require('discord.js');

const choicesVerifier = require('./choices.mjs');

module.exports = function (fileOption, botOption) {

    console.log(fileOption);
    console.log(botOption);
    
    switch (fileOption.type) {

        // Attachment
        case (discord.ApplicationCommandOptionType.Attachment): {

            console.log('Nombre',      `${fileOption.name    } | ${botOption.name    }`, fileOption.name     === botOption.name);
            console.log('Tipo',        `${fileOption.type    } | ${botOption.type    }`, fileOption.type     === botOption.type);
            console.log('Obligatorio', `${fileOption.required} | ${botOption.required}`, fileOption.required === botOption.required);
            
            if (fileOption.name     !== botOption.name
            ||  fileOption.type     !== botOption.type
            ||  fileOption.required !== botOption.required) return false;
            
            break;
        };

        // Boolean
        case (discord.ApplicationCommandOptionType.Boolean): {

            console.log('Nombre',      `${fileOption.name    } | ${botOption.name    }`, fileOption.name     === botOption.name);
            console.log('Tipo',        `${fileOption.type    } | ${botOption.type    }`, fileOption.type     === botOption.type);
            console.log('Obligatorio', `${fileOption.required} | ${botOption.required}`, fileOption.required === botOption.required);

            if (fileOption.name     !== botOption.name
            ||  fileOption.type     !== botOption.type
            ||  fileOption.required !== botOption.required) return false;

            if (fileOption.choices 
            ||  botOption.choices) {

                if (!!fileOption.choices        !== !!botOption.choices
                ||    fileOption.choices.length !==   botOption.choices.length) return false;

                for (let i = 0; i < fileOption.choices.length; i++) {

                    if (!choicesVerifier(fileOption.choices[i], botOption.choices[i])) return false;
                };
            };

            break;
        };

        // Channel
        case (discord.ApplicationCommandOptionType.Channel): {

            console.log('Nombre',      `${fileOption.name    } | ${botOption.name    }`, fileOption.name     === botOption.name);
            console.log('Tipo',        `${fileOption.type    } | ${botOption.type    }`, fileOption.type     === botOption.type);
            console.log('Obligatorio', `${fileOption.required} | ${botOption.required}`, fileOption.required === botOption.required);
            
            if (fileOption.name     !== botOption.name
            ||  fileOption.type     !== botOption.type
            ||  fileOption.required !== botOption.required) return false;
            
            if (fileOption.channel_types 
            ||  botOption.channelTypes) {

                if (!!fileOption.chaanel_types        !== !!botOption.channelTypes
                ||    fileOption.chaanel_types.length !==   botOption.channelTypes.length) return false;

                for (let i = 0; i < fileOption.chaanel_types.length; i++) {

                    if (fileOption.chaanel_types[i] !== botOption.channelTypes[i]) return false;
                };

                for (let i = 0; i < botOption.channelTypes.length; i++) {

                    if (botOption.channelTypes[i] !== fileOption.channel_types[i]) return false;
                };
            };
            
            break;
        };

        // Integer
        case (discord.ApplicationCommandOptionType.Integer): {

            console.log('Nombre',               `${fileOption.name        } | ${botOption.name        }`, fileOption.name         === botCommand.name);
            console.log('Tipo',                 `${fileOption.type        } | ${botOption.type        }`, fileOption.type         === botCommand.type);
            console.log('Obligatorio',          `${fileOption.required    } | ${botOption.required    }`, fileOption.required     === botCommand.required);
            console.log('Resultados dinamicos', `${fileOption.autocomplete} | ${botOption.autocomplete}`, fileOption.autocomplete === botCommand.autocomplete);
            console.log('Minimo',               `${fileOption.min_value   } | ${botOption.minValue    }`, fileOption.min_value    === botCommand.minValue);
            console.log('Maximo',               `${fileOption.max_value   } | ${botOption.maxValue    }`, fileOption.max_value    === botCommand.maxValue);
            
            if (fileOption.name     !== botOption.name
            ||  fileOption.type     !== botOption.type
            ||  fileOption.required !== botOption.required) return false;

            if (fileOption.autocomplete
            ||  botOption.autocomplete) {

                if (fileOption.autocomplete !== botOption.autocomplete) return false;
            };

            if (fileOption.min_value
            ||  botOption.minValue) {

                if (fileOption.min_value !== botOption.minValue) return false;
            };

            if (fileOption.max_value
            ||  botOption.maxValue) {

                if (fileOption.max_value !== botOption.maxValue) return false;
            };  

            if (fileOption.choices 
            ||  botOption.choices) {

                if (!!fileOption.choices        !== !!botOption.choices
                ||    fileOption.choices.length !==   botOption.choices.length) return false;

                for (let i = 0; i < fileOption.choices.length; i++) {

                    if (!choicesVerifier(fileOption.choices[i], botOption.choices[i])) return false;
                };
            };
            
            break;
        };

        // Mentionable
        case (discord.ApplicationCommandOptionType.Mentionable): {

            console.log('Nombre',      `${fileOption.name    } | ${bbotOption.name    }`, fileOption.name     === botOption.name);
            console.log('Tipo',        `${fileOption.type    } | ${bbotOption.type    }`, fileOption.type     === botOption.type);
            console.log('Obligatorio', `${fileOption.required} | ${bbotOption.required}`, fileOption.required === botOption.required);
            
            if (fileOption.name     !== botOption.name
            ||  fileOption.type     !== botOption.type
            ||  fileOption.required !== botOption.required) return false;
            
            break;
        };

        // Number
        case (discord.ApplicationCommandOptionType.Number): {

            console.log('Nombre',               `${fileOption.name        } | ${botOption.name        }`, fileOption.name         === botCommand.name);
            console.log('Tipo',                 `${fileOption.type        } | ${botOption.type        }`, fileOption.type         === botCommand.type);
            console.log('Obligatorio',          `${fileOption.required    } | ${botOption.required    }`, fileOption.required     === botCommand.required);
            console.log('Resultados dinamicos', `${fileOption.autocomplete} | ${botOption.autocomplete}`, fileOption.autocomplete === botCommand.autocomplete);
            console.log('Minimo',               `${fileOption.min_value   } | ${botOption.minValue    }`, fileOption.min_value    === botCommand.minValue);
            console.log('Maximo',               `${fileOption.max_value   } | ${botOption.maxValue    }`, fileOption.max_value    === botCommand.maxValue);
            
            if (fileOption.name     !== botOption.name
            ||  fileOption.type     !== botOption.type
            ||  fileOption.required !== botOption.required) return false;

            if (fileOption.autocomplete
            ||  botOption.autocomplete) {

                if (fileOption.autocomplete !== botOption.autocomplete) return false;
            };

            if (fileOption.min_value
            ||  botOption.minValue) {

                if (fileOption.min_value !== botOption.minValue) return false;
            };

            if (fileOption.max_value
            ||  botOption.maxValue) {

                if (fileOption.max_value !== botOption.maxValue) return false;
            };  

            if (fileOption.choices 
            ||  botOption.choices) {

                if (!!fileOption.choices        !== !!botOption.choices
                ||    fileOption.choices.length !==   botOption.choices.length) return false;

                for (let i = 0; i < fileOption.choices.length; i++) {

                    if (!choicesVerifier(fileOption.choices[i], botOption.choices[i])) return false;
                };
            };
            
            break;
        };

        // Role
        case (discord.ApplicationCommandOptionType.Role): {

            console.log('Nombre',      `${fileOption.name    } | ${botOption.name    }`, fileOption.name     === botOption.name);
            console.log('Tipo',        `${fileOption.type    } | ${botOption.type    }`, fileOption.type     === botOption.type);
            console.log('Obligatorio', `${fileOption.required} | ${botOption.required}`, fileOption.required === botOption.required);
            
            if (fileOption.name     !== botOption.name
            ||  fileOption.type     !== botOption.type
            ||  fileOption.required !== botOption.required) return false;
            
            break;
        };

        // String
        case (discord.ApplicationCommandOptionType.String): {

            console.log('Nombre',               `${fileOption.name        } | ${botOption.name        }`, fileOption.name         === botOption.name);
            console.log('Tipo',                 `${fileOption.type        } | ${botOption.type        }`, fileOption.type         === botOption.type);
            console.log('Obligatorio',          `${fileOption.required    } | ${botOption.required    }`, fileOption.required     === botOption.required);
            console.log('Resultados dinamicos', `${fileOption.autocomplete} | ${botOption.autocomplete}`, fileOption.autocomplete === botOption.autocomplete);
            
            if (fileOption.name     !== botOption.name
            ||  fileOption.type     !== botOption.type
            ||  fileOption.required !== botOption.required) return false;

            if (fileOption.autocomplete
            ||  botOption.autocomplete) {

                if (fileOption.autocomplete !== botOption.autocomplete) return false;
            };

            if (fileOption.choices 
            ||  botOption.choices) {

                if (!!fileOption.choices        !== !!botOption.choices
                ||    fileOption.choices.length !==   botOption.choices.length) return false;

                for (let i = 0; i < fileOption.choices.length; i++) {

                    if (!choicesVerifier(fileOption.choices[i], botOption.choices[i])) return false;
                };
            };
            
            break;
        };
    };

    return true;
};