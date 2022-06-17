const developmentParameter = process.argv.includes('--development') || process.argv.includes('-D');
const productionParameter  = process.argv.includes('--production')  || process.argv.includes('-P');

export default {

    environment: (developmentParameter) ? 'development'
               : (productionParameter)  ? 'production'
               :                          'standard'
};
