import { ServiceOptions } from '../../framework/types/Service.js';
import { Boot           } from '../../events/boot/types/Options.js';

export default <Omit<ServiceOptions, 'name'>> {

    events: {

        boot: ({}: Boot) => {

            // Captura los errores que se generen
            process.on('unhandledRejection', console.log);
        }
    }
};
