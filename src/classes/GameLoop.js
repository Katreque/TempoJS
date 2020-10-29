// @flow

const { eventEmitter, GLOBAL_EVENTS } = require('../events.js');

const fgAction = require('./Action');
const fgPlayer = require('./Player');

class GameLoop {
    declare Players: Array<fgPlayer>;
    declare GameActions: Array<fgAction>;

    constructor(Players: Array<fgPlayer>, GameActions: Array<fgAction>) {
        this.Players = Players;
        this.GameActions = GameActions;
    }

    runGameIteration() {
        const orderedActions = this.getActions(this.Players, this.GameActions);

        // Sort by Priority
        orderedActions.sort(this.sortAction);

        orderedActions.forEach((A) => {
            A.run();
        });

        eventEmitter(GLOBAL_EVENTS.turnEnded);
    }

    getActions(Players: Array<fgPlayer>, GameActions: Array<fgAction>): Array<fgAction> {
        const orderedActions = [];

        // Get All Players Actions
        Players.forEach((P) => {
            P.Actions.forEach((A) => {
                orderedActions.push(A);
            });
        });

        // Get GameActions Actions
        GameActions.forEach((A) => {
            orderedActions.push(A);
        });

        return orderedActions;
    }

    sortAction(a: fgAction, b: fgAction): number {
        if (a.priority > b.priority) {
            return 1;
        }

        if (a.priority < b.priority) {
            return -1;
        }

        if (a.priority === b.priority) {
            if (a.subPriority > b.subPriority) {
                return 1;
            }

            if (a.subPriority < b.subPriority) {
                return -1;
            }
        }

        return 0;
    }
}

module.exports = GameLoop;
