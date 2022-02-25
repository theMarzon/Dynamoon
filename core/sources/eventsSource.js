const eventsLoaded       = require('../loadeds/eventsLoaded.js');
const servicesLoaded     = require('../loadeds/servicesLoaded.js');
const applicationsLoaded = require('../loadeds/applicationsLoaded.js');

let eventSources = {};

for (const _event of eventsLoaded) {

    const services     = servicesLoaded.filter((val) => val.events[_event.name]);
    const applications = applicationsLoaded.filter((val) => val.events[_event.name]);
    const all          = services.concat(applications);

    // Si el evento no es requerido salta al siguiente
    if (!all.length) continue;

    // Carga el evento
    eventSources[_event.name] = { all, services, applications };
};

// Exporta los eventos
module.exports = eventSources;