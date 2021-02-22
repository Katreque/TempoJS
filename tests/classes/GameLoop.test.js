const test = require('ava');
const sinon = require('sinon');

const { eventEmitter, GLOBAL_EVENTS } = require('../../lib/events');
const Action = require('../../lib/classes/Action');
const Player = require('../../lib/classes/Player');
const GameLoop = require('../../lib/classes/GameLoop');

const sandbox = sinon.createSandbox();

class MyPlayer extends Player {
    constructor(name, priority, subPriority) {
        super(name, priority, subPriority);
    }
}

class MyAction extends Action {
    constructor(name, priority, subPriority) {
        super(name, priority, subPriority);
    }

    run() {
        return 'A';
    }
}

const ma0 = new MyAction('1', 5, 1);
const ma1 = new MyAction('2', 3, 1);
const ma2 = new MyAction('3', 1, 1);
const ma3 = new MyAction('4', 4, 4);
const ma4 = new MyAction('5', 4, 1);
const ma5 = new MyAction('6', 2, 1);
const ma6 = new MyAction('7', 6, 1);
const ma7 = new MyAction('8', 6, 1);
const ma8 = new MyAction('5', 4, 3);

const Player1 = new MyPlayer(1, [ma0, ma1]);
const Player2 = new MyPlayer(2, [ma2, ma3]);

const Game = new GameLoop([Player1, Player2], [ma0, ma1, ma2, ma3, ma4, ma5, ma6, ma7, ma8]);

test('Checking new instance of Action.', (t) => {
    t.truthy(Game instanceof GameLoop);

    t.deepEqual(Game.Players, [Player1, Player2]);
    t.deepEqual(Game.GameActions, [ma0, ma1, ma2, ma3, ma4, ma5, ma6, ma7, ma8]);
    t.is(Game.stopIteration, false);
    t.is(Game.turns, 0);
});

test('stopGameIteration should be a function.', (t) => {
    t.is(typeof Game.stopGameIteration, typeof function () {});
});

test('stopGameIteration should work.', (t) => {
    Game.stopGameIteration();
    t.is(Game.stopIteration, true);
});

test('sortAction should be a function.', (t) => {
    t.is(typeof Game.sortAction, typeof function () {});
});

test('sortAction should sort by ascending priority and subpriority.', (t) => {
    const actionsToSort = [ma0, ma1, ma2, ma3, ma4, ma5, ma6, ma7, ma8];
    actionsToSort.sort(Game.sortAction);

    t.deepEqual(actionsToSort, [ma2, ma5, ma1, ma4, ma8, ma3, ma0, ma6, ma7]);
});

test('getActions should be a function.', (t) => {
    t.is(typeof Game.getActions, typeof function () {});
});

test('getActions should get all actions from Players and Game Actions.', (t) => {
    const allActions = Game.getActions([Player1, Player2], [ma4, ma5]);

    t.deepEqual(allActions, [ma0, ma1, ma2, ma3, ma4, ma5]);
});

test('runGameIteration should be a function.', (t) => {
    t.is(typeof Game.runGameIteration, typeof function () {});
});

//Still need adjustments on Spys.
test('runGameIteration should work.', async (t) => {
    const Game2 = new GameLoop([Player1, Player2], [ma0, ma1]);

    //Spys
    const gA = sinon.spy(Game2, 'getActions');
    const sA = sinon.spy(Game2, 'sortAction');
    const GA1 = sinon.spy(Game2.GameActions[0], 'run');
    const GA2 = sinon.spy(Game2.GameActions[1], 'run');
    const eE = sinon.spy(eventEmitter);

    await Game2.runGameIteration();

    t.true(gA.calledOnce);
    t.is(Game2.turns, 1);

    //t.true(sA.calledOnce);
    //t.true(GA1.calledOnce);
    //t.true(GA2.calledOnce);
    //t.true(eE.calledOnce);
});

//Still need adjustments.
test('runGameIteration should stop once stopGameIteration is called.', (t) => {
    t.pass();
});
