export default (client, loadedApplications: any) => {

    client.application.commands
        .set(loadedApplications)
        .then(() => console.log('Applications indexed'));
};
