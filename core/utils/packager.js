import path from 'node:path';
import fs   from 'node:fs';

export default function (directory) {

    const eventsPath = path.join(directory, 'events');

    if (!fs.existsSync(eventsPath)) fs.mkdirSync(eventsPath);
};
