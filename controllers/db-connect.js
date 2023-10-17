const mongoose = require('mongoose');

async function connectDb() {
    await mongoose.connect('mongodb://localhost:27017/yelp-camp');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
        console.log('Database connected')
    });
    console.log("Database connected");
    return db;
}

module.exports = connectDb();