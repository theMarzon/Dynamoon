const files = require('./files.js');

let events = {};

for (const _event of files.events) {

    const services     = files.services.filter((val) => val.events[_event.name]);
    const applications = files.applications.filter((val) => val.events[_event.name]);
    const all          = services.concat(applications);

    // Si el evento no es requerido salta al siguiente
    if (!all.length) continue;

    // Carga el evento
    events[_event.name] = { all, services, applications };
};

// Exporta los eventos
module.exports = events;