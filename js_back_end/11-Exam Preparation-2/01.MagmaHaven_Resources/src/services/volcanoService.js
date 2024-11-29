const { Volcano } = require('../models/Volcano.js');

async function getAllVolcanoes() {
    return Volcano.find().lean();
}
async function searchVolcanoes(search) {
    const query = {};
    if (search) {
        if (search.name) {
            const searchRegex = new RegExp(search.name, 'i');
            query.name = { $regex: searchRegex };
        }
        if (search.typeVolcano) {
            query.typeVolcano = search.typeVolcano;
        }
    }
    return Volcano.find(query).lean();
}

async function getVolcanoById(id) {
    return Volcano.findById(id).lean();
}

async function createVolcano(data, userId) {
    const volcano = new Volcano({
        name: data.name,
        location: data.location,
        elevation: data.elevation,
        lastEruption: data.lastEruption,
        image: data.image,
        typeVolcano: data.typeVolcano,
        description: data.description,
        owner: userId,
    });

    await volcano.save();

    return volcano;
}

async function updateVolcano(id, data, userId) {
    const volcano = await Volcano.findById(id);

    if (!volcano) {
        throw new Error(`Record ${id} does not exist`);
    }
    volcano.name = data.name;
    volcano.location = data.location;
    volcano.elevation = data.elevation;
    volcano.lastEruption = data.lastEruption;
    volcano.image = data.image;
    volcano.typeVolcano = data.typeVolcano;
    volcano.description = data.description;

    await volcano.save();

    return volcano;
}

async function deleteVolcano(id, userId) {
    const volcano = await Volcano.findById(id);

    if (volcano.owner.toString() != userId) {
        throw new Error('Access denied');
    }

    await Volcano.findByIdAndDelete(id);

    return volcano;
}

async function voteForVolcano(id, userId) {
    const volcano = await Volcano.findById(id);

    if (volcano.owner.toString() == userId) {
        throw new Error('Owner cannot vote for his own volcano');
    }

    volcano.voteList.push(userId);

    await volcano.save();
}

module.exports = {
    getAllVolcanoes,
    getVolcanoById,
    createVolcano,
    updateVolcano,
    deleteVolcano,
    voteForVolcano,
    searchVolcanoes,
};
