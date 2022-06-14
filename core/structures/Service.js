import Base from './Base.js';

export default class extends Base {

    constructor (content) {

        super(content);

        // Eventos
        content.events ??= {};

        Object.assign(this, content);
    };
};
