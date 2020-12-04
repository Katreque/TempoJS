// @flow

const { eventEmitter, GLOBAL_EVENTS } = require('../events.js');

// Use fg[VarName] pattern for requires used only for flow types.
const fgAction = require('./Action');
const fgPlayer = require('./Player');

class GameLoop {
    declare Players: Array<fgPlayer>;
    declare GameActions: Array<fgAction>;
    declare stopIteration: boolean;

    constructor(Players: Array<fgPlayer>, GameActions: Array<fgAction>) {
        this.Players = Players;
        this.GameActions = GameActions;
        this.stopIteration = false;
    }

    async runGameIteration() {
        this.stopIteration = false;
        const orderedActions = this.getActions(this.Players, this.GameActions);

        // Sort by Priority
        orderedActions.sort(this.sortAction);

        for (let i = 0; i < orderedActions.length; i++) {
            if (this.stopIteration) {
                break;
            }

            await orderedActions[i].run();
        }

        eventEmitter(GLOBAL_EVENTS.turnEnded);
    }

    stopGameIteration() {
        this.stopIteration = true;
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
