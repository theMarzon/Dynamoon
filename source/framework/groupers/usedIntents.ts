import discord from 'discord.js';

import loadedEvents from '../loaders/loadedEvents.js';
import usedEvents   from './usedEvents.js';

let usedIntents: discord.GatewayIntentBits = 0;

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no se esta utilizando
    if (!usedEvents[_loadedEvent.name]) continue;

    usedIntents |= _loadedEvent.intents;

    for (const _eventFile of usedEvents[_loadedEvent.name].all) {

        usedIntents |= _eventFile.intents;
    };
};

export default usedIntents;
