const { serviceGetAuthors,
  serviceGetAuthorById,
  serviceCreateAuthor,
  serviceUpdateAuthor,
  serviceDeleteAuthor } = require('../services/serviceAuthors');

const controllerGetAuthors = async (_req, res, next) => {
  try {
    const authors = await serviceGetAuthors();
    return res.status(200).json(authors);    
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

const controllerGetAuthor = async (req, res, next) => {
  const { id } = req.params;
  try {
    const author = await serviceGetAuthorById(id);
    return res.status(200).json(author);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

const controllerCreateAuthor = async (req, res, next) => {
  const { first_name, middle_name, last_name } = req.body;
  try {
    const author = await serviceCreateAuthor(first_name, middle_name, last_name);
    return res.status(201).json(author);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

const controllerUpdateAuthor = async (req, res, next) => {
  const { id } = req.params;
  const { first_name, middle_name, last_name } = req.body;
  try {
    const response = await serviceUpdateAuthor(id, first_name, middle_name, last_name);
    return res.status(201).json(response);
  } catch (error) {
    console.error(error.message);
    return next(error);    
  }
};

const controllerDeleteAuthor = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await serviceDeleteAuthor(id);
    return res.status(201).json(response);
  } catch (error) {
    console.error(error.message);
    return next(error);    
  }
};

module.exports = {
  controllerGetAuthors,
  controllerGetAuthor,
  controllerCreateAuthor,
  controllerUpdateAuthor,
  controllerDeleteAuthor,
};
