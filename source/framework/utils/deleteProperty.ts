import {

    DeletePropertyOption,
    DeletePropertyType
} from '../types/Utils.js';

export default <P extends DeletePropertyOption, S extends DeletePropertyType> (content: P, key: S): Omit<P, S> => {

    content = { ...content };

    delete content[key];

    return content;
};
