export default ({ client, event, me, loaders, groupers, managers }) => {
    
    // Si la aplicacion es privada y el proyecto se ejecuta en modo produccion
    if (!me.public
    &&   client.engine.mode === 'production') return false;
    
    return true;
};