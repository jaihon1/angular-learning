const express = require('express');

var api = express.Router();

var messages = [{text: 'some text11', owner: 'Tim'}, {text: 'some other text', owner: 'Jim'}];

api.get('/messages', (req, res) => {
    res.json(messages);
});

api.post('/messages', (req, res) => {
    console.log(req.body);
    messages.push(req.body);
    res.sendStatus(200);
    
});

module.exports = api;




