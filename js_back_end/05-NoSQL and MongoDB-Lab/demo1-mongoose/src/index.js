const mongoose = require('mongoose');
const { Person } = require('./models/Person.js');
const { Article } = require('./models/Article.js');

async function start() {
    const connectionStr = 'mongodb://localhost:27017/testdb';

    await mongoose.connect(connectionStr);

    console.log('Database connected');

    // FluidAPI
    // const elders = await Person.find({}).where('age').gt(50).lt(150).select('firstName age');
    // standard
    // const alsoElders = await Person.find({}).select('firstName age').skip(3).limit(2);
    // console.log(elders);
    // console.log(alsoElders);

    // const galina = await Person.findOne({ firstName: 'Galina' });

    // await Article.create({
    //     content: 'This is the first article of the site',
    //     author: galina,
    // });

    const articles = await Article.find().populate('author', 'firstName lastName');
    console.log(articles);

    mongoose.disconnect();
}

start();
