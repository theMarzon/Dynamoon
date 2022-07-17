export type ContentOption = {

    [key: string | number]: any
};

export default <T extends ContentOption, U extends string | number> (content: T, key: U): Omit<T, U> => {

    content = { ...content };

    delete content[key];

    return content;
};
