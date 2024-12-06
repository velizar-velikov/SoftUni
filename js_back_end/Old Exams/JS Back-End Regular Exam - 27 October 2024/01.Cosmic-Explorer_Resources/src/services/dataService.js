const { Data } = require('../models/Data.js');

async function getAll() {
    return Data.find().lean();
}
async function searchData(search) {
    const query = {};
    if (search) {
        if (search.name) {
            const searchRegex = new RegExp(search.name, 'i');
            query.name = { $regex: searchRegex };
        }
        if (search.solarSystem) {
            const searchRegex = new RegExp(search.solarSystem, 'i');
            query.solarSystem = { $regex: searchRegex };
        }
    }
    return Data.find(query).lean();
}

async function getById(id) {
    return Data.findById(id).lean();
}

async function createItem(data, userId) {
    const item = new Data({
        name: data.name,
        age: data.age,
        solarSystem: data.solarSystem,
        type: data.type,
        moons: data.moons,
        size: data.size,
        rings: data.rings,
        description: data.description,
        image: data.image,
        owner: userId,
    });

    await item.save();

    return item;
}

async function updateItem(id, data, userId) {
    const item = await Data.findById(id);

    if (!item) {
        throw new Error(`Record ${id} does not exist`);
    }

    if (item.owner.toString() !== userId) {
        throw new Error('Access denied');
    }

    item.name = data.name;
    item.age = data.age;
    item.solarSystem = data.solarSystem;
    item.type = data.type;
    item.moons = data.moons;
    item.size = data.size;
    item.rings = data.rings;
    item.description = data.description;
    item.image = data.image;

    await item.save();

    return item;
}

async function deleteItem(id, userId) {
    const item = await Data.findById(id);

    if (item.owner.toString() != userId) {
        throw new Error('Access denied');
    }

    await Data.findByIdAndDelete(id);

    return item;
}

async function likeItem(id, userId) {
    const item = await Data.findById(id);

    if (item.owner.toString() == userId) {
        throw new Error('Owner cannot like his own item');
    }

    if (item.likedList.includes(userId)) {
        throw new Error('Item can only be liked once');
    }

    item.likedList.push(userId);

    await item.save();
}

module.exports = {
    getAll,
    searchData,
    getById,
    createItem,
    updateItem,
    deleteItem,
    likeItem,
};
