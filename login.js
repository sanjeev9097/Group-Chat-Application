// Implementation of Express

const express = require('express');

const fs  = require('fs');

const login = express.Router();



login.get('/login', (req, res, next) => {
    res.send('<form action = "/login" method = "POST"><input type="text" name = "username"></input><br><button>Login</button></form>');
    
});


login.post('/login', (req, res, next) => {
    const name = req.body.username;
    const username = name + ": ";
    fs.writeFileSync('index.txt',username);
    res.send(`
        <script>
            localStorage.setItem('username', '${username}');
            window.location.href = '/';
        </script>
    `);
    console.log(username);
    
});

module.exports = login;