export default (content, key) => {

    content = { ...content };

    delete content[key];

    return content;
};
