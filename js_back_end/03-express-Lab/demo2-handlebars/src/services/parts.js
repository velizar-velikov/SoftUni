const catalogData = require('../../data/catalog.json');

let nextId = 6;

function getParts() {
    return catalogData;
}

function getPartById(id) {
    return catalogData.find((item) => item.id == id);
}

function createPart(partData) {
    const part = {
        id: nextId,
        name: partData.name,
        description: partData.description,
        price: Number(partData.price),
    };
    nextId++;

    catalogData.push(part);

    return part;
}

function editPart(id, partData) {
    const part = getPartById(id);
    part.name = partData.name;
    part.price = Number(partData.price);
    part.stock = Number(partData.stock);
    part.description = partData.description;

    return part;
}

module.exports = {
    getParts,
    getPartById,
    createPart,
    editPart,
};
