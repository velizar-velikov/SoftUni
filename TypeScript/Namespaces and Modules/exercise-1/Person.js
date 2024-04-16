var Greeter;
(function (Greeter) {
    var Tester = /** @class */ (function () {
        function Tester(test) {
            this.test = test;
        }
        Tester.prototype.getNameLength = function () {
            return this.test.length;
        };
        return Tester;
    }());
    Greeter.Tester = Tester;
})(Greeter || (Greeter = {}));
/// <reference path="Greeter.ts" />
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduction = function () {
        return "My name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    Person.prototype.sayGoodbye = function (name) {
        return "Dear ".concat(name, ", it was a pleasure meeting you!");
    };
    return Person;
}());
var p = new Person('Ivan Ivanov', 25);
console.log(p.introduction());
console.log(p.sayGoodbye('Petar Petrov'));
var myTest = new Greeter.Tester('Velizar');
console.log(myTest.getNameLength());
