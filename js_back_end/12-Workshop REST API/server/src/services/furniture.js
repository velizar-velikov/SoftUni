const { Furniture } = require('../models/Furniture.js');

async function getAllFurniture() {
    return Furniture.find({});
}

async function getFurnitureForUser(userId) {
    return Furniture.find({ _ownerId: userId });
}

async function getFurnitureById(id) {
    return Furniture.findById(id);
}

async function createFurniture(data, userId) {
    const furniture = new Furniture({
        make: data.make,
        model: data.model,
        year: data.year,
        description: data.description,
        price: data.price,
        image: data.img,
        _ownerId: userId,
    });

    if (data.material) {
        furniture.material = data.material;
    }

    await furniture.save();

    return furniture;
}

async function updateFurniture(id, data, userId) {
    const furniture = await Furniture.findById(id);

    if (furniture._ownerId.toString() !== userId) {
        throw new Error('Access denied');
    }

    furniture.make = data.make;
    furniture.model = data.model;
    furniture.year = data.year;
    furniture.description = data.description;
    furniture.price = data.price;
    furniture.image = data.img;

    if (data.material) {
        furniture.material = data.material;
    }

    await furniture.save();

    return furniture;
}

async function deleteFurniture(id, userId) {
    const furniture = await Furniture.findById(id);

    if (furniture._ownerId.toString() !== userId) {
        throw new Error('Access denied');
    }

    await Furniture.findByIdAndDelete(id);

    return furniture;
}

module.exports = {
    getAllFurniture,
    getFurnitureForUser,
    getFurnitureById,
    createFurniture,
    updateFurniture,
    deleteFurniture,
};
