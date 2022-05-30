import loadedEvents              from '../loaders/events.js';
import loadedServices            from '../loaders/services.js';
import loadedSlashApplications   from '../loaders/applications/slash.js';
import loadedUserApplications    from '../loaders/applications/user.js';
import loadedMessageApplications from '../loaders/applications/message.js';

let groupedEvents = {};

for (const _loadedEvent of loadedEvents) {

    const servicesFiles = loadedServices.filter((v) => v.events[_loadedEvent.name]);

    const applicationsFiles = loadedSlashApplications.concat(loadedUserApplications)
                                                     .concat(loadedMessageApplications)
                                                     .filter((v) => v.events[_loadedEvent.name]);

    const allFiles = servicesFiles.concat(applicationsFiles);

    // Omite el evento si no es neceserio
    if (!allFiles.length) continue;

    groupedEvents[_loadedEvent.name] = { 
        
        services:     servicesFiles, 
        applications: applicationsFiles,
        all:          allFiles
    };
};

export default groupedEvents;