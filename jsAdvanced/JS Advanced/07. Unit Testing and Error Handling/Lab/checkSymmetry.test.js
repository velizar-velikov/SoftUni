import { assert } from 'chai';
import { isSymmetric } from './checkSymmetry.js';

describe('function isSymmetric test', () => {

    it('should return false when initialized with an object', () => {
        assert.equal(isSymmetric({}), false);
    });

    it('should return false when initialized with a string', () => {
        assert.equal(isSymmetric('testing string'), false);
    });

    it('should return false when initialized with a number', () => {
        assert.equal(isSymmetric(5), false);
    });

    it('should return false when initialized with a non-symmetric array', () => {
        assert.equal(isSymmetric([1, 2, 3, 4]), false);
    });

    it('should return true when initialized with a symmetric array', () => {
        assert.equal(isSymmetric([1, 2, 3, 2, 1]), true);
        assert.equal(isSymmetric(['1', '2', '3', '2', '1']), true);
        assert.equal(isSymmetric([1, 2, 3, 3, 2, 1]), true);
    });

    it('should return true when initialized with an empty array', () => {
        assert.equal(isSymmetric([]), true);
    })

    it('should return true when initialized with a symmetric array of arrays', () => {
        assert.equal(isSymmetric([[1], [1, 3], [1]]), true);
    })

    it('should return true when initialized with a symmetrical mixed type', () => {
        assert.equal(isSymmetric([true, [1, 2, 3], true]), true);
    })

    it('should return false when initialized with a non-symmetrical mixed type', () => {
        assert.equal(isSymmetric([true, [1, 2, 3], 'test', true]), false);
    })

    it('should return false when initialized with a non-symmetrical mixed type', () => {
        assert.equal(isSymmetric(['6', 6]), false);
    })
})