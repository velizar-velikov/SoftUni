import { assert } from "chai";
import { mathEnforcer } from "./04-math-enforcer.js";

describe('mathEnforcer object test', () => {

    describe('addFive', () => {

        //Positive tests
        it('Should return num + 5 with a positive num', () => {
            assert.equal(mathEnforcer.addFive(10), 15);
        });

        it('Should return num + 5 with a negative num', () => {
            assert.equal(mathEnforcer.addFive(-10), -5);
        });

        it('Should return num + 5 with a floating point num', () => {
            assert.closeTo(mathEnforcer.addFive(10.5), 15.5, 0.01);
        });

        //Negative tests
        it('Should return undefined when initialized with a non-number', () => {
            assert.isUndefined(mathEnforcer.addFive('10'));
            assert.isUndefined(mathEnforcer.addFive(true));
            assert.isUndefined(mathEnforcer.addFive(undefined));
            assert.isUndefined(mathEnforcer.addFive(null));
            assert.isUndefined(mathEnforcer.addFive([]));
            assert.isUndefined(mathEnforcer.addFive({}));
            assert.isUndefined(mathEnforcer.addFive((a) => a * 2));
        });
    })

    describe('subtractTen', () => {

        //Positive tests
        it('Should return num - 10 with a positive num', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0);
        });

        it('Should return num - 10 with a negative num', () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        });

        it('Should return num - 10 with a floating point num', () => {
            assert.closeTo(mathEnforcer.subtractTen(20.5), 10.5, 0.01);
        });

        //Negative tests
        it('Should return undefined when initialized with a non-number', () => {
            assert.isUndefined(mathEnforcer.subtractTen('10'));
            assert.isUndefined(mathEnforcer.subtractTen(true));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
            assert.isUndefined(mathEnforcer.subtractTen(null));
            assert.isUndefined(mathEnforcer.subtractTen([]));
            assert.isUndefined(mathEnforcer.subtractTen({}));
            assert.isUndefined(mathEnforcer.subtractTen((a) => a * 2));
        });
    })
    describe('sum', () => {

        //Positive tests
        it('Should return num1 + num2 with positive nums', () => {
            assert.equal(mathEnforcer.sum(10, 20), 30);
        });

        it('Should return num1 + num2 with negative nums', () => {
            assert.equal(mathEnforcer.sum(-10, -20), -30);
        });

        it('Should return num1 + num2 with floating point nums', () => {
            assert.closeTo(mathEnforcer.sum(10.5, 20.5), 31, 0.01);
        });

        //Negative tests
        it('Should return undefined when initialized with a non-number and a number', () => {
            assert.isUndefined(mathEnforcer.sum('10', 10));
            assert.isUndefined(mathEnforcer.sum(true, 10));
            assert.isUndefined(mathEnforcer.sum(undefined, 10));
            assert.isUndefined(mathEnforcer.sum(null, 10));
            assert.isUndefined(mathEnforcer.sum([], 10));
            assert.isUndefined(mathEnforcer.sum({}, 10));
            assert.isUndefined(mathEnforcer.sum((a) => a * 2, 10));
        });

        it('Should return undefined when initialized with a number and a non-number', () => {
            assert.isUndefined(mathEnforcer.sum(10, '10'));
            assert.isUndefined(mathEnforcer.sum(10, true));
            assert.isUndefined(mathEnforcer.sum(10, undefined));
            assert.isUndefined(mathEnforcer.sum(10, null));
            assert.isUndefined(mathEnforcer.sum(10, []));
            assert.isUndefined(mathEnforcer.sum(10, {}));
            assert.isUndefined(mathEnforcer.sum(10, (a) => a * 2));
        });

        it('Should return undefined when initialized with two non-numbers', () => {
            assert.isUndefined(mathEnforcer.sum('10', '10'));
            assert.isUndefined(mathEnforcer.sum(true, true));
            assert.isUndefined(mathEnforcer.sum(undefined, undefined));
            assert.isUndefined(mathEnforcer.sum(null, null));
            assert.isUndefined(mathEnforcer.sum([], []));
            assert.isUndefined(mathEnforcer.sum({}, {}));
            assert.isUndefined(mathEnforcer.sum((a) => a * 2, (a) => a * 2));
        });
    })
})