const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema({
    tel: String,
    email: String,
});

const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [2, 'First name must be at least 2 characters long!'],
        maxLehgth: [10, 'First name must be no more than 10 characters long!'],
    },
    lastName: String,
    age: {
        type: Number,
        min: [0, 'Age must be a non-negative, got {VALUE}'],
        max: [150, 'Age must be no higher than 150, got {VALUE}'],
    },
    hobbies: {
        type: [String],
        enum: {
            values: ['Hiking', 'Climbing', 'Running'],
            message: 'Unacceptable hobby',
        },
    },
    contactInfo: contactInfoSchema,
});

personSchema.methods.sayHello = function () {
    return `Hello, I am ${this.firstName}`;
};

personSchema
    .virtual('fullName')
    .get(function () {
        return this.firstName + ' ' + this.lastName;
    })
    .set(function (value) {
        const [first, last] = value.split(' ');
        this.firstName = first;
        this.lastName = last;
    });

const Person = mongoose.model('Person', personSchema);

module.exports = { Person };
