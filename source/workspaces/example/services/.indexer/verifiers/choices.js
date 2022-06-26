module.exports = function (fileChoice, botChoice) {

    if (fileChoice.name              !== botChoice.name
    ||  fileChoice.value             !== botChoice.value
    ||  fileChoice.nameLocalizations !== botChoice.nameLocalizations) return false;

    return true;
};