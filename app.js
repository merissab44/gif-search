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

    //get the url of the gif
    const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
    //render the gif view
    res.render('hello-gif', { gifUrl })
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