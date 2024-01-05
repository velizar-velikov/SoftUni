import { assert } from "chai";
import { createCalculator } from "./add-subtract.js";

describe('createCalculator function test', () => {

    //Positive tests
    it('should return an object with add, subtract and get functions as properties', () => {
        //Arrange
        let actualResult = JSON.stringify(createCalculator());
        let expectedResult = JSON.stringify({
            add: function (num) { value += Number(num); },
            subtract: function (num) { value -= Number(num); },
            get: function () { return value; }
        });
        //Assert
        assert.equal(actualResult, expectedResult);

    })

    it('method get should return the internal sum', () => {
        assert.equal(createCalculator().get(), 0);
    })

    it('method add should add num to value', () => {
        //Arrange
        let object = createCalculator();
        //Act
        let value = object.get();
        let expectedResult = value + 5;
        object.add(5);
        let actualResult = object.get();
        //Assert
        assert.equal(actualResult, expectedResult);
    });

    it('method add should add num as string to value', () => {
        //Arrange
        let object = createCalculator();
        //Act
        let value = object.get();
        let expectedResult = value + 5;
        object.add('5');
        let actualResult = object.get();
        //Assert
        assert.equal(actualResult, expectedResult);
    });

    it('method subtract should subtract num from value', () => {
        //Arrange
        let object = createCalculator();
        //Act
        let value = object.get();
        let expectedResult = value - 5;
        object.subtract(5);
        let actualResult = object.get();
        //Assert
        assert.equal(actualResult, expectedResult);
    })

    it('method subtract should subtract num as string from value', () => {
        //Arrange
        let object = createCalculator();
        //Act
        let value = object.get();
        let expectedResult = value - 5;
        object.subtract('5');
        let actualResult = object.get();
        //Assert
        assert.equal(actualResult, expectedResult);
    })

    it('should return 6 after add(10) and subtract(4)', () => {
        //Arrange
        let object = createCalculator();
        //Act
        let value = object.get();
        let expectedResult = value + 10 - 4;
        object.add(10)
        object.subtract(4);
        let actualResult = object.get();
        //Assert
        assert.equal(actualResult, expectedResult);
    })

    //Negative tests
    it('method add should change value to NaN when called wthout an argument', () => {
        //Arrange
        let object = createCalculator();
        //Act
        let expectedResult = JSON.stringify(NaN);
        object.add();
        let actualResult = JSON.stringify(object.get());
        //Assert
        assert.equal(actualResult, expectedResult);
    });

    it('method subtract should change value to NaN when called wthout an argument', () => {
        //Arrange
        let object = createCalculator();
        //Act
        let expectedResult = JSON.stringify(NaN);
        object.subtract();
        let actualResult = JSON.stringify(object.get());
        //Assert
        assert.equal(actualResult, expectedResult);
    });

    it('should return NaN after add("test testov")', () => {
        //Arrange
        let object = createCalculator();
        //Act
        let expectedResult = JSON.stringify(NaN);
        object.add('test testov');
        let actualResult = JSON.stringify(object.get());
        //Assert
        assert.equal(actualResult, expectedResult);
    });

    it('manipulating internal sum from outside should not do anything to the value', () => {
        //Arrange
        let object = createCalculator();
        //Act
        let value = object.get();
        let expectedResult = value;
        value = value + 5;
        let actualResult = object.get();
        //Assert
        assert.equal(actualResult, expectedResult);
    })
})
