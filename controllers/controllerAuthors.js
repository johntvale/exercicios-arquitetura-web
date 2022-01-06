const { getAllAuthors, getAuthorById } = require('../services/serviceAuthors');

const controllerGetAllAuthors = async (_req, res, next) => {
  try {
    const authors = await getAllAuthors();
    return res.status(200).json(authors);    
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

const controllerGetAuthorById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const author = await getAuthorById(id);
    return res.status(200).json(author);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

module.exports = {
  controllerGetAllAuthors,
  controllerGetAuthorById,
};
