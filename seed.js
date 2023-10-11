const seed  = require('./controllers/seed-controller');
const db    = require('./db-connect');

// Drop the campgrounds table if it exists
db.sequelize.sync({force: true}).then(() => {
    seed.populate();
});