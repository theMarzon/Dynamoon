const files = require('./files.js');

let cache = {};

for (const _event of files.events) {

    const services     = files.services.filter((val) => val.events[_event.name]);
    const applications = files.applications.filter((val) => val.events[_event.name]);
    const all          = services.concat(applications);

    // Salta el evento si este no es requerido
    if (!all.length) continue;

    // Carga el evento
    cache[_event.name] = { all, services, applications };
};

// Exporta los eventos
module.exports = cache;