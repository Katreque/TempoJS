const test = require('ava');
const Action = require('../../lib/classes/Action');

class MAction extends Action {
    constructor(name, priority, subPriority, a) {
        super(name, priority, subPriority);
        this.a = a;
    }
}

class NAction extends Action {
    constructor(name, priority, subPriority) {
        super(name, priority, subPriority);
    }

    run() {
        return 'A';
    }
}

test('Checking new instance of Action.', (t) => {
    const Class = new Action();
    t.true(Class instanceof Action);

    t.is(Class.name, undefined);
    t.is(Class.priority, 1);
    t.is(Class.subPriority, 1);

    const error = t.throws(() => {
        Class.run();
    });

    t.is(error.message, 'Abstract Method called.');
});

test('Checking default props on the child class.', (t) => {
    const Class = new MAction();
    t.truthy(Class instanceof Action);

    t.is(Class.name, undefined);
    t.is(Class.priority, 1);
    t.is(Class.subPriority, 1);

    const error = t.throws(() => {
        Class.run();
    });

    t.is(error.message, 'Abstract Method called.');
});

test('Checking props on the child class.', (t) => {
    const Class = new MAction('Action', 2, 3, 'AnyThing');

    t.is(Class.name, 'Action');
    t.is(Class.priority, 2);
    t.is(Class.subPriority, 3);
    t.is(Class.a, 'AnyThing');

    const error = t.throws(() => {
        Class.run();
    });

    t.is(error.message, 'Abstract Method called.');
});

test('Checking the override Run function of the child class.', (t) => {
    const Class = new NAction('Action', 2, 3);
    t.is(Class.run(), 'A');
});
