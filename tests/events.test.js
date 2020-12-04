const test = require('ava');
const EventEmitter = require('events');
const { eventEmitter, eventListener, GLOBAL_EVENTS } = require('../lib/events.js');

const ee = new EventEmitter();

test('eventEmitter must be a function.', (t) => {
    t.is(typeof eventEmitter, typeof function () {});
});

test('eventEmitter only with id should work.', (t) => {
    const r = eventEmitter('id');
    t.is(r, ee.emit('id'));
});

test('eventEmitter with id and arg should work.', (t) => {
    const r = eventEmitter('id', 'pog');
    t.is(r, ee.emit('id', 'pog'));
});

test('eventEmitter args should accept any.', (t) => {
    const r = eventEmitter('id', { a: 'a' });
    t.is(r, ee.emit('id', { a: 'a' }));

    const s = eventEmitter('id', 123);
    t.is(s, ee.emit('id', 123));
});

test('eventEmitter with no id should throw.', (t) => {
    const error = t.throws(() => {
        eventEmitter();
    });

    t.is(error.message, 'A required parameter (id) is missing.');
});

test('eventListener must be a function.', (t) => {
    t.is(typeof eventListener, typeof function () {});
});

test('eventListener should work.', (t) => {
    const cb = () => {
        console.log('a');
    };

    const r = eventListener('id', cb);
    t.deepEqual(r, ee.on('id', cb));
});

test('eventListener with no id should throw.', (t) => {
    const error = t.throws(() => {
        eventListener();
    });

    t.is(error.message, 'A required parameter (id) is missing.');
});

test('eventListener with no cb should throw.', (t) => {
    const error = t.throws(() => {
        eventListener('id');
    });

    t.is(error.message, 'A required parameter (cb) is missing.');
});

test('GLOBAL_EVENTS must be a object.', (t) => {
    t.is(typeof GLOBAL_EVENTS, typeof {});
});

test('GLOBAL_EVENTS consts should be defined.', (t) => {
    t.is(GLOBAL_EVENTS.turnEnded, 'TURN_ENDED');
});
