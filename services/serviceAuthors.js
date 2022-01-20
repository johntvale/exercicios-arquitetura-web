const { modelGetAll,
  modelGetById,
  modelInsertOne,
  modelUpdateOne,
  modelDeleteOne } = require('../models/modelAuthors');

const serviceGetAuthors = async () => {
  const authors = await modelGetAll();

  return authors;  
};

const serviceGetAuthorById = async (id) => {
  const author = await modelGetById(id);
  
  return author;
};

const serviceCreateAuthor = async (firstName, middleName, lastName) => {
  const result = await modelInsertOne(firstName, middleName, lastName);
  const createdAuthor = {
    id: result.insertId,
    firstName,
    middleName,
    lastName,
  };
  return createdAuthor;
};

const serviceUpdateAuthor = async (id, firstName, middleName, lastName) => {
  const result = await modelUpdateOne(id, firstName, middleName, lastName);
  const response = {
    info: result.info,
    message: 'Pessoa autora atualizada com sucesso!',
  }
  return response;
};

const serviceDeleteAuthor = async (id) => {
  const result = await modelDeleteOne(id);
  const response = {
    deletedAuthors: result.affectedRows,
  }
  return response;
};

module.exports = {
  serviceGetAuthors,
  serviceGetAuthorById,
  serviceCreateAuthor,
  serviceUpdateAuthor,
  serviceDeleteAuthor,
};
