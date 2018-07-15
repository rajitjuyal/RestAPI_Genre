const express = require('express');
const app = express();
const Joi = require('joi');
app.use(express.json());


console.log(`app object gets created`);
app.get('/api/author', (req, res) => {
    //res.sendStatus(200);
    res.send('<h1>Author : Rajit juyal</h1>');
    res.end();
});

// Const genre array
const genres = [{
        id: 1,
        name: "action"
    },
    {
        id: 2,
        name: "adventure"
    },
    {
        id: 3,
        name: "comdey"
    },
    {
        id: 4,
        name: "sci-fie"
    },
];

app.get('/api/genre', (req, res) => {
    // res.sendStatus(200);
    res.send(genres);
    res.end();
});

app.get('/api/genre/:id', (req, res) => {
    // res.sendStatus(200);\
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        return res.status(404).send(`Given id ${req.params.id} not found`);
    }
    res.send(genre);
    res.end();
});

app.delete('/api/genre/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  
    const index = genres.indexOf(genre);
    genres.splice(index, 1);
  
    res.send(genre);
  });
app.post('/api/genre', (req, res) => {
    // res.sendStatus(200);
    // let name =app.body.name;
    const {
        error
    } = validateParam(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    console.log("Working fine ");
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

app.put('/api/genre/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        return res.status(404).send(`Given id ${req.params.id} not found`);
    }



    const {
        error
    } = validateParam(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    console.log("Working fine ");

    genre.name = req.body.name;
    res.send(genre);
});

function validateParam(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);


}
const port = 38080;
app.listen(port, () => {
    console.log(`Node app is listening to ${port}`);
});
//app.listen(port);