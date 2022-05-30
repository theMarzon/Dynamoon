export default ({ client, event, me, loaders, groupers, managers }) => {
    
    if (!me.public
    &&   client.engine.mode === 'production') return false;
    
    return true;
};