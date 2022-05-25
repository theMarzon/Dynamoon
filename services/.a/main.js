export default {

    events: {

        ready: ({client, loaders}) => {

            const a = loaders.applications.slash.map((v) => v.schema);
            const b = loaders.applications.user.map((v) => v.schema);
            const c = loaders.applications.message.map((v) => v.schema);

            client.application.commands.set(a.concat(b).concat(c))
            .then(() => console.log('Indexed'));
        }
    }
};