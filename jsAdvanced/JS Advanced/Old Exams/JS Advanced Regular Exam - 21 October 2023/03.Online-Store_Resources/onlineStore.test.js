import { assert } from "chai";
import { onlineStore } from "./onlineStore.js";

describe('onlineStore', () => {

    describe('isProductAvailable', () => {

        //Correct input tests
        it('out of stock', () => {
            assert.equal(onlineStore.isProductAvailable('apple', 0), 'Sorry, apple is currently out of stock.');
            assert.equal(onlineStore.isProductAvailable('apple', -1), 'Sorry, apple is currently out of stock.');
        });
        it('in stock', () => {
            assert.equal(onlineStore.isProductAvailable('apple', 1), 'Great! apple is available for purchase.');
        });

        //Incorrect input tests
        it('product is not a string throws an error', () => {
            assert.throws(() => { onlineStore.isProductAvailable(1, 1) }, Error, 'Invalid input.');
            assert.throws(() => { onlineStore.isProductAvailable({}, 1) }, Error, 'Invalid input.');
        });
        it('stockQuantity is not a number throws an error', () => {
            assert.throws(() => { onlineStore.isProductAvailable('apple', '1') }, Error, 'Invalid input.');
            assert.throws(() => { onlineStore.isProductAvailable('apple', {}) }, Error, 'Invalid input.');
        });
        it('product is not a string and stockQuantity is not a number throws an error', () => {
            assert.throws(() => { onlineStore.isProductAvailable(1, '1') }, Error, 'Invalid input.');
            assert.throws(() => { onlineStore.isProductAvailable({}, {}) }, Error, 'Invalid input.');
        });
    });

    describe('canAffordProduct', () => {

        //Correct input tests
        it('not enough funds', () => {
            assert.equal(onlineStore.canAffordProduct(2, 1), "You don't have sufficient funds to buy this product.");
        });
        it('successful furchase with positive balance', () => {
            assert.equal(onlineStore.canAffordProduct(1, 2), 'Product purchased. Your remaining balance is $1.');
        });
        it('successful furchase with 0 balance left', () => {
            assert.equal(onlineStore.canAffordProduct(1, 1), 'Product purchased. Your remaining balance is $0.');
        });

        //Incorrect input tests
        it('productPrice is not a number throws an error', () => {
            assert.throws(() => { onlineStore.canAffordProduct('1', 1) }, Error, 'Invalid input.');
            assert.throws(() => { onlineStore.canAffordProduct({}, 1) }, Error, 'Invalid input.');
        });
        it('accountBalance is not a number throws an error', () => {
            assert.throws(() => { onlineStore.isProductAvailable(2, '1') }, Error, 'Invalid input.');
            assert.throws(() => { onlineStore.isProductAvailable(2, {}) }, Error, 'Invalid input.');
        });
        it('productPrice and acountBalance are not numbers throws an error', () => {
            assert.throws(() => { onlineStore.isProductAvailable('1', '1') }, Error, 'Invalid input.');
            assert.throws(() => { onlineStore.isProductAvailable({}, {}) }, Error, 'Invalid input.');
        });
    });

    describe('getRecommendedProducts', () => {

        //Correct input tests
        it('recommend one product', () => {
            assert.equal(onlineStore.getRecommendedProducts([{ name: 'apple', category: 'fruit' }], 'fruit'), "Recommended products in the fruit category: apple");
        });
        it('recommend multiple products', () => {
            assert.equal(onlineStore.getRecommendedProducts([{ name: 'apple', category: 'fruit' }, { name: 'pork', category: 'meat' }, { name: 'lamb', category: 'meat' }], 'meat'), 'Recommended products in the meat category: pork, lamb');
        });
        it('no recommended products', () => {
            assert.equal(onlineStore.getRecommendedProducts([{ name: 'apple', category: 'fruit' }], 'meat'), 'Sorry, we currently have no recommended products in the meat category.');
        });

        //Incorrect input tests
        it('productList is not an array throws an error', () => {
            assert.throws(() => { onlineStore.getRecommendedProducts('1', 'meat') }, Error, 'Invalid input.');
            assert.throws(() => { onlineStore.getRecommendedProducts({}, 'meat') }, Error, 'Invalid input.');
        });
        it('category is not a string throws an error', () => {
            assert.throws(() => { onlineStore.getRecommendedProducts([{ name: 'apple', category: 'fruit' }], 1) }, Error, 'Invalid input.');
            assert.throws(() => { onlineStore.getRecommendedProducts([{ name: 'apple', category: 'fruit' }], {}) }, Error, 'Invalid input.');
        });
        it('productList is not an array and category is not a string throws an error', () => {
            assert.throws(() => { onlineStore.getRecommendedProducts('1', '1') }, Error, 'Invalid input.');
            assert.throws(() => { onlineStore.getRecommendedProducts({}, {}) }, Error, 'Invalid input.');
        });
    });
})