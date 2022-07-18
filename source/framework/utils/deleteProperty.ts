export type ContentOption = {

    [key: string | number | symbol]: any
};

export default <P extends ContentOption, S extends string | number | symbol> (content: P, key: S): Omit<P, S> => {

    content = { ...content };

    delete content[key];

    return content;
};
