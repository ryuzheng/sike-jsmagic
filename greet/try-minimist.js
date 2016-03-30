// try-minimist.js
var parseArgv = require('minimist');
var args = parseArgv(process.argv);
console.dir(args);