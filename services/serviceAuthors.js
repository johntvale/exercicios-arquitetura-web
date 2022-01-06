const { getAll, getById } = require('../models/modelAuthors');

const getAllAuthors = async () => {
  const authors = await getAll();

  return authors;  
};

const getAuthorById = async (id) => {
  const author = await getById(id);
  
  return author;
};

module.exports = {
  getAllAuthors,
  getAuthorById,
};
