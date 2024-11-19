const { Stone } = require('../models/Stone.js');

async function getAll() {
    return Stone.find({}).lean();
}

async function getRecent() {
    return Stone.find({}).sort({ $natural: -1 }).limit(3).lean();
}

async function getById(id) {
    return Stone.findById(id).lean();
}

async function getBySearch(search) {
    const query = {};

    if (search.name) {
        query.name = search.name;
    }

    const stones = await Stone.find({ name: { $regex: new RegExp(search.name, 'i') } }).lean();
    return stones;
}

async function createStone(data, userId) {
    const stone = new Stone({
        name: data.name,
        category: data.category,
        color: data.color,
        image: data.image,
        location: data.location,
        formula: data.formula,
        description: data.description,
        owner: userId,
    });

    await stone.save();

    return stone;
}

async function editStone(stoneId, data) {
    const stone = await Stone.findByIdAndUpdate(
        stoneId,
        {
            $set: {
                name: data.name,
                category: data.category,
                color: data.color,
                image: data.image,
                location: data.location,
                formula: data.formula,
                description: data.description,
            },
        },
        { runValidators: true }
    );

    return stone;
}

async function deleteById(stoneId) {
    await Stone.findByIdAndDelete(stoneId);
}

async function likeStone(stoneId, userId) {
    await Stone.findByIdAndUpdate(stoneId, { $push: { likedList: userId } });
}

module.exports = {
    getAll,
    getRecent,
    getById,
    getBySearch,
    createStone,
    editStone,
    deleteById,
    likeStone,
};
