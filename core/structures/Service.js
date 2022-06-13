import Package from './Package.js';

export default class extends Package {

    constructor (content) {

        super(content);

        // Los eventos del servicio
        content.events ??= {};

        Object.assign(this, content);
    };
};
