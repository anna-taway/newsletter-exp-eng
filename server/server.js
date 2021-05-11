require('dotenv').config();
var express = require('express');
var app = express();
var fs = require('fs'); 
var jwt = require('jsonwebtoken');

app.use(express.json());

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Endpoint : 1st User Registration and Generate accessToken
app.post('/login', (req, res) => {
    
    const { body } = req;
    if(body) {
        const { username } = body;
        if (username) {
            const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET)
            // return the JWT token for the future API calls
            res.json({
                success: true,
                status: 'success',
                token: accessToken,
                message: 'Successful registration'
            });
        } else {
            res.json({
                success: false,
                status: 'error',
                message: 'Please fill the mandatory field'
            });
        }
    } else {
        res.sendStatus(403);
    }
    
    
    
})

// Endpoint: Get a list of products
app.get('/products', function(req, res){
    fs.readFile(__dirname + "/" + "products.json", 'utf8', function(err, data){
        res.end(data);
    });
})

// Create a server to listen at port 8000
var server = app.listen(8000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})