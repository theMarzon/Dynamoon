export default function (content, name) {

    content = { ...content };

    delete content[name];

    return content;
};
