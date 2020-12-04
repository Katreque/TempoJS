// @flow

const fgAction = require('./Action');
const { throwMissingParameters } = require('../errors');

class Player {
    declare id: string | number;
    declare Actions: Array<fgAction>;

    constructor(id: string | number, Actions: Array<fgAction>) {
        this.id = id;
        this.Actions = Actions || [];
    }

    addAction(Actions: Array<fgAction>) {
        if (!Actions) {
            throw new Error(throwMissingParameters('Actions'));
        }

        if (!(Actions instanceof Array)) {
            throw new Error(`The parameter Actions must be an Array.`);
        }

        Actions.forEach((Action) => {
            this.Actions.push(Action);
        });
    }

    removeAction(id: any) {
        if (!id) {
            throw new Error(throwMissingParameters('id'));
        }

        this.Actions.forEach((Action, i) => {
            if (Action.id === id) {
                this.Actions.splice(i, 1);
            }
        });
    }

    removeAllActions() {
        this.Actions = [];
    }
}

module.exports = Player;
