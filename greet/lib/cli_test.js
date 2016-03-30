'use strict';

var _ = require('../.');

var _chai = require('chai');

describe('greet', function () {
    it('greets a person by name', function () {
        _chai.assert.equal((0, _.greet)('test'), 'hello, test');
    });
    it('greets a person flirtatiously if drunk', function () {
        _chai.assert.equal((0, _.greet)('test', 'drunk'), 'hello test, you look sexy today');
    });
});