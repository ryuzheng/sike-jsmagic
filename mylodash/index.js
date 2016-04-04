"use strict";

//index.js
function once(func) {
    var firstResult = void 0,
        a = 0;
    return function () {
        if (a > 0) {
            return firstResult;
        } else {
            a += 1;
            firstResult = func();
            return firstResult;
        }
    };
}

function memoize(func) {
    var firstResult = void 0,
        b = 0;
    if (b == 0) {
        b += 1;
        firstResult = func();
        return firstResult;
    } else {
        return firstResult;
    }
}

var _ = {
    once: once,
    memoize: memoize
};

module.exports = _;

