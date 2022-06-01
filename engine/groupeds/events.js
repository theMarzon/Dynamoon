import loadedEvents              from '../loadeds/events.js';
import loadedServices            from '../loadeds/services.js';
import loadedSlashApplications   from '../loadeds/applications/slash.js';
import loadedUserApplications    from '../loadeds/applications/user.js';
import loadedMessageApplications from '../loadeds/applications/message.js';

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