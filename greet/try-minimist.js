// try-minimist.js
var parseArgv = require('minimist');
var args = parseArgv(process.argv.slice(0));
console.dir(args);