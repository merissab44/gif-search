// Import any libraries needed
const express = require('express')

//setup the app
const app = express();

//Setup middleware

//Setup routes

app.get('/', (req, res) => {
    res.send('Hello Squirrel')
});
//Start the server

app.listen(3000, () => {
    console.log('Gif search listening on port localhost:3000!');
});