"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greet = greet;
function greet(name, drunk) {
  if (drunk) {
    return "hello " + name + ", you look sexy today";
  } else {
    return "hello, " + name;
  }
}