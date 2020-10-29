const test = require('ava');
const Action = require('../../lib/classes/Action');
const Player = require('../../lib/classes/Player');

class MPlayer extends Player {
    constructor(id, Actions, name) {
        super(id, Actions);
        this.name = name;
    }
}

test('Checking new instance of Action.', (t) => {
    const Class = new Player();
    t.truthy(Class instanceof Player);

    t.is(Class.id, undefined);
    t.deepEqual(Class.Actions, []);
});

test('Checking default props on the child class.', (t) => {
    const Class = new MPlayer();
    t.truthy(Class instanceof Player);

    t.is(Class.id, undefined);
    t.deepEqual(Class.Actions, []);
    t.is(Class.name, undefined);
});

test('Checking props on the child class.', (t) => {
    const Class = new MPlayer(1, [new Action()], 'Player1');

    t.is(Class.id, 1);
    t.deepEqual(Class.Actions, [new Action()]);
    t.is(Class.name, 'Player1');
});
