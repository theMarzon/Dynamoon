const files = require('./files.js');

let cache = {};

for (const _event of files.events) {

    const applications = files.applications.filter((val) => val.events[_event.name]);
    const services     = files.services.filter((val) => val.events[_event.name]);
    const all          = applications.concat(services);

    // Salta el evento si este no es requerido
    if (!all.length) continue;

    // Carga el evento
    cache[_event.name] = { applications, services, all };
};

// Exporta los eventos
module.exports = cache;