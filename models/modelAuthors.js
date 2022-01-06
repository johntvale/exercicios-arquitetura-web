const connection = require('./connection');

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors;
};

const getById = async (id) => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?';
  const [author] = await connection.execute(query, [id]);
  return author;
};

module.exports = {
  getAll,
  getById,
};
