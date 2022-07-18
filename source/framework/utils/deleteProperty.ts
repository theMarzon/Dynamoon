import {

    ContentOption,
    ContentType
} from '../types/Utils.js';

export default <P extends ContentOption, S extends ContentType> (content: P, key: S): Omit<P, S> => {

    content = { ...content };

    delete content[key];

    return content;
};
