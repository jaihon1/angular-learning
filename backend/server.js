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


var messages = [{text: 'some text', owner: 'Tim'}, {text: 'some other text', owner: 'Jim'}];

/*************************** GET METHODS ***************************/
app.get('/messages', (req, res) => {
    res.json(messages);
});



/*************************** Start Server ***************************/
app.listen(process.env.PORT || 3000, () => {
    console.log("Server started 3000.");
});