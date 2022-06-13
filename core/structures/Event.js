import Base from './Base.js';

export default class extends Base {

    constructor (content) {

        super(content);

        // Funcion que se ejecutara
        content.execute ??= function () {};

        Object.assign(this, content);
    };
};
