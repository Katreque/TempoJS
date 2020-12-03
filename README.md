<div align="center">
<img src="./images/TempoJSLogo.png" alt="drawing" width="200"/><br />

# JavaScript Game Engine

TempoJS is a JavaScript Game Engine for turn-based games on both Client or Server side.

[![Downloads NPM](https://img.shields.io/npm/dw/@katreque/tempojs?style=flat-square)](https://www.npmjs.com/package/@katreque/tempojs)
[![Coverage Status](https://img.shields.io/coveralls/github/Katreque/TempoJS?color=limon&style=flat-square)](https://coveralls.io/github/Katreque/TempoJS?branch=master)
[![Discord](https://img.shields.io/discord/681928564592869392?label=Discord&style=flat-square)](https://discord.gg/SD3FtBy)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg?style=flat-square)](https://opensource.org/licenses/BSD-3-Clause)

</div>

## Getting Started

First, install the package on your project via NPM.

```
npm i @katreque/tempojs --save
```

Here's a quick example of what to use in order to develop your game. Further documentation will added soon. :)

```javascript
const { Action, GameLoop, Player, eventListener, GLOBAL_EVENTS } = require('tempojs');

class MyPlayer extends Player {
    constructor(id, Actions, name) {
        super(id, Actions);
        this.name = name;
    }
}

class MyAction extends Action {
    constructor(name, priority, subPriority) {
        super(name, priority, subPriority);
    }

    //The logic behind this Action.
    run() {
        console.log(
            `Name: ${this.name}, Priority: ${this.priority}, SubPriority: ${this.subPriority}`
        );
    }
}

const MA1 = new MyAction('Action 1', 1, 1);
const MA2 = new MyAction('Action 2', 1, 2);

const Player1 = new MyPlayer(1, [MA1], 'Pog Player');
const Player2 = new MyPlayer(2, [MA2], 'Noob Player');

//New Game Instance
const Game = new GameLoop([Player1, Player2], []);

//Global Events Listeners
eventListener(GLOBAL_EVENTS.turnEnded, () => {
    console.log('End of turn.');
});

//Run one turn of the game
Game.runGameIteration();

/*
Output:

Name: Action 1, Priority: 1, SubPriority: 1
Name: Action 2, Priority: 1, SubPriority: 2
End of turn.
*/
```

## Documentation

In The Future. :)

## Contributing

### Code of Conduct

Our Code of Conduct is adapted from the Contributor Covenant with some aditions. Make sure to [read it](https://github.com/Katreque/TempoJS/blob/master/CODE_OF_CONDUCT.md) in order to be part of our Community.

### Contributing Guide

We appreciate any kind of contribution! :3 Read our [contributing guide](https://github.com/Katreque/TempoJS/blob/master/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to TempoJS.

## About

TempoJS was created by Renan "Katreque" Verissimo as a project with Terê AWS User Group. If you have any interest in learning about the ideia, share thoughts or want to join the team, feel free to join our [Discord](https://discord.gg/SD3FtBy).

## License

TempoJS is [BSD 3-Clause Licensed](https://github.com/Katreque/TempoJS/blob/master/LICENSE).
