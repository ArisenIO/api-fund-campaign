require('./modal');
const express = require('express');
const server  = express();
const user = require('./routes/user');
const bodyParser = require('body-parser');

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}));

server.use('/', user);

server.use(function(req, res, next) {
    res.status(404);
    if (req.accepts('html')) {
        res.render('404', {url: req.url});
        return;
    }
    
    if(req.accepts('json')) {
        res.send({error: "Not found"});
        return;
    }

    res.type('txt').send('Not found');
})

server.listen(process.env.PORT, () => {
    console.log("SERVER IS RUNNING", process.env.PORT);
})