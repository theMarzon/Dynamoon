export default (botApplication: any, frameworkApplication: any) => {

    return botApplication.type                     === frameworkApplication.type
    &&     botApplication.name                     === frameworkApplication.name
    // &&     botApplication.nameLocalizations        === frameworkApplication.nameLocalizations
    &&     botApplication.dmPermission             === frameworkApplication.dmPermission
    &&     botApplication.defaultMemberPermissions === frameworkApplication.defaultMemberPermissions;
    // &&     botApplication.defaultBotPermissions    === frameworkApplication.defaultBotPermissions;
};
