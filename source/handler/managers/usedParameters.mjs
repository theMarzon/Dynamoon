// Espacios de trabajo
const findedWorkspace = process.argv.findIndex((value) => value === '--workspace') + 1;

let workspaceParameter = (findedWorkspace) ? process.argv.at(findedWorkspace) : 'none';

workspaceParameter ??= 'none';

export default { workspace: workspaceParameter };
