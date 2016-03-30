import {greet} from '../.';
import {assert} from 'chai';

describe('greet', function(){
    it('greets a person by name', ()=>{
        assert.equal(greet('test'), 'hello, test');
    });
    it('greets a person flirtatiously if drunk', ()=>{
        assert.equal(greet('test', 'drunk'), 'hello test, you look sexy today');
    });
});