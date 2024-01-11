import { assert } from 'chai';
import { petAdoptionAgency } from './petAdoptionAgency.js';

describe('petAdoptionAgency object', () => {

    describe('isPetAvailable method', () => {

        //Correct input tests
        it('Should return "Sorry, there are no ${pet}(s) available for adoption at the agency." when availableCount <= 0', () => {
            assert.equal(petAdoptionAgency.isPetAvailable('cat', 0, false), 'Sorry, there are no cat(s) available for adoption at the agency.')
            assert.equal(petAdoptionAgency.isPetAvailable('cat', -3, false), 'Sorry, there are no cat(s) available for adoption at the agency.')
        });
        it('Should return "Great! We have 5 vaccinated cats(s) available for adoption at the agency." if availableCount = 5 and vaccinated = true', () => {
            assert.equal(petAdoptionAgency.isPetAvailable('cat', 5, true), 'Great! We have 5 vaccinated cat(s) available for adoption at the agency.')
        })
        it('Should return " Great! We have 5 cats(s) available for adoption, but they need vaccination." if availableCount = 5 and vaccinated = false', () => {
            assert.equal(petAdoptionAgency.isPetAvailable('cat', 5, false), 'Great! We have 5 cat(s) available for adoption, but they need vaccination.')
        });

        //Incorrect input tests
        it('Should throw an error "Invalid input" when pet is not a string', () => {
            assert.throws(() => { petAdoptionAgency.isPetAvailable(5, 5, true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable([], 5, true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable({}, 5, true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable(() => 'test', 5, true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable(true, 5, true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable(undefined, 5, true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable(null, 5, true) }, Error, /Invalid input/);
        });
        it('Should throw an error "Invalid input" when availableCount is not a number', () => {
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', '5', true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', false, true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', [], true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', {}, true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', () => 'test', true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', undefined, true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', null, true) }, Error, /Invalid input/);
        });
        it('Should throw an error "Invalid input" when vaccinated is not a boolean', () => {
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', 5, 5) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', 5, 'test testov') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', 5, []) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', 5, {}) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', 5, () => 'test') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', 5, undefined) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable('cat', 5, null) }, Error, /Invalid input/);
        })
        it('Should throw an error "Invalid input" when no parameters are valid', () => {
            assert.throws(() => { petAdoptionAgency.isPetAvailable(5, '5', 5) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable(false, true, 'test testov') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable([], undefined, []) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable({}, null, {}) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable(() => 'test', [], () => 'test') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable(undefined, {}, undefined) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.isPetAvailable(null, () => 'test', null) }, Error, /Invalid input/);
        })
    })

    describe('getRecommendedPets method', () => {

        //Correct input tests
        it('Should return "Recommended pets with the desired traits (jumps): cat" with getRecommendedPets([{ name: "cat", traits: "jumps" }, { name: "dog", traits: "runs" }], "jumps")', () => {
            assert.equal(petAdoptionAgency.getRecommendedPets([{ name: 'cat', traits: 'jumps' }, { name: 'dog', traits: 'runs' }], 'jumps'), 'Recommended pets with the desired traits (jumps): cat');
        });
        it('Should return "Sorry, we currently have no recommended pets with the desired traits: walks." with getRecommendedPets([{ name: "cat", traits: "jumps" }, { name: "dog", traits: "runs" }], "walks"', () => {
            assert.equal(petAdoptionAgency.getRecommendedPets([{ name: 'cat', traits: 'jumps' }, { name: 'dog', traits: 'runs' }], 'walks'), 'Sorry, we currently have no recommended pets with the desired traits: walks.');
        })

        //Incorrect input tests
        it('Should throw and error "Invalid input" when petList is not an array', () => {
            assert.throws(() => { petAdoptionAgency.getRecommendedPets(5, 'jumps') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets('test testov', 'jumps') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets({}, 'jumps') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets(true, 'jumps') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets(undefined, 'jumps') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets(null, 'jumps') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets(() => 'test', 'jumps') }, Error, /Invalid input/);
        });
        it('Should throw an error "Invalid input" when desiredTraits is not a string', () => {
            assert.throws(() => { petAdoptionAgency.getRecommendedPets([{}, {}], 5) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets([{}, {}], []) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets([{}, {}], {}) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets([{}, {}], () => 'test') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets([{}, {}], true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets([{}, {}], undefined) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets([{}, {}], null) }, Error, /Invalid input/);
        })
        it('Should throw an error "Invalid input" when petList is not an array and desiredTraits is not a string', () => {
            assert.throws(() => { petAdoptionAgency.getRecommendedPets(5, 5) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets({}, 5) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets(() => 'test', 5) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets(true, 5) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets(undefined, 5) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets(null, 5) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.getRecommendedPets('test testov', 5) }, Error, /Invalid input/);
        })
    });

    describe('adoptPet method', () => {

        //Correct input test
        it('Should return "Congratulations, Velizar! You have adopted cat from the agency. Enjoy your time with your new furry friend!" with adoptPet("cat", "Velizar")', () => {
            assert.equal(petAdoptionAgency.adoptPet('cat', 'Velizar'), 'Congratulations, Velizar! You have adopted cat from the agency. Enjoy your time with your new furry friend!');
        });

        //Incorrect input tests
        it('Should thro an error "Invalid input" when pet is not a string', () => {
            assert.throws(() => { petAdoptionAgency.adoptPet(5, 'Velizar') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet(true, 'Velizar') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet([], 'Velizar') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet({}, 'Velizar') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet(() => 'test', 'Velizar') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet(undefined, 'Velizar') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet(null, 'Velizar') }, Error, /Invalid input/);
        });
        it('Should throw an error "invalid input" when adopterName is not a string', () => {
            assert.throws(() => { petAdoptionAgency.adoptPet('cat', 5) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet('cat', []) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet('cat', {}) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet('cat', true) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet('cat', () => 'test') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet('cat', undefined) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet('cat', null) }, Error, /Invalid input/);
        });
        it('Should throw an error "invalid input" when pet and adopterName are not strings', () => {
            assert.throws(() => { petAdoptionAgency.adoptPet(5, 5) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet([], []) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet({}, {}) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet(() => 'test', () => 'test') }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet(true, false) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet(undefined, undefined) }, Error, /Invalid input/);
            assert.throws(() => { petAdoptionAgency.adoptPet(null, null) }, Error, /Invalid input/);
        })
    })
})