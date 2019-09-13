const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');

/*************************** APP SETUP ***************************/

//Routing is defined by using the Express's method that will correspond to HTTPS methods
const app = express();

//Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Setup the session middleware
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 3600000
    }
}));



app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Content-Type', 'application/json');
    next();
});


var messages = [{text: 'some text11', owner: 'Tim'}, {text: 'some other text', owner: 'Jim'}];

/*************************** GET METHODS ***************************/
app.get('/api/messages', (req, res) => {
    res.json(messages);
});



/*************************** Start Server ***************************/
app.listen(process.env.PORT || 3000, () => {
    console.log("Server started 3000.");
});