// @flow

function throwMissingParameters(param: string): function {
    if (!param) {
        throw new Error(`The parameter which is missing, is missing.`);
    }

    return `A required parameter (${param}) is missing.`;
}

module.exports = {
    throwMissingParameters
};
