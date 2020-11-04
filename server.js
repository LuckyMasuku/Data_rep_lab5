const express = require('express');
const { resolve } = require('path');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

// parser application/xpress-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//listening to get the request
app.get('/', (req, res) => {
  res.send('Welcome to data and representation and querying !')
})
// this methord allows the url changing
// req and res presents htp request that is sent  with the response to the browser
app.get('/hello/:name', (req,res)=>{
console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})
//returns the json data about certain movies
app.get('/api/movies', (re, res)=>{


    
  
    const mymovies =[
        
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
       
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        
        }
        ];
        
    res.json({movies:mymovies});
});
// allows the path tto the index html
app.get('/test', (rep, res)=>{
    res.sendFile(__dirname + '/index.html');
})
//allows the data to be sent as url
//sends the first name and last name to the saver
// allows to pass perimiters on the url
app.get('/name', (req, res)=>{
    res.send('Hello ' + req.query.fname +' ' + req.query.lname);
})
//sends data as post methord
//listens to the
//data is sent using the body
app.post('/name', (req, res)=>{
res.send('Hello ' + req.body.fname + ' ' + req.body.lname);

})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})