const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));



const inserUser=require("./server/dbs/addUser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use('/',inserUser);




app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});



var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;