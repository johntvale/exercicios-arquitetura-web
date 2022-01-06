const express = require('express');
const {
    controllerGetAllAuthors,
    controllerGetAuthorById } = require('./controllers/controllerAuthors');
const error = require('./middlewares/middlewareError');

const PORT = 3000;

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
    res.status(200).json("Olá mundo");
});

app.get('/authors', controllerGetAllAuthors);

app.get('/authors/:id', controllerGetAuthorById);

app.use(error);

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
