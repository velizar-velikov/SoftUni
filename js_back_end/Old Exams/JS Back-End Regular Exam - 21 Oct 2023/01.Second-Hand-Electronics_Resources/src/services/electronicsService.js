const { Electronic } = require('../models/Electronics.js');

async function getAll() {
    return Electronic.find().lean();
}
async function searchData(search) {
    const query = {};
    if (search) {
        if (search.name) {
            const searchRegex = new RegExp(search.name, 'i');
            query.name = { $regex: searchRegex };
        }
        if (search.type) {
            const searchRegex = new RegExp(search.type, 'i');
            query.type = { $regex: searchRegex };
        }
    }
    return Electronic.find(query).lean();
}

async function getById(id) {
    return Electronic.findById(id).lean();
}

async function createItem(data, userId) {
    const electronic = new Electronic({
        name: data.name,
        type: data.type,
        damages: data.damages,
        image: data.image,
        description: data.description,
        production: data.production,
        exploitation: data.exploitation,
        price: data.price,
        owner: userId,
    });

    await electronic.save();

    return electronic;
}

async function updateItem(id, data, userId) {
    const electronic = await Electronic.findById(id);

    if (!electronic) {
        throw new Error(`Record ${id} does not exist`);
    }

    if (electronic.owner.toString() !== userId) {
        throw new Error('Access denied');
    }

    electronic.name = data.name;
    electronic.type = data.type;
    electronic.damages = data.damages;
    electronic.image = data.image;
    electronic.description = data.description;
    electronic.production = data.production;
    electronic.exploitation = data.exploitation;
    electronic.price = data.price;

    await electronic.save();

    return electronic;
}

async function deleteItem(id, userId) {
    const electronic = await Electronic.findById(id);

    if (!electronic) {
        throw new Error(`Record ${id} does not exist`);
    }

    if (electronic.owner.toString() != userId) {
        throw new Error('Access denied');
    }

    await Electronic.findByIdAndDelete(id);

    return electronic;
}

async function buyElectronic(id, userId) {
    const electronic = await Electronic.findById(id);

    if (!electronic) {
        throw new Error(`Record ${id} does not exist`);
    }

    if (electronic.owner.toString() == userId) {
        throw new Error('Owner cannot buy his own electronic');
    }

    if (electronic.buyingList.includes(userId)) {
        throw new Error('You cannot buy an electronic twice');
    }

    electronic.buyingList.push(userId);

    await electronic.save();
}

module.exports = {
    getAll,
    searchData,
    getById,
    createItem,
    updateItem,
    deleteItem,
    buyElectronic,
};
