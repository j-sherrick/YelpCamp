const seed  = require('./controllers/seed-controller');
const db    = require('./db-connect');

// Drop the campgrounds table if it exists
db.sequelize.sync({force: true});
// Populate the campgrounds table with new data
seed.populate();
// Clost the database connection
db.sequelize.close();