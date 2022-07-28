export default (botApplication: any, frameworkApplication: any) => {

    return botApplication.type                     === frameworkApplication.type
    &&     botApplication.name                     === frameworkApplication.name
    // &&     botApplication.nameLocalizations        === frameworkApplication.nameLocalizations
    &&     botApplication.description              === frameworkApplication.description
    // &&     botApplication.descriptionLocalizations === frameworkApplication.descriptionLocalizations
    // &&     botApplication.options                  === frameworkApplication.options
    &&     botApplication.dmPermission             === frameworkApplication.dmPermission
    &&     botApplication.defaultMemberPermissions === frameworkApplication.defaultMemberPermissions;
    // &&     botApplication.defaultBotPermissions    === frameworkApplication.defaultBotPermissions;
};
