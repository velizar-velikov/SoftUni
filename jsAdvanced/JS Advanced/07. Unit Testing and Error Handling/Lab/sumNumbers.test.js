import { assert } from 'chai';
import { sum } from './sumNumbers.js';

describe('function sum test', () => {
    it('should return the sum of all elements', () => {
        assert.equal(sum([1, 2, 3, 4]), 10);
    });
    it('should return the sum of all elements', () => {
        assert.equal(sum(['1', '2', '3', '4']), 10);
    });
    it('should return the sum of all elements', () => {
        assert.equal(sum([]), 0);
    })
})