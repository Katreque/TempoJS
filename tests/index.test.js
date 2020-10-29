const test = require('ava');
const { Action, GameLoop, Player, eventEmitter, eventListener, GLOBAL_EVENTS } = require('../lib');

test('Action must be defined.', (t) => {
    t.not(Action, undefined);
});

test('GameLoop must be defined.', (t) => {
    t.not(GameLoop, undefined);
});

test('Player must be defined.', (t) => {
    t.not(Player, undefined);
});

test('eventEmitter must be a function.', (t) => {
    t.is(typeof eventEmitter, typeof function () {});
});

test('eventListener must be a function.', (t) => {
    t.is(typeof eventListener, typeof function () {});
});

test('GLOBAL_EVENTS must be a object.', (t) => {
    t.is(typeof GLOBAL_EVENTS, typeof {});
});
