const utilsBase          = require('../bases/utilsBase.js');
const applicationsLoaded = require('../loadeds/applicationsLoaded.js');
const eventsLoaded       = require('../loadeds/eventsLoaded.js');
const servicesLoaded     = require('../loadeds/servicesLoaded.js');
const eventsManager      = require('../managers/eventsManager.js');
const eventsSource       = require('../sources/eventsSource.js');
const foldersSource      = require('../sources/foldersSource.js');
const intentsSource      = require('../sources/intentsSource.js');
const partialsSource     = require('../sources/partialsSource.js');
const pathsSource        = require('../sources/pathsSource.js');

module.exports = function (client) {

    // Carga los eventos
    for (const _event of eventsLoaded) {

        // Si el evento no fue cargado salta al siguiente
        if (!eventsSource[_event.name]) continue;

        _event.event({
                
            client,

            loadeds: {

                applications: applicationsLoaded,
                events:       eventsLoaded,
                services:     servicesLoaded
            },

            sources: {

                events:   eventsSource,
                folders:  foldersSource,
                intents:  intentsSource,
                partials: partialsSource,
                paths:    pathsSource,
            },

            managers: {

                events: eventsManager
            },

            bases: {

                utils: utilsBase
            },

            utils: new utilsBase(_event)
        });
    };
};