const eventsLoaded       = require('../../loadeds/exports/eventsLoaded.js');
const servicesLoaded     = require('../../loadeds/exports/servicesLoaded.js');
const applicationsLoaded = require('../../loadeds/exports/applicationsLoaded.js');

let cache = {};

for (const _event of eventsLoaded) {

    const services     = servicesLoaded.filter((val) => val.events[_event.name]);
    const applications = applicationsLoaded.filter((val) => val.events[_event.name]);
    const all          = services.concat(applications);

    // Si el evento no es requerido salta al siguiente
    if (!all.length) continue;

    // Carga el evento
    cache[_event.name] = { all, services, applications };
};

// Exporta los eventos
module.exports = cache;