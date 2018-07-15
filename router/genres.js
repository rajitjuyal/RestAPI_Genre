
const express=require('express');
const Router = express.Router();
const Joi = require('joi');
Router.use(express.json());
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

Router.get('/', (req, res) => {
// res.sendStatus(200);
res.send(genres);
res.end();
});

Router.get('/:id', (req, res) => {
// res.sendStatus(200);\
const genre = genres.find(c => c.id === parseInt(req.params.id));
if (!genre) {
    return res.status(404).send(`Given id ${req.params.id} not found`);
}
res.send(genre);
res.end();
});

Router.delete('/:id', (req, res) => {
const genre = genres.find(c => c.id === parseInt(req.params.id));
if (!genre) return res.status(404).send('The genre with the given ID was not found.');

const index = genres.indexOf(genre);
genres.splice(index, 1);

res.send(genre);
});


Router.post('/', (req, res) => {

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

Router.put('/:id', (req, res) => {
const genre = genres.find(c => c.id === parseInt(req.params.id));
if (!genre) {
    return res.status(404).send(`Given id ${req.params.id} not found`);
}

const {    error} = validateParam(req.body);
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


module.exports=Router;