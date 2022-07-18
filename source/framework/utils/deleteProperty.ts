export type ContentOption = {

    [key: string | number]: any
};

export default <P extends ContentOption, S extends string | number> (content: P, key: S): Omit<P, S> => {

    content = { ...content };

    delete content[key];

    return content;
};
