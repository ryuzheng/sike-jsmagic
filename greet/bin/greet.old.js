#!/usr/bin/env node
var parseArgv = require("minimist");
var args = parseArgv(process.argv);
if(args.drunk) {
    console.log("hello " + args._[2] + ", you look sexy today");
  } else {
    console.log("hello, " + args._[2]);
  }