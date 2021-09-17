// Import any libraries needed
const express = require('express')

//Require tenor so we can access the api
const Tenor = require('tenorjs').client({
    "Key": "VKPJNOFERSIW",
    "Filter": "high",
    "Locale": "en_US"
});

//setup the app
const app = express();

//Setup middleware

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Setup routes

app.get('/', (req, res) => {
    //when we haven't queried yet
    term = ""
    if (req.query.term){
        term = req.query.term
    }
   // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
   Tenor.Search.Query(term, "10")
   .then(response => {
       // store the gifs we get back from the search
       const gifs = response;
       // pass the gifs as an object into the home page
       res.render('home', { gifs })
   }).catch(console.error);
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