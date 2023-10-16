const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yelp-camp');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));


module.exports = db.once('open', () => {
    console.log('Database connected');
});