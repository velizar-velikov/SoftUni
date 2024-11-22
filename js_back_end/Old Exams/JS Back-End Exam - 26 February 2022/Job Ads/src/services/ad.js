const { Ad } = require('../models/Ad.js');
const { User } = require('../models/User.js');

async function getAllAds() {
    return Ad.find({}).lean();
}

async function getThreeAds() {
    return Ad.find().limit(3).lean();
}

async function getAdById(id) {
    return Ad.findById(id).lean().populate('author').populate('applicants');
}

async function createAd(data, userId) {
    const ad = new Ad({
        headline: data.headline,
        location: data.location,
        companyName: data.companyName,
        companyDescription: data.companyDescription,
        author: userId,
    });

    await ad.save();

    return ad;
}

async function updateAd(id, data, userId) {
    const ad = await Ad.findById(id);

    if (ad.author.toString() !== userId) {
        throw new Error('Access denied');
    }

    ad.headline = data.headline;
    ad.location = data.location;
    ad.companyName = data.companyName;
    ad.companyDescription = data.companyDescription;

    await ad.save();

    return ad;
}

async function deleteAd(id, userId) {
    const ad = await Ad.findById(id);

    if (ad.author.toString() !== userId) {
        throw new Error('Access denied');
    }

    await Ad.findByIdAndDelete(id);

    return ad;
}

async function applyForAd(id, userId) {
    const ad = await Ad.findById(id);

    if (ad.author.toString() == userId) {
        throw new Error('Authors cannot apply to their own ads');
    }

    if (ad.applicants.some((a) => a.toString() == userId)) {
        throw new Error('Cannot apply twice for the same ad');
    }

    ad.applicants.push(userId);

    await ad.save();
}

async function searchForAdsByEmail(email) {
    const user = await User.findOne({ email });
    let ads = [];
    if (user) {
        ads = await Ad.find({ author: user._id }).lean();
    }
    return ads;
}

module.exports = {
    getAllAds,
    getThreeAds,
    getAdById,
    createAd,
    updateAd,
    deleteAd,
    applyForAd,
    searchForAdsByEmail,
};
