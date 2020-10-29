// @flow

class Action {
    declare name: string;

    declare priority: number;

    declare subPriority: number;

    constructor(name: string, priority: number, subPriority: number) {
        this.name = name;
        this.priority = priority || 1;
        this.subPriority = subPriority || 1;
    }

    run() {
        throw new Error('Abstract Method called.');
    }
}

module.exports = Action;
