import path from 'node:path';

export default async ({ client, event, me, loaded, grouped, directories }) => {

    // Si la caracteristica no fue activada
    if (!me.redirections) return;

    const subcommand      = event.options.getSubcommand();
    const subcommandGroup = event.options.getSubcommandGroup();

    // Si no se esta utilizando un subcomando
    if (!subcommand) return;

    const subcommandsDirectory = path.join(directories.slashApplications, me.name.default, 'subcommands');

    const filePath = (subcommandGroup) ? path.join(subcommandsDirectory, subcommandGroup, subcommand, 'subcommand.mjs')
                                       : path.join(subcommandsDirectory, subcommand, 'subcommand.mjs');

    let fileContent = await import(`file://${filePath}`);

    fileContent = fileContent.default;

    for (const _fileEvent of fileContent) {

        _fileEvent({ client, event, me, loaded, grouped, directories });
    };
};
