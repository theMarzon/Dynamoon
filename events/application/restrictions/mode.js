export default ({ client, event, me, loadeds, groupeds, managers }) => {
    
    if (!me.public
    &&   client.engine.mode === 'production') return false;
    
    return true;
};