const discord = require('discord.js');

const optionsVerifier = require('./options.js');

module.exports = function (fileCommand, botCommand) {

    console.log(fileCommand);
    console.log(botCommand);
    
    switch (fileCommand.type) {

        // Command
        case (discord.ApplicationCommandType.ChatInput): {

            console.log('Nombre',                  `${fileCommand.name                     } | ${botCommand.name                     }`, fileCommand.name                      === botCommand.name);
            console.log('Tipo',                    `${fileCommand.type                     } | ${botCommand.type                     }`, fileCommand.type                      === botCommand.type);
            console.log('Descripcion',             `${fileCommand.description              } | ${botCommand.description              }`, fileCommand.description               === botCommand.description);
            console.log('Activado',                `${fileCommand.defaultPermission       } | ${botCommand.defaultPermission       }`, fileCommand.defaultPermission        === botCommand.defaultPermission);
            console.log('Nombres dinamicos',       `${fileCommand.nameLocalizations       } | ${botCommand.nameLocalizations       }`, fileCommand.nameLocalizations        === botCommand.nameLocalizations);
            console.log('Descripciones dinamicas', `${fileCommand.descriptionLocalizations} | ${botCommand.descriptionLocalizations}`, fileCommand.descriptionLocalizations === botCommand.descriptionLocalizations);

            if (fileCommand.name                      !== botCommand.name
            ||  fileCommand.type                      !== botCommand.type
            ||  fileCommand.description               !== botCommand.description
            ||  fileCommand.defaultPermission        !== botCommand.defaultPermission
            ||  fileCommand.nameLocalizations        !== botCommand.nameLocalizations
            ||  fileCommand.descriptionLocalizations !== botCommand.descriptionLocalizations) return false;
            
            break;
        };

        // Message
        case (discord.ApplicationCommandType.Message): {

            console.log('Nombre',            `${fileCommand.name              } | ${botCommand.name              }`, fileCommand.name               === botCommand.name);
            console.log('Tipo',              `${fileCommand.type              } | ${botCommand.type              }`, fileCommand.type               === botCommand.type);
            console.log('Activado',          `${fileCommand.defaultPermission} | ${botCommand.defaultPermission}`, fileCommand.defaultPermission === botCommand.defaultPermission);
            console.log('Nombres dinamicos', `${fileCommand.nameLocalizations} | ${botCommand.nameLocalizations}`, fileCommand.nameLocalizations === botCommand.nameLocalizations);

            if (fileCommand.name               !== botCommand.name
            ||  fileCommand.type               !== botCommand.type
            ||  fileCommand.defaultPermission !== botCommand.defaultPermission
            ||  fileCommand.nameLocalizations !== botCommand.nameLocalizations) return false;
            
            break;
        };

        // User
        case (discord.ApplicationCommandType.User): {

            console.log('Nombre',            `${fileCommand.name              } | ${botCommand.name              }`, fileCommand.name               === botCommand.name);
            console.log('Tipo',              `${fileCommand.type              } | ${botCommand.type              }`, fileCommand.type               === botCommand.type);
            console.log('Activado',          `${fileCommand.defaultPermission} | ${botCommand.defaultPermission}`, fileCommand.defaultPermission === botCommand.defaultPermission);
            console.log('Nombres dinamicos', `${fileCommand.nameLocalizations} | ${botCommand.nameLocalizations}`, fileCommand.nameLocalizations === botCommand.nameLocalizations);

            if (fileCommand.name               !== botCommand.name
            ||  fileCommand.type               !== botCommand.type
            ||  fileCommand.defaultPermission !== botCommand.defaultPermission
            ||  fileCommand.nameLocalizations !== botCommand.nameLocalizations) return false;
            
            break;
        };
    };

    return true;
};