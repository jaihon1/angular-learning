const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');

const api = require('./routes/api');



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

//Using API Routes
app.use('/api', api);






/*************************** Start Server ***************************/
app.listen(process.env.PORT || 3000, () => {
    console.log("Server started 3000.");
});