import { assert } from 'chai';
import { rgbToHexColor } from './rgb-hex.js';

describe('function rgbToHexColor test', () => {

    it('should return hex value from rgb', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
    });

    it('should return undefined when initialized with a non-number', () => {
        assert.equal(rgbToHexColor('4', 1, 2), undefined);
        assert.equal(rgbToHexColor([], 1, 2), undefined);
        assert.equal(rgbToHexColor(1, '4', 2), undefined);
        assert.equal(rgbToHexColor(1, [], 2), undefined);
        assert.equal(rgbToHexColor(1, 2, '4'), undefined);
        assert.equal(rgbToHexColor(1, 2, []), undefined);
        assert.equal(rgbToHexColor([], true, []), undefined);
        assert.equal(rgbToHexColor(false, null, { name: 'Test Testov' }), undefined);
        assert.equal(rgbToHexColor(false, null, undefined), undefined);
        assert.equal(rgbToHexColor(() => 5, () => 5, () => 5), undefined);
    });

    it('should return undefined when initialized with a negative number', () => {
        assert.equal(rgbToHexColor(-3, 1, 2), undefined);
        assert.equal(rgbToHexColor(1, -3, 2), undefined);
        assert.equal(rgbToHexColor(1, 2, -3), undefined);
        assert.equal(rgbToHexColor(-1, -2, -3), undefined);
    });

    it('should return undefined when initialized with a number > 255', () => {
        assert.equal(rgbToHexColor(300, 1, 2), undefined);
        assert.equal(rgbToHexColor(1, 300, 2), undefined);
        assert.equal(rgbToHexColor(1, 2, 300), undefined);
    })

    it('should return undefined when initialized with a floating point number', () => {
        assert.equal(rgbToHexColor(1.3, 5.6, 2.2), undefined);
    })

    it('should return undefined when initialized with less than 3 parameters', () => {
        assert.equal(rgbToHexColor(1, 2), undefined);
    })

})