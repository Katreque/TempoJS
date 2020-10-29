// @flow

const fgAction = require('./Action');

class Player {
    declare id: string | number;
    declare Actions: Array<fgAction>;

    constructor(id: string | number, Actions: Array<fgAction>) {
        this.id = id;
        this.Actions = Actions || [];
    }
}

module.exports = Player;
