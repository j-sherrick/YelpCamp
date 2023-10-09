const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');
const campgrounds = require('./controllers/campground-controller');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const db = require("./db-connect");
db.sequelize.sync();

app.get('/', (req, res) => {
    res.render('home', {greeting: 'HELLO FROM YELPCAMP'});
})

app.get('/makecampground', campgrounds.create);

app.listen(3000, () => {
    console.log('serving on port 3000');
})