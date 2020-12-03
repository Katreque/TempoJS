// @flow

class Action {
    declare id: string | number;
    declare priority: number;
    declare subPriority: number;

    constructor(id: string | number, priority: number, subPriority: number) {
        this.id = id;
        this.priority = priority || 1;
        this.subPriority = subPriority || 1;
    }

    run() {
        throw new Error('Abstract Method called.');
    }
}

module.exports = Action;
