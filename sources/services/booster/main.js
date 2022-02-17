const os = require('os');

module.exports = {

    priority: 2,

    events: {

        boot: function ({ client, manager, cache, bases, utils }) {
    
            // Establece la prioridad del proyecto en alta para el arranque
            os.setPriority(os.constants.priority.PRIORITY_HIGH);
        },

        ready: function ({ client, manager, cache, bases, utils }) {
    
            // Establece la prioridad del proyecto en normal despues del arranque
            os.setPriority(os.constants.priority.PRIORITY_NORMAL);
        }
    }
};