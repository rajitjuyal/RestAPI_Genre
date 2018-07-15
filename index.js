const express = require('express');
const app = express();
const Joi = require('joi');
const genres=require('./router/genres');
const author=require('./router/author');
app.use(express.json());


console.log(`app object gets created`);
app.use('/api/author',author);
app.use('/api/genre',genres);

const port = 38080;
app.listen(port, () => {
    console.log(`Node app is listening to ${port}`);
});