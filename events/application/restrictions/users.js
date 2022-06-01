export default ({ client, event, me, loadeds, groupeds, managers }) => {

    if (me.restrict.users.length
    &&  me.restrict.users.includes(event.user.id)) return false;

    return true;
};