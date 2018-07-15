
const express=require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
  
    res.send('<h1>Author : Rajit juyal</h1>');
    res.end();
});

module.exports=Router;