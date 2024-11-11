const { Cast } = require('../models/Cast.js');

async function getAllCasts() {
    const casts = await Cast.find({}).lean();
    return casts;
}

async function getCastById(id) {
    const cast = await Cast.findById(id).lean();

    return cast;
}

async function createCast(castData) {
    const cast = {
        name: castData.name,
        age: castData.age,
        born: castData.born,
        nameInMovie: castData.nameInMovie,
        imageURL: castData.imageURL,
        movie: castData.movie,
    };

    const createdCast = await Cast.create(cast);

    return createdCast;
}

module.exports = { getAllCasts, getCastById, createCast };
