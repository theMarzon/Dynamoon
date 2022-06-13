import PackageBuilder from './Package.js';

export default class extends PackageBuilder {

    constructor (content) {

        super(content);

        // La funcion que se ejecutara al cargarse el evento
        content.execute ??= function () {};

        Object.assign(this, content);
    };
};
