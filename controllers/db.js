const mongoose = require('mongoose');
require('dotenv').config();

const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;

async function connectDb() {
    console.log(`Connecting to ${DB_NAME} as ${DB_USER}`);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
        console.log('Database connected')
    });
    await mongoose.connect(`mongodb://${DB_USER}:${encodeURIComponent(DB_PASS)}@${DB_HOST}:27017/${DB_NAME}`);
    return db;
}

module.exports = connectDb();