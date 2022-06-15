export default (...values) => {

    for (const _value of values) {

        if (process.argv.includes(_value)) return true;
    };

    return false;
};
