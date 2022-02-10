const loadeds = require('./loadeds.js');

let cache = {};

for (const _event of loadeds.events) {

    const applications = loadeds.applications.filter((val) => val.events[_event.name]);
    const services     = loadeds.services.filter((val) => val.events[_event.name]);
    const all          = applications.concat(services);

    // Salta el evento si este no es requerido
    if (!all.length) continue;

    // Carga el evento
    cache[_event.name] = { applications, services, all };
};

// Exporta los eventos
module.exports = cache;