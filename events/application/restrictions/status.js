export default ({ client, event, me, loaders, groupers, managers }) => {
    
    // Si la aplicacion es inestable o el proyecto se ejecuta en modo produccion
    if (!me.stable
    &&   client.engine.mode === 'production') return false;

    return true;
};