import { assert } from "chai";
import { planYourTrip } from './planYourTrip.js';

describe('planYourTrip', () => {

    describe('choosingDestination', () => {
        //valid input tests
        it('year != 2024 throws Error', () => {
            assert.throws(() => { planYourTrip.choosingDestination('Ski Resort', 'p', 2023) }, Error, 'Invalid Year!');
            assert.throws(() => { planYourTrip.choosingDestination('Ski Resort', 'p', 12.5) }, Error, 'Invalid Year!');
            assert.throws(() => { planYourTrip.choosingDestination('Ski Resort', 'p', '4') }, Error, 'Invalid Year!');
        })
        it('invalid destination(!= "Ski Resort") throws Error', () => {
            assert.throws(() => { planYourTrip.choosingDestination('p', 'Winter', 2024) }, Error, 'This destination is not what you are looking for.');
        });
        it('Winter season returns perfect time to visit', () => {
            assert.equal(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024), 'Great choice! The Winter is the perfect time to visit the Ski Resort.')
        });
        it('other seasons different from Winter returns visit during winter', () => {
            assert.equal(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024), 'Consider visiting during the Winter for the best experience at the Ski Resort.')
        });
    })

    describe('exploreOptions', () => {
        //valid input tests
        it('Removes one activity at specified index end returns array joined by ", "', () => {
            assert.equal(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 0), 'Snowboarding, Winter Hiking');
            assert.equal(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2), 'Skiing, Snowboarding');
        });

        //invalid input tests
        it('throws for activities not an array', () => {
            assert.throws(() => { planYourTrip.exploreOptions(true, 1) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.exploreOptions({}, 1) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.exploreOptions(undefined, 1) }, Error, 'Invalid Information!');
        })
        it('throws for activitiesIndex outside of the array bounds', () => {
            assert.throws(() => { planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 3) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 5) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], -1) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.exploreOptions([], 0) }, Error, 'Invalid Information!');
        })
        it('throws for activitiesIndex is not an integer', () => {
            assert.throws(() => { planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 3.5) }, Error, 'Invalid Information!');
        })
        it('throws for activitiesIndex is not a number', () => {
            assert.throws(() => { planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], '1') }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], undefined) }, Error, 'Invalid Information!');
        })
    })

    describe('estimateExpenses', () => {
        //valid input tests
        it('returns a budgets message for cost under or equal $500', () => {
            assert.equal(planYourTrip.estimateExpenses(100, 5), 'The trip is budget-friendly, estimated cost is $500.00.');
            assert.equal(planYourTrip.estimateExpenses(100, 4), 'The trip is budget-friendly, estimated cost is $400.00.');
        });
        it('returns a message for cost over $500', () => {
            assert.equal(planYourTrip.estimateExpenses(100, 6), 'The estimated cost for the trip is $600.00, plan accordingly.');
            assert.equal(planYourTrip.estimateExpenses(100, 10), 'The estimated cost for the trip is $1000.00, plan accordingly.');
        });

        //invalid input tests
        it('throws for params = 0', () => {
            assert.throws(() => { planYourTrip.estimateExpenses(0, 0) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.estimateExpenses(5, 0) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.estimateExpenses(0, 5) }, Error, 'Invalid Information!');
        })
        it('throws for params < 0', () => {
            assert.throws(() => { planYourTrip.estimateExpenses(-1, -1) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.estimateExpenses(-1, 5) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.estimateExpenses(5, -1) }, Error, 'Invalid Information!');
        })
        it('throws for params that are not of type number', () => {
            assert.throws(() => { planYourTrip.estimateExpenses(5, '5') }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.estimateExpenses(true, 5) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.estimateExpenses([], null) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.estimateExpenses(undefined, 5) }, Error, 'Invalid Information!');
            assert.throws(() => { planYourTrip.estimateExpenses(5, undefined) }, Error, 'Invalid Information!');
        })
    })
})