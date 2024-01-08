import { assert } from "chai";
import { library } from "./library.js";

describe('object library test', () => {

    describe('calcPriceOfBook test', () => {

        //Correct input tests
        it('Should calculate the price of the book with year after 1980', () => {
            let book = 'Harry Potter';
            assert.equal(library.calcPriceOfBook(book, 2000), `Price of ${book} is 20.00`);
        })

        it('Should calculate the price of the book with year of 1980 or before', () => {
            let book = 'The Witchers';
            assert.equal(library.calcPriceOfBook(book, 1980), `Price of ${book} is 10.00`);
            assert.equal(library.calcPriceOfBook(book, 1970), `Price of ${book} is 10.00`);
        })

        //Incorrect input tests
        it('Should throw an error if nameOfBook Is not a string', () => {
            assert.throws(() => { library.calcPriceOfBook(10, 2000) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook([], 2000) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook({}, 2000) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook(undefined, 2000) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook(null, 2000) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook(() => true, 2000) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook(true, 2000) }, Error, /Invalid input/);
        })

        it('Should throw an error if year(second param) is not an integer', () => {
            assert.throws(() => { library.calcPriceOfBook('The Witchers', 2000.5) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook('The Witchers', '2000') }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook('The Witchers', []) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook('The Witchers', {}) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook('The Witchers', undefined) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook('The Witchers', null) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook('The Witchers', true) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook('The Witchers', () => 'some text') }, Error, /Invalid input/);
        })

        it('Should throw an error if nameOfBook is not a string and year(second param) is not an integer', () => {
            assert.throws(() => { library.calcPriceOfBook(20, 2000.5) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook(true, '2000') }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook(undefined, []) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook(null, {}) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook([], undefined) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook({}, null) }, Error, /Invalid input/);
            assert.throws(() => { library.calcPriceOfBook(() => 'test testov', true) }, Error, /Invalid input/);
        })
    })

    describe('findBook test', () => {

        //Correct input tests
        it('Should return "We found the book you want." if the book is present in the passed booksArr', () => {
            assert.equal(library.findBook(['book1', 'book2', 'book3'], 'book2'), 'We found the book you want.');
        })

        it('Should return "The book you are looking for is not here!" if the book is not present in the passed booksArr', () => {
            assert.equal(library.findBook(['book1', 'book2', 'book3'], 'book4'), 'The book you are looking for is not here!');
        })

        it('Should throw an Error with message "No books currently available" if the passed booksArr is empty', () => {
            assert.throws(() => { library.findBook([], 'book4') }, Error, /No books currently available/);
        })
    })

    describe('arrangeTheBooks test', () => {

        //Correct input tests
        it('Should return "Great job, the books are arranged." if the passed countBooks argument is less or equal to the available space', () => {
            assert.equal(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(0), 'Great job, the books are arranged.');
        })

        it('Should return "Insufficient space, more shelves need to be purchased." if the passed countBooks argument is greater than the available space', () => {
            assert.equal(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
        })

        //Incorrect input tests
        it('Should throw an error with message "Invalid input" if the countBooks argument is a negative number', () => {
            assert.throws(() => { library.arrangeTheBooks(-10) }, Error, /Invalid input/);
        })

        it('Should throw an error with message "Invalid input" if the countBooks argument is not an integer', () => {
            assert.throws(() => { library.arrangeTheBooks(10.5) }, Error, /Invalid input/);
            assert.throws(() => { library.arrangeTheBooks('10') }, Error, /Invalid input/);
            assert.throws(() => { library.arrangeTheBooks([]) }, Error, /Invalid input/);
            assert.throws(() => { library.arrangeTheBooks({}) }, Error, /Invalid input/);
            assert.throws(() => { library.arrangeTheBooks(undefined) }, Error, /Invalid input/);
            assert.throws(() => { library.arrangeTheBooks(null) }, Error, /Invalid input/);
            assert.throws(() => { library.arrangeTheBooks(false) }, Error, /Invalid input/);
            assert.throws(() => { library.arrangeTheBooks(() => 'cool text') }, Error, /Invalid input/);
        })
    })
})