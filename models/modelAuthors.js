const connection = require('./connection');

const modelGetAll = async () => {
  const query = `SELECT * FROM model_example.authors;`;
  const [result] = await connection.execute(query);
  return result;
};

const modelGetById = async (id) => {
  const query = `SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?`;
  const [result] = await connection.execute(query, [id]);
  return result;
};

const modelInsertOne = async (firstName, middleName, lastName) => {
  const query = `INSERT INTO model_example.authors (first_name, middle_name, last_name)
    VALUES (?, ?, ?)`;
  const [result] = await connection.execute(query, [firstName, middleName, lastName]);
  return result;
};

const modelUpdateOne = async (id, firstName, middleName, lastName) => {
  const query = `UPDATE model_example.authors
  SET first_name = ?, middle_name = ?, last_name = ?
  WHERE id = ?`;
  const [result] = await connection.execute(query, [firstName, middleName, lastName, id]);
  return result;
};

const modelDeleteOne = async (id) => {
  const query = `DELETE FROM model_example.authors WHERE id = ?`;
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  modelGetAll,
  modelGetById,
  modelInsertOne,
  modelUpdateOne,
  modelDeleteOne,
};
