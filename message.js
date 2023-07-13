const express = require('express');

const fs = require('fs');


const message = express.Router();

message.get('/', (req, res, next) => {
    fs.readFile('index.txt', 'utf8', (err, data) => {
          
        res.send(`<body>${data }<form action = "/" method = "POST"><input type="text" name = "message"></input><br><button>Send</button></form></body>`);
        //res.send('</html>');
        if (err) {
          console.error(err);
          return;
        }
    });
    
});

message.post('/', (req, res, next) => {

    const message1 = req.body.message;

    const message = message1 + ":  ";
    
    fs.appendFile("index.txt", `${ message }`, (err) => {
        if (err) {
          console.log(err);
        }
    });

    res.redirect('/');
});


module.exports = message;