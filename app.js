const express = require('express');



const bodyParser = require('body-parser');

const loginRouter = require('./login');

const messageRouter = require('./message');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use(loginRouter);

app.use(messageRouter);

app.listen(4000);
