const express = require('express');
const error = require('./middlewares/middlewareError');
const {
    controllerGetAuthors,
    controllerGetAuthor,
    controllerCreateAuthor,
    controllerUpdateAuthor,
    controllerDeleteAuthor } = require('./controllers/controllerAuthors');

const PORT = 3000;

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
    res.status(200).json({ message: 'Exemplo de arquitetura MSC + CRUD' });
});

app.get('/authors', controllerGetAuthors);

app.get('/authors/:id', controllerGetAuthor);

app.post('/authors', controllerCreateAuthor);

app.put('/authors/:id', controllerUpdateAuthor);

app.delete('/authors/:id', controllerDeleteAuthor);

app.use(error);

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
