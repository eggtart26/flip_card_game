const express = require('express')
const app = express() //init server
const path = require('path');
const bodyParser = require('body-parser');//middleware
 

//import custom middleware function
const {logIncomingRequests} = require('./middleware.js');

//import controller functions
const PORT = 3000
app.listen(PORT, () => console.log(`Listening to the ${PORT}`))

app.use(logIncomingRequests); 
app.use(express.static(path.join(__dirname, '../client/dist')))//return static files
console.log(__dirname)

app.use(bodyParser.json());
