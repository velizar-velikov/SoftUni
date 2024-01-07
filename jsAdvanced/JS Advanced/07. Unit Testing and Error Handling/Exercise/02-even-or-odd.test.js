import { assert } from 'chai';
import { isOddOrEven } from './02-even-or-odd.js';

describe('isOddOrEven test', () => {

    //Positive tests
    it('Should return "even" when string.length is even', () => {
        assert.equal(isOddOrEven('test'), 'even');
        assert.equal(isOddOrEven(''), 'even');
    })

    it('Should return "odd" when string.length is odd', () => {
        assert.equal(isOddOrEven('testo'), 'odd');
    })

    //Negative tests
    it('Should return undefined when initialized with a non-string', () => {
        assert.isUndefined(isOddOrEven(4));
        assert.isUndefined(isOddOrEven(true));
        assert.isUndefined(isOddOrEven([1, 2]));
        assert.isUndefined(isOddOrEven({ name: 'Test Testov' }));
        assert.isUndefined(isOddOrEven(undefined));
        assert.isUndefined(isOddOrEven(null));
        assert.isUndefined(isOddOrEven(() => 'This is a fake function'));
    })
})