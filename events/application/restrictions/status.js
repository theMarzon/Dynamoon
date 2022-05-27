export default ({ client, event, me, loaders, groupers, managers }) => {
    
    // Si la aplicacion esta en desarrollo mientras el proyecto se ejecuta en modo produccion
    if (me.developing
    &&  client.engine.mode === 'production') return false;

    return true;
};