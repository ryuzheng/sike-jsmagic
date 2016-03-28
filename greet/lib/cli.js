"use strict";

var _minimist = require("minimist");

var _index = require("./index");

var args = (0, _minimist.parseArgv)(process.argv);

var drunk = args.drunk;

var name = args._[2];
(0, _index.greet)(name, drunk);