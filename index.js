const express = require('express');
const mongoose = require("mongoose")
const morgan = require('morgan');


const app = express();
app.use(express.json());



const PORT = 8000

const startServer = ()=>{
  app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
  });
}


app.use(express.urlencoded({ extended: false }));




app.get('/', (req, res) => {
  res.write(`<h1>Hello World</h1>`);
});


startServer()
