const test = require('ava');
const { throwMissingParameters } = require('../lib/errors.js');

test('throwMissingParameters must be a function.', (t) => {
    t.is(typeof throwMissingParameters, typeof function () {});
});

test('throwMissingParameters with no param should throw.', (t) => {
    const error = t.throws(() => {
        throwMissingParameters();
    });

    t.is(error.message, 'The parameter which is missing, is missing.');
});

test('throwMissingParameters should work.', (t) => {
    const r = throwMissingParameters('id');
    t.is(r, 'A required parameter (id) is missing.');

    const r1 = throwMissingParameters('LUL');
    t.is(r1, 'A required parameter (LUL) is missing.');

    const r2 = throwMissingParameters(1);
    t.is(r2, 'A required parameter (1) is missing.');
});
