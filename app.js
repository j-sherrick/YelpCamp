const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const campgrounds = require('./controllers/campground-controller');
const db = require("./db-connect");
db.sequelize.sync();

app.get('/', (req, res) => {
    res.render('home', {greeting: 'HELLO FROM YELPCAMP'});
})

app.get('/campgrounds', campgrounds.getAll);

app.listen(3000, () => {
    console.log('serving on port 3000');
})