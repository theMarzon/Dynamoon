import PackageBuilder from './Package.js';

export default class extends PackageBuilder {

    constructor (content) {

        super(content);

        // Los eventos del servicio
        content.events ??= {};

        Object.assign(this, content);
    };
};
