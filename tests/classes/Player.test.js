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

test('addAction should work.', (t) => {
    const Class = new MPlayer(1, [], 'Player1');

    Class.addAction([new Action(1), new Action(2)]);
    t.deepEqual(Class.Actions, [new Action(1), new Action(2)]);

    Class.addAction([new Action(3)]);
    t.deepEqual(Class.Actions, [new Action(1), new Action(2), new Action(3)]);
});

test('addAction without Actions should throw.', (t) => {
    const Class = new MPlayer(1, [], 'Player1');
    const error = t.throws(() => {
        Class.addAction();
    });

    t.is(error.message, 'A required parameter (Actions) is missing.');
});

test('addAction with Actions not being an Array should throw.', (t) => {
    const Class = new MPlayer(1, [], 'Player1');
    const error = t.throws(() => {
        Class.addAction('notArray');
    });

    t.is(error.message, 'The parameter Actions must be an Array.');
});

test('removeAction should work.', (t) => {
    const Class = new MPlayer(1, [new Action(1), new Action(2), new Action(3)], 'Player1');

    Class.removeAction(1);
    t.deepEqual(Class.Actions, [new Action(2), new Action(3)]);

    Class.removeAction(3);
    t.deepEqual(Class.Actions, [new Action(2)]);
});

test('removeAction without id should throw', (t) => {
    const Class = new MPlayer(1, [new Action(1)], 'Player1');
    const error = t.throws(() => {
        Class.removeAction();
    });

    t.is(error.message, 'A required parameter (id) is missing.');
});

test('removeAllActions should work.', (t) => {
    const Class = new MPlayer(1, [new Action(1), new Action(2), new Action(3)], 'Player1');

    Class.removeAllActions();
    t.deepEqual(Class.Actions, []);
});
