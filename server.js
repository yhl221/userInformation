const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));



const insertUser=require("./server/routers/addUser");
const getAllUser=require("./server/routers/getAll");
const modifyUser=require("./server/routers/modifyUser");
const searchUser=require("./server/routers/searchUser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use('/',insertUser);
app.use('/',getAllUser);
app.use('/',modifyUser);
app.use('/',searchUser);



app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});



var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;