// Import any libraries needed
const express = require('express')

//setup the app
const app = express();

//Setup middleware

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Setup routes

app.get('/', (req, res) => {
    console.log(req.query)
    res.render('home')
});

app.get('/greetings/:name', (req,res) => {
    //get the name
    const name = req.params.name;
    //render the greetings view along with the name
    res.render('greetings', { name });
})
//Start the server

app.listen(3000, () => {
    console.log('Gif search listening on port localhost:3000!');
});