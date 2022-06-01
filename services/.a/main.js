export default {

    events: {

        ready: ({client, loadeds}) => {

            const a = loadeds.applications.slash.map((v) => v.schema);
            const b = loadeds.applications.user.map((v) => v.schema);
            const c = loadeds.applications.message.map((v) => v.schema);

            client.application.commands.set(a.concat(b).concat(c))
            .then(() => console.log('Indexed'));
        }
    }
};