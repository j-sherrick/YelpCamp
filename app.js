const express = require('express');
const path = require('path');
const db = require('./controllers/db-connect');
const seed = require('./seed-data/seed');
const { error } = require('console');

db()
    .then(() => {
        console.log('db is connected');
    })
    .catch((error) => {
        console.error.apply(`db had an error: ${error}`);
    })

seed()
    .then(() => {
        console.log('db got seeded');
    })
    .catch((err) => {
        console.error(`seeding ran into a problem: ${err}`);
    })

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', {greeting: 'HELLO FROM YELPCAMP'});
})

// app.get('/campgrounds');

// app.get('/campgrounds/:id');

app.listen(3000, () => {
    console.log('serving on port 3000');
})