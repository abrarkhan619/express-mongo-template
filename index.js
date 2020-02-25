const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const app = express();

require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@usersignup-ewwmc.mongodb.net/userdb?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.static(path.join(__dirname, 'public'))); // use path to join these two paths, 'dirname' is full path name to this folder
// also also tell express this path is static content for the client
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('.hbs', hbs({ // set the view engine to handlebars
    defaultLayout: 'layout', // set layout file as layout.hbs
    extname: '.hbs' // set extension name to .hbs
}));
app.set('view engine', '.hbs'); // tell express to use this engine

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3008, () => {
    console.log('server listening on port 3008');
});