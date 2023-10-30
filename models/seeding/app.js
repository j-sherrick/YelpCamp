const db = require('../../controllers/db');
const { seed } = require('./seed');


seed(130).then(n => {
    console.log(`Initialized new database with ${n} random campgrounds`);
})
.catch(e => {
    console.error('Error while seeding database');
});