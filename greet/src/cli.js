import { parseArgv } from "minimist";
const args = parseArgv(process.argv);

import {greet} from "./index";

const {drunk} = args;
const name = args._[2];
greet(name, drunk);