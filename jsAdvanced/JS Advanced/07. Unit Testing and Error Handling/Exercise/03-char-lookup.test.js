import { assert } from "chai";
import { lookupChar } from "./03-char-lookup.js";

describe('lookupChar test', () => {

    //Positive test
    it('Should return char at index from string', () => {
        assert.equal(lookupChar('Test', 0), 'T');
        assert.equal(lookupChar('Test', 3), 't');
    });

    //Tests for arguments out of range
    it('Should return Incorrect index when string.length <= index', () => {
        assert.equal(lookupChar('Test', 4), 'Incorrect index');
        assert.equal(lookupChar('Test', 10), 'Incorrect index');
    });

    it('Should return Incorrect index when index < 0', () => {
        assert.equal(lookupChar('Test', -1), 'Incorrect index');
    });

    //Tests for incoorect argument data types
    it('Should return undefined when string is not of type string', () => {
        assert.isUndefined(lookupChar(() => 'This is an example function', 1));
        assert.isUndefined(lookupChar({}, 1));
        assert.isUndefined(lookupChar([], 1));
        assert.isUndefined(lookupChar(null, 1));
        assert.isUndefined(lookupChar(undefined, 1));
        assert.isUndefined(lookupChar(false, 1));
        assert.isUndefined(lookupChar(5, 1));
    });

    it('Should return undefined when index is not an integer', () => {
        assert.isUndefined(lookupChar('Test Testov', () => 'This is an example function'));
        assert.isUndefined(lookupChar('Test Testov', {}));
        assert.isUndefined(lookupChar('Test Testov', []));
        assert.isUndefined(lookupChar('Test Testov', null));
        assert.isUndefined(lookupChar('Test Testov', undefined));
        assert.isUndefined(lookupChar('Test Testov', false));
        assert.isUndefined(lookupChar('Test Testov', '22'));
        assert.isUndefined(lookupChar('Test Testov', 2.2));
    });
})