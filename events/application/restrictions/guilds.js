export default ({ client, event, me, loadeds, groupeds, managers }) => {

    if (me.restrict.guilds.length
    &&  me.restrict.guilds.includes(event.user.id)) return false;

    return true;
};