"use strict";

var _minimist = require("minimist");

var _minimist2 = _interopRequireDefault(_minimist);

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = (0, _minimist2.default)(process.argv);

var drunk = args.drunk;

var name = args._[2];
(0, _index2.default)(name, drunk);