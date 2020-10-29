// @flow

const EventEmitter = require('events');
const { throwMissingParameters } = require('./errors');

const ee: any = new EventEmitter();

const GLOBAL_EVENTS = {
    turnEnded: 'TURN_ENDED'
};

function eventEmitter(id: string): any {
    if (!id) {
        throw new Error(throwMissingParameters('id'));
    }

    return ee.emit(id);
}

function eventListener(id: string, cb: function): any {
    if (!id) {
        throw new Error(throwMissingParameters('id'));
    }

    if (!cb) {
        throw new Error(throwMissingParameters('cb'));
    }

    return ee.on(id, cb);
}

module.exports = {
    eventEmitter,
    eventListener,
    GLOBAL_EVENTS
};
