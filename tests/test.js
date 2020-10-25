const test = require('ava');
const { Player } = require('../lib');

test('New Player Instance', (t) => {
    const P = new Player();
    t.deepEqual(P, new Player());
    t.is(P.name, undefined);
});

test('New Player Props', async (t) => {
    const P = new Player("EOQ?!");
    t.is(P.name, "EOQ?!");
});
