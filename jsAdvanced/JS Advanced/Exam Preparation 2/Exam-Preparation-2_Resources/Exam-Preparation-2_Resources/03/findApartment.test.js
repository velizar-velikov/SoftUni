import { assert } from 'chai';
import { findNewApartment } from './findApartment.js';

describe('findNewApartment', function () {
    describe('isGoodLocation', function () {

        //correct input tests
        it('return unsuitable location if not of desired ones', () => {
            assert.equal(findNewApartment.isGoodLocation('Razgrad', true), 'This location is not suitable for you.');
        });

        it('return not near public transport if second param is false', () => {
            assert.equal(findNewApartment.isGoodLocation('Plovdiv', false), 'There is no public transport in area.');
        });

        it('returns go on home tour if both params are of desired type and value', () => {
            assert.equal(findNewApartment.isGoodLocation('Plovdiv', true), 'You can go on home tour!');
        });

        //incorrect input tests
        it('throws error for incorrect inputs', () => {
            assert.throws(() => { findNewApartment.isGoodLocation(5, 'pesho') }, Error, 'Invalid input!')
            assert.throws(() => { findNewApartment.isGoodLocation('pesho', 5) }, Error, 'Invalid input!')
            assert.throws(() => { findNewApartment.isGoodLocation(5, true) }, Error, 'Invalid input!')
        });
    })
    describe('isLargeEnough', function () {

        it('returns apartments bigger than minimal area', () => {
            assert.equal(findNewApartment.isLargeEnough([10, 20, 30], 20), '20, 30');
            assert.equal(findNewApartment.isLargeEnough([10, 20, 30], 10), '10, 20, 30');
        });

        it('returns empty string if minimal area is bigger than all apartments', () => {
            assert.equal(findNewApartment.isLargeEnough([10, 20, 30], 40), '');
        });

        // incorrect input tests
        it('throws error for incorrect inputs', () => {
            assert.throws(() => { findNewApartment.isLargeEnough([], 5) }, Error, 'Invalid input!')
            assert.throws(() => { findNewApartment.isLargeEnough([10, 20], '4') }, Error, 'Invalid input!')
            assert.throws(() => { findNewApartment.isLargeEnough(true, 5) }, Error, 'Invalid input!')
            assert.throws(() => { findNewApartment.isLargeEnough(true, {}) }, Error, 'Invalid input!')
        });

    })
    describe('isItAffordable', function () {

        it('returns cannot afford apartment if price > budget', () => {
            assert.equal(findNewApartment.isItAffordable(20, 10), "You don't have enough money for this house!");
        });

        it('returns can afford apartment if price <= budget', () => {
            assert.equal(findNewApartment.isItAffordable(20, 30), "You can afford this home!");
        });

        //incorrect input tests
        it('throws error for incorrect inputs', () => {
            assert.throws(() => { findNewApartment.isItAffordable('2', '2') }, Error, 'Invalid input!')
            assert.throws(() => { findNewApartment.isItAffordable('2', 2) }, Error, 'Invalid input!')
            assert.throws(() => { findNewApartment.isItAffordable(5, '2') }, Error, 'Invalid input!')
        });

        it('throws error if any param is <= 0', () => {
            assert.throws(() => { findNewApartment.isItAffordable(0, 0) }, Error, 'Invalid input!')
            assert.throws(() => { findNewApartment.isItAffordable(-1, -1) }, Error, 'Invalid input!')
            assert.throws(() => { findNewApartment.isItAffordable(0, 5) }, Error, 'Invalid input!')
            assert.throws(() => { findNewApartment.isItAffordable(5, 0) }, Error, 'Invalid input!')
        })
    })
})